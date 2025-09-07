document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('car-modal');
  const closeBtn = document.querySelector('.close-btn');

  if (!modal) {
    console.error('Element #car-modal not found!');
    return;
  }

  // Request notification permission
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      console.log('Notification permission:', permission);

      if (permission === 'granted') {
        // Wait 5 seconds AFTER permission is granted
        setTimeout(() => {
          console.log('Showing modal...');
          modal.style.display = 'flex'; // use flex for alignment

          // Trigger welcome notification
          new Notification('Hey there!', {
            body: 'Thanks for visiting our app.',
            icon: 'apple-touch-icon.png'
          });

          // Auto-hide modal after 7s
          setTimeout(() => {
            modal.style.display = 'none';
          }, 7000);

        }, 5000);
      } else {
        console.warn('Notifications not granted');
      }
    }).catch(err => {
      console.error('Permission request failed:', err);
    });
  } else {
    console.warn('Notifications not supported in this browser');
  }

  // Close modal when clicking the X
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});
















