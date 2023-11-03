document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if the product name is empty
    if (this.name.value === '') {
      alert('Please enter a product name.');
      return;
    }

    // Check if the product description is empty
    if (this.description.value === '') {
      alert('Please enter a product description.');
      return;
    }

    // Check if the product quantity is empty
    if (this.quantity.value === '') {
      alert('Please enter a product quantity.');
      return;
    }

    // Check if the product price is empty
    if (this.price.value === '') {
      alert('Please enter a product price.');
      return;
    }

    // Check if the product image is empty
    if (this.image.value === '') {
      alert('Please enter a product image URL.');
      return;
    }

    // Submit the form
    this.submit();
  });
// Get the form data
const formData = new FormData(document.querySelector('form'));

// Send the form data to the server
fetch('http://localhost:8888/v1/products/add-new-product', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(data => {
  // Handle the response from the server
});
