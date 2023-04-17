
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
.then(response => response.json())
.then(data => {
  const commentsTable = document.getElementById("comments");
  const commentsTableData=commentsTable.querySelector("tbody")
  data.forEach(comment => {
    const tr = document.createElement("tr"); // Create a new table row element for each comment
    tr.innerHTML = `<td>${comment.postId}</td>
    <td>${comment.id}</td>
  <td>${comment.name}</td>
  <td>${comment.email}</td>
  <td>${comment.body}</td>`; // Set the inner HTML of the table row
  commentsTableData.appendChild(tr); // Add the table row to the table body
  });
})
.catch(error => console.error(error)); 