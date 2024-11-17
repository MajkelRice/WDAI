let productsData = [];

async function fetchData() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  productsData = data.products.slice(0, 30);
  renderTable(productsData);
}

function renderTable(data) {
  const tableBody = document.getElementById("dataTable").querySelector("tbody");
  tableBody.innerHTML = "";

  data.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${product.thumbnail}" alt="${product.title}" width="50"></td>
            <td>${product.title}</td>
            <td>${product.description}</td>
        `;
    tableBody.appendChild(row);
  });
}

function filterData() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const filteredData = productsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
  );
  renderTable(filteredData);
}

function sortData() {
  const sortOrder = document.getElementById("sortOrder").value;
  const sortedData = [...productsData];

  if (sortOrder === "ascending") {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "descending") {
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
  }

  renderTable(sortedData);
}

window.onload = fetchData;
