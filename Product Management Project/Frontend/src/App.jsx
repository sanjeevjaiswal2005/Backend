import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [product, setProduct] = useState([
    // {
    //   bgImg: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    //   name: "Fresh Apples",
    //   description: "Crisp and juicy farm-fresh apples packed with nutrients.",
    //   price: 120,
    // },
    // {
    //   bgImg:
    //     "https://images.unsplash.com/photo-1662027883697-9877dbc93e38?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   name: "Organic Bananas",
    //   description: "Naturally ripened organic bananas, rich in potassium.",
    //   price: 60,
    // },
    // {
    //   bgImg: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    //   name: "Red Tomatoes",
    //   description: "Fresh red tomatoes perfect for cooking and salads.",
    //   price: 40,
    // },
    // {
    //   bgImg:
    //     "https://images.unsplash.com/photo-1723475158232-819e29803f4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   name: "Basmati Rice",
    //   description: "Premium long-grain basmati rice with rich aroma.",
    //   price: 350,
    // },
    // {
    //   bgImg: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    //   name: "Almonds",
    //   description: "High-quality almonds packed with protein and healthy fats.",
    //   price: 650,
    // },
  ]);

  //fatching data from the database...
  function fetchProducts() {
    axios.get("http://localhost:3000/api/products").then((res) => {
      // console.log(res.data.products);
      setProduct(res.data.products);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  //creating the products...
  function handleSubmit(e) {
    e.preventDefault();
    const { bgImg, name, description, price } = e.target.elements;

    // console.log(e.target.bgImg.value);
    // console.log(bgImg.value, name.value, description.value, price.value);

    axios
      .post("http://localhost:3000/api/products", {
        bgImg: bgImg.value,
        name: name.value,
        description: description.value,
        price: price.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchProducts();
      });
    e.target.reset();
  }

  //Updating the products..
  function handleUpdate(prdId) {
    console.log(prdId);
    axios
      .patch("http://localhost:3000/api/products/" + prdId, {
        name: "Updated name",
        description: "updated description",
        price: "000",
      })
      .then((res) => {
        console.log(res.data);
        fetchProducts();
      });
  }

  //deleting the products.
  function handleDelete(prdId) {
    axios.delete("http://localhost:3000/api/products/" + prdId).then((res) => {
      console.log(res.data);
      fetchProducts();
    });
    console.log(prdId);
  }

  return (
    <>
      <form className="for-container" onSubmit={handleSubmit}>
        <input
          name="bgImg"
          type="text"
          required
          placeholder="Give you product url."
        />
        <input
          name="name"
          type="text"
          required
          placeholder="Enter your product name"
        />
        <input
          name="description"
          type="text"
          required
          placeholder="Write about your products."
        />
        <input
          name="price"
          type="text"
          required
          placeholder="Enter your price."
        />
        <button onClick={() => handleSubmit}>Create Product</button>
      </form>
      <div className="products">
        {product.map((product, idx) => {
          return (
            <div className="product" key={idx}>
              <div className="top">
                <img src={product.bgImg} alt="" />
                <div className="abt">
                  <h2>Name:{product.name}</h2>
                  <p>{product.description}</p>
                  <h4>Price:{product.price}</h4>
                </div>
                <div className="btn">
                  <button onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(product._id)}
                    style={{ backgroundColor: "green" }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
