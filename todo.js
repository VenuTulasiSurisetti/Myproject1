
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
.then(response => response.json())
.then(data => {
  const todosTable = document.getElementById("todos");
  const todosTableData=todosTable.querySelector("tbody")
  data.forEach(todo => {
    const tr = document.createElement("tr"); // Create a new table row element for each todo
    tr.innerHTML = `<td>${todo.userId}</td>
  <td>${todo.id}</td>
  <td>${todo.title}</td>
  <td>${todo.completed}</td>`; // Set the inner HTML of the table row
  todosTableData.appendChild(tr); // Add the table row to the table body
  });
})
.catch(error => console.error(error));