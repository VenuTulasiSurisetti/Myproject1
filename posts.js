
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(data => {
      const postsTable = document.getElementById("posts");
      const postsTableData=postsTable.querySelector("tbody")
      data.forEach(post => {
        const tr = document.createElement("tr"); // Create a new table row element for each post
        tr.innerHTML = `<td>${post.userId}</td>
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>`; // Set the inner HTML of the table row
      postsTableData.appendChild(tr); // Add the table row to the table body
      });
    })
    .catch(error => console.error(error));