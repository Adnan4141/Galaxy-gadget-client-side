import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

function ManageProductsTable() {

  //  useEffect(()=>{
  //   fetch(`http://localhost:3000/all-vehicles`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))  
  //  },[])

  const data = useLoaderData();
  const [products, setproducts] = useState(data)

  function handleDelete(productId) {
    fetch(`http://localhost:3000/delete-by-id/${productId}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const Restproduct = products?.filter(product => product._id != productId)
          setproducts(Restproduct)
        }
      });

  }



  return (
    <div className="my-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Model</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {products?.map(product => (

              <tr key={product._id}>

                <td>{product.model}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>
                  <Link to={`/update-product/${product._id}`}>
                    <button className="btn mx-5">Update</button>
                  </Link>

                  <button className="btn" onClick={() =>
                    handleDelete(product._id)}>Delete</button>

                  <Link to={`/product/${product._id}`}>
                    <button className="btn mx-3">View</button>
                  </Link>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageProductsTable
