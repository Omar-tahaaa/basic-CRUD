import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const param = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:9000/products/${param.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [param.productId]);

  function handleTitleChange(e) {
    setProduct({
      ...product,
      title: e.target.value,
    });
  }

  function handlePriceChange(e) {
    setProduct({
      ...product,
      price: e.target.value,
    });
  }

  function handleDescChange(e) {
    setProduct({
      ...product,
      description: e.target.value,
    });
  }
  function handleImageChange(e) {
    setProduct({
      ...product,
      image: e.target.value,
    });
  }

  function handleEdit(e) {
    e.preventDefault();

    fetch(`http://localhost:9000/products/${param.productId}`, {
      method: "PUT",
      body: JSON.stringify(product),
    })
      .then((res) => res.json())

      navigate('/')
  }

  return (
    // <form onSubmit={handleEdit}>
    //   <label>
    //     title:
    //     <input value={product.title || "" } onChange={handleTitleChange} required />
    //   </label>
    //   <label>
    //     price:
    //     <input value={product.price || ""} onChange={handlePriceChange} required />
    //   </label>
    //   <label>
    //     description:
    //     <input
    //       value={product.description || ""}
    //       onChange={handleDescChange}
    //       required
    //     />
    //   </label>
    //   <label>
    //     image:
    //     <input value={product.image || ""} onChange={handleImageChange} required />
    //   </label>
    //   <button className="btn btn-danger">Edit</button>
    // </form>

    // ---------------------------------------
    <div class="mask d-flex align-items-center h-100 mt-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="card" style={{ borderRadius: "1rem" }}>
            <div class="card-body p-5">
              <h1 class="mb-2 text-center">Edit Product</h1>

              <form onSubmit={handleEdit}>
                <div class="form-outline mb-4">
                  <label class="form-label" for="title">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    value={product.title || ""}
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
                    value={product.price || ""}
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
                    value={product.image || ""}
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
                    value={product.description || ""}
                    onChange={handleDescChange}
                    required
                  ></textarea>
                </div>

                <div class="form-check d-flex justify-content-center ">
                  <button type="submit" className="btn btn-success">
                    Save
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

export default EditProduct;
