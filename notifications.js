document.addEventListener('DOMContentLoaded', () => {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      console.log('Notification permission:', permission);

      if (permission === 'granted') {
        // Delay 10 seconds, then reveal trigger
        setTimeout(() => {
          document.getElementById('notification-trigger').style.display = 'block';

          // Now trigger the welcome notification
          new Notification('Hey there!', {
            body: 'Thanks for visiting our app.',
            icon: 'apple-touch-icon.png'
          });
        }, 10000);
      }
    });
  }
});

// Trigger notification on hover — only if trigger is visible
document.getElementById('car-element').addEventListener('mouseenter', () => {
  const triggerVisible = document.getElementById('notification-trigger').style.display === 'block';

  if (Notification.permission === 'granted' && triggerVisible) {
    new Notification('Check out this!', {
      body: 'Click to learn more.',
      icon: 'apple-touch-icon.png'
    });
  }
});





