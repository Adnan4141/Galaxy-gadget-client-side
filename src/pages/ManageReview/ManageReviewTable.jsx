import { useEffect, useState } from "react"
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

function ManageReviewTable() {
  const data = useLoaderData();
 
  const [reviews,setReviews] =useState(data)
  useEffect(()=>{
      fetch('http://localhost:3000/all-review').then(res => res.json())
      .then(data => setReviews(data));
      
  },[])
  //  useEffect(()=>{
  //   fetch(`http://localhost:3000/all-vehicles`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))  
  //  },[])

  function handleDelete(reviewId) {
    fetch(`http://localhost:3000/delete-review/${reviewId}`, {
      method: "DELETE",
    }) 
      .then(res => res.json())
      .then((data) => {
        console.log(data.deletedCount);
        
        if (data.deletedCount > 0) {
          const Restreview = reviews?.filter(review => review._id != reviewId)
          setReviews(Restreview)

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
              <th>Rating</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {reviews?.map(review => (

              <tr key={review._id}>

                <td>{review.model}</td>
                <td>{review.brand}</td>
                <td>{review.rating} 
                
                </td>
                
                <td>
                 

                  <button className="btn" onClick={() =>
                    handleDelete(review._id)}>Delete</button>

                  <Link to={`/review/${review._id}`}>
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

export default ManageReviewTable
