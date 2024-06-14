document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("Description").value;
  const brand = document.getElementById("Brand").value;
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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE5YjdjMjM5YzAwMTUyZjRiNDUiLCJpYXQiOjE3MTgzNTI1MzksImV4cCI6MTcxOTU2MjEzOX0.ZHEiqzvZkyMP52HUWzScRFao7VXvXngpdxjn8wkvac",
    },
    body: JSON.stringify(newProduct),
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      console.log("Product created successfully:", data);
    })
    .catch((error) => {
      console.error("Error creating product:", error);
    });
});

document.getElementById("modify").addEventListener("click", function (e) {
  e.preventDefault();

  if (!confirm("Sei sicuro di voler modificare questo elemento?")) {
    return;
  }

  const _id = document.getElementById("_id").value;
  const name = document.getElementById("name").value;
  const description = document.getElementById("Description").value;
  const brand = document.getElementById("Brand").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const price = document.getElementById("Price").value;

  const modificatedProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };

  fetch(`https://striveschool-api.herokuapp.com/api/product/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE5YjdjMjM5YzAwMTUyZjRiNDUiLCJpYXQiOjE3MTgzNTI1MzksImV4cCI6MTcxOTU2MjEzOX0.ZHEiqzvZkyMP52HUWzScRFao7VXvXngpdxjn8wkvac",
    },
    body: JSON.stringify(modificatedProduct),
  })
    .then((resp) => {
      if (resp.ok) {
        alert("Elemento modificato con successo!");
        return resp.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      console.log("Product modified successfully:", data);
    })
    .catch((error) => {
      console.error("Error modifying product:", error);
    });
});

document.getElementById("delete").addEventListener("click", function (e) {
  e.preventDefault();

  if (!confirm("Sei sicuro di voler cancellare questo elemento?")) {
    return;
  }

  const _id = document.getElementById("_id").value;

  fetch(`https://striveschool-api.herokuapp.com/api/product/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE5YjdjMjM5YzAwMTUyZjRiNDUiLCJpYXQiOjE3MTgzNTI1MzksImV4cCI6MTcxOTU2MjEzOX0.ZHEiqzvZkyMP52HUWzScRFao7VXvXngpdxjn8wkvac",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        alert("Elemento cancellato con successo!");
        return resp.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      console.log("Product deleted successfully:", data);
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
    });
});
