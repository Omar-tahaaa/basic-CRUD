import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  function handleTitleChange(e) {
    setProductData({
      ...productData,
      title: e.target.value,
    });
  }

  function handlePriceChange(e) {
    setProductData({
      ...productData,
      price: e.target.value,
    });
  }

  function handleDescChange(e) {
    setProductData({
      ...productData,
      description: e.target.value,
    });
  }
  function handleImageChange(e) {
    setProductData({
      ...productData,
      image: e.target.value,
    });
  }

  function handleAdd(e) {
    e.preventDefault();
    fetch("http://localhost:9000/products", {
      method: "POST",
      body: JSON.stringify(productData),
    }).then((res) => res.json());

    navigate("/");
  }

  return (
    <div class="mask d-flex align-items-center h-100 mt-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="card" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5">
                <h1 class="mb-2 text-center">Add New Product</h1>

                <form onSubmit={handleAdd}>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="title">
                      Title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      value={productData.title}
                      onChange={handleTitleChange}
                      required
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="price">
                      Price
                    </label>
                    <input
                      type="number"
                      min={1}
                      class="form-control"
                      id="price"
                      value={productData.price}
                      onChange={handlePriceChange}
                      required
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="image">
                      Image URL
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Image"
                      value={productData.image}
                      onChange={handleImageChange}
                      required
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="desc">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      id="desc"
                      rows="3"
                      value={productData.description}
                      onChange={handleDescChange}
                      required
                    ></textarea>
                  </div>

                  <div class="form-check d-flex justify-content-center ">
                    <button type="submit" className="btn btn-success">
                      Add Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
