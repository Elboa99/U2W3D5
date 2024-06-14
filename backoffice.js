const button = document.getElementById("btn");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("Description").value;
  const brand = document.getElementById("Brand").value; // Corrected this line
  const imageUrl = document.getElementById("imageUrl").value;
  const price = document.getElementById("Price").value;

  const newProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE5YjdjMjM5YzAwMTUyZjRiNDUiLCJpYXQiOjE3MTgzNTI1MzksImV4cCI6MTcxOTU2MjEzOX0.ZHEiqzvZkyMP52HUWZzScRFao7VXvXngpdxjn8wkvac",
    },
    body: JSON.stringify(newProduct),
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((data) => {
      console.log("Product created successfully:", data);
    })
    .catch((error) => {
      console.error("Error creating product:", error);
    });
});
