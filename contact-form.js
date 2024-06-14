  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var formData = new FormData(this);
    var queryString = new URLSearchParams();
  
    formData.forEach((value, key) => {
      queryString.append(key, value);
    });
  
    fetch('https://hooks.zapier.com/hooks/catch/19161262/2oaxlqn/' + queryString.toString(), { // replace 'your_webhook_url' with the actual webhook URL from Zapier
      method: 'GET', // Zapier expects data in query string, use GET method
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('formResponse').style.display = 'block';
      } else {
        alert('There was a problem with the request.');
      }
    })
    .catch(error => {
      alert('There was an error submitting the form.');
    });
  });