const publicVapidKey = "BOZPCDN7K2Lrc_FY1ROTtHwTNYt6aWPrLtXyGgzE7rIJ90z33IH0xBNd2RZhr1-pQIb960_52-qCyUGwMhT5taM"; // same as in Netlify env

// Register Service Worker & ask permission
document.getElementById("subscribeBtn").addEventListener("click", async () => {
  if ("serviceWorker" in navigator) {
    const register = await navigator.serviceWorker.register("sw.js", {
      scope: "/"
    });

    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      alert("You need to allow notifications!");
      return;
    }

    // Subscribe to push
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

    console.log("Subscription:", subscription);

    // Send subscription to backend (Netlify Function)
    await fetch("https://your-app.netlify.app/.netlify/functions/send-push", {
      method: "POST",
      body: JSON.stringify(subscription)
    });

    alert("Subscription sent to server!");
  }
});

// Helper: convert base64 to Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
}
