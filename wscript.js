// Function to handle subscription button click
function selectPlan(plan) {
  alert(`Thank you for choosing the ${plan} Plan!`);
}

// Contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for contacting us!');
});
