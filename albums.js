
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
.then(response => response.json())
.then(data => {
  const albumsTable = document.getElementById("albums");
  const albumsTableData=albumsTable.querySelector("tbody")
  data.forEach(album => {
    const tr = document.createElement("tr"); // Create a new table row element for each album
    tr.innerHTML = `<td>${album.userId}</td>
  <td>${album.id}</td>
  <td>${album.title}</td>
  `; // Set the inner HTML of the table row
  albumsTableData.appendChild(tr); // Add the table row to the table body
  });
})
.catch(error => console.error(error));