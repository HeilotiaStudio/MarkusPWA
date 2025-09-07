document.addEventListener('DOMContentLoaded', () => {
  const carElement = document.getElementById('car-element');

  if (!carElement) {
    console.error('Element #car-element not found!');
    return;
  }

  // Hide it initially
  carElement.style.display = 'none';

  // Request notification permission
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      console.log('Notification permission:', permission);

      if (permission === 'granted') {
        // Wait 10 seconds AFTER permission is granted
        setTimeout(() => {
          console.log('Showing car element...');
          carElement.style.display = 'block';

          // Attach hover listener AFTER it's visible
          carElement.addEventListener('mouseenter', () => {
            console.log('Hover detected');
            new Notification('Check out this!', {
              body: 'Click to learn more.',
              icon: 'apple-touch-icon.png'
            });
          });

          // Trigger welcome notification
          new Notification('Hey there!', {
            body: 'Thanks for visiting our app.',
            icon: 'apple-touch-icon.png'
          });
        }, 10000);
      } else {
        console.warn('Notifications not granted');
      }
    }).catch(err => {
      console.error('Permission request failed:', err);
    });
  } else {
    console.warn('Notifications not supported in this browser');
  }
});













