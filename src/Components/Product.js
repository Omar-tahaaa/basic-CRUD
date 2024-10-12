import { Link } from "react-router-dom";
import swal from "sweetalert";
import './Product.css'

function Product({ product, getProducts }) {
  function handleDelete(productId) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:9000/products/${productId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => getProducts());
      }
    });
  }
  return (
    <div className="col">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title.slice(0,24)}{product.title.length > 18 && "..."}</h5>
          <p className="card-text">${product.price}</p>
          <Link to={`products/${product.id}`} className="btn btn-info">
            Details
          </Link>
          <div className="buttons">
          <Link
            className="btn btn-danger"
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </Link>
          <Link to={`products/edit/${product.id}`} className="btn btn-primary">
            Edit
          </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Product;
