/ Request permission when the page loads
document.addEventListener('DOMContentLoaded', () => {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      console.log('Notification permission:', permission);

      if (permission === 'granted') {
        // Wait 10 seconds AFTER permission is granted
        setTimeout(() => {
          new Notification('Hey there!', {
            body: 'Thanks for visiting our app.',
            icon: 'apple-touch-icon.png' // Make sure this path is correct
          });
        }, 10000);
      }
    });
  }
});

// Trigger notification on hover
document.getElementById('car-element').addEventListener('mouseenter', () => {
  if (Notification.permission === 'granted') {
    new Notification('Check out this!', {
      body: 'Click to learn more.',
      icon: 'apple-touch-icon.png'
    });
  }
});



