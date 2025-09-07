// Request permission when the page loads
document.addEventListener('DOMContentLoaded', () => {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      console.log('Notification permission:', permission);
    });
  }
});

// Trigger notification after 10 seconds
setTimeout(() => {
  if (Notification.permission === 'granted') {
    new Notification('Hey there!', {
      body: 'Thanks for visiting our app.',
      icon: '/images/car-icon.png' // Make sure this path is correct
    });
  }
}, 10000);

// Trigger notification on hover
document.getElementById('car-element').addEventListener('mouseenter', () => {
  if (Notification.permission === 'granted') {
    new Notification('Check out this car!', {
      body: 'Click to learn more.',
      icon: '/images/car-icon.png'
    });
  }
});

