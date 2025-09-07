document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('car-toast');
  const closeBtn = toast?.querySelector('.close-btn');

  if (!toast) {
    console.error('Element #car-toast not found!');
    return;
  }

  // Ask for browser notification permission
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      console.log('Notification permission:', permission);

      if (permission === 'granted') {
        // Show toast 5s after permission granted
        setTimeout(() => {
          console.log('Showing toast...');
          toast.style.display = 'block';

          // Trigger native browser notification as well
          new Notification('Hey there!', {
            body: 'Thanks for visiting our app.',
            icon: 'apple-touch-icon.png'
          });

          // Auto-hide toast after 5s
          setTimeout(() => {
            toast.style.display = 'none';
          }, 5000);
        }, 5000);
      }
    }).catch(err => {
      console.error('Permission request failed:', err);
    });
  }

  // Close toast when clicking the X
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.style.display = 'none';
    });
  }
});

















