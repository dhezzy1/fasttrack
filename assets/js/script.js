function toggleMenu() {
  let menu = document.getElementById("nav-menu");
  if (menu) {
      menu.classList.toggle("active");
  }
}

const trackingData = {
  "123456": { status: "In Transit", expectedDelivery: "2 Days" },
  "654321": { status: "Delivered", expectedDelivery: "Yesterday" },
  "789012": { status: "Out for Delivery", expectedDelivery: "Today" }
};

function trackPackage(event) {
  event.preventDefault();
  let trackingNumber = document.getElementById("tracking-number").value.trim();
  let resultDiv = document.getElementById("tracking-result");
  
  if (trackingData[trackingNumber]) {
      resultDiv.innerHTML = `Status: ${trackingData[trackingNumber].status} - Expected Delivery: ${trackingData[trackingNumber].expectedDelivery}`;
      resultDiv.style.color = "green";
  } else {
      resultDiv.innerHTML = "Invalid Tracking Number. Please try again.";
      resultDiv.style.color = "red";
  }
}

function subscribeNewsletter(event) {
  event.preventDefault();
  let email = document.getElementById("newsletter-email").value.trim();
  if (email) {
      alert("Thank you for subscribing to our newsletter!");
  }
}