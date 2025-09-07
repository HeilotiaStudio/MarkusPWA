document.addEventListener('DOMContentLoaded', () => {
  const carElement = document.getElementById('car-element');

  if (!carElement) {
    console.error('Element #car-element not found!');
    return;
  }

  // Request notification permission
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      console.log('Notification permission:', permission);

      if (permission === 'granted') {
        // Wait 10 seconds AFTER permission is granted
        setTimeout(() => {
          // Show the hover element
          carElement.style.display = 'block';

          // Trigger welcome notification
          new Notification('Hey there!', {
            body: 'Thanks for visiting our app.',
            icon: 'apple-touch-icon.png'
          });

          // ✅ Attach hover listener AFTER element is visible
          carElement.addEventListener('mouseenter', () => {
            new Notification('Check out this!', {
              body: 'Click to learn more.',
              icon: 'apple-touch-icon.png'
            });
          });
        }, 10000);
      }
    });
  }
});











