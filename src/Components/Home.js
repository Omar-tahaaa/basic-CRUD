import { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="gap">
          <h1>Products</h1>
          <Link className="btn btn-success" to={"/products/addNewProduct"}>
            + Add New Product
          </Link>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-4" key={product.id}>
              <Product product={product} getProducts={getProducts} />{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
