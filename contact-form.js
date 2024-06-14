document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var formData = new FormData(this);
    var object = {};
    formData.forEach((value, key) => { object[key] = value });
    var json = JSON.stringify(object);
  
    fetch('https://hooks.zapier.com/hooks/catch/19161262/2oaxlqn/', { // replace 'your_webhook_url' with the actual webhook URL from Zapier
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
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



  