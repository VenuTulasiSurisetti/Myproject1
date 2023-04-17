fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  const usersTable = document.getElementById("users-table"); // Get the table element
  const userTablebBody = usersTable.querySelector("tbody"); // Get the table body element
  data.forEach(user => {
    const tr = document.createElement("tr"); // Create a new table row element for each user
    tr.innerHTML = `
      <td>${user.id}</td>
      <td>${user.company.name}</td>
      <td>${user.name}</td>
      <td> name :${user.name} <br> 
      username:${user.username}<br>
      email:${user.email}<br>
      street:${user.address.street}<br>
      suite:${user.address.suite}<br>
      city:${user.address.city}<br>
      zip code :${user.address.zipcode}<br>
      latitude:${user.address.geo.lat}<br>
      longitude:${user.address.geo.lng}<br>
      Phone:${user.phone}<br>
      Website:${user.website}<br>
      CatchPhrase: ${user.company.catchPhrase}<br>
      bs :${user.company.bs}<br>
      </td>
      <td><a href="posts.html?id=${user.id}">posts(10)</a><br>
          <a href="comments.html?id=${user.id}">Comments(10)</a><br>
          <a href="todo.html?id=${user.id}">Todos(10)</a><br>
          <a href="albums.html?id=${user.id}">Albums(12)</a></td>`; // Set the inner HTML of the table row
          userTablebBody.appendChild(tr); // Add the table row to the table body
  });
})
.catch(error => console.error(error));