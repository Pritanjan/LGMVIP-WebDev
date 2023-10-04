document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.getElementById('registrationForm');
  const registeredData = document.getElementById('registeredData');
//   const imagePreview = document.getElementById('imagePreview');
  const clearButton = document.getElementById('clearButton');

  registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(registrationForm);
      const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          imageLink: formData.get('imageLink'),
          gender: formData.get('gender'),
          skills: formData.getAll('skills[]')
      };

      // Create a new container for each registered person
      const personContainer = document.createElement('div');
      personContainer.className = 'person-container';

      // Display the registered data inside the container
      personContainer.innerHTML = `
          <h3>${data.name}</h3>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
          <p>Gender: ${data.gender}</p>
          <p>Skills: ${data.skills.join(', ')}</p>
      `;

      // Display the image inside the container
      const imageContainer = document.createElement('div');
      imageContainer.className = 'image-container';
      imageContainer.innerHTML = `
          <h2>Image Preview</h2>
          <img src="${data.imageLink}" alt="Image Preview">
      `;

      // Append the person container to the registered data
      registeredData.appendChild(personContainer);

      // Append the image container to the registered data
      registeredData.appendChild(imageContainer);

      // Clear the form
      registrationForm.reset();
  });

  clearButton.addEventListener('click', () => {
      registeredData.innerHTML = ''; // Clear all registered data
      imagePreview.src = ''; // Clear the image preview
  });
});
