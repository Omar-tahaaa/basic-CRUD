import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.css"

export default function Products() {
  const param = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${param.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [param.productId]);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-8 col-xl-6">
            <div class="card text-black">
              <img
                src={product.image}
                class="card-img-top"
                alt="Apple Computer"
              />
              <div class="card-body">
                <div class="text-center">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="text-muted mb-4">{product.description}</p>
                </div>
                <div class="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Price</span>
                  <span>${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
