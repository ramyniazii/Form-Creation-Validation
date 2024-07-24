async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
  
    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      // Clear the loading message
      dataContainer.innerHTML = '';
  
      // Create and append the user list
      const userList = document.createElement('ul');
      users.forEach((user) => {
        const userItem = document.createElement('li');
        userItem.textContent = user.name;
        userList.appendChild(userItem);
      });
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle any errors
      dataContainer.innerHTML = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
    }
  }
  
  // Invoke the fetchUserData function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', fetchUserData);