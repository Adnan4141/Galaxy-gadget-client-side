import { Link } from "react-router-dom"


function SingleProductCard({product}) {
  return (

    <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">

      <figure><img className="block w-full h-[200px]" src={product?.image} alt={product?.model} /></figure>

      <div className="card-body">
        <h2 className="card-title font-serif">{product?.model}</h2>
        <p className="font-serif">{product?.brand}</p>
        <p>{product?.description}</p>


        <div className="flex justify-between">

          <div className="card-actions justify-end">
            <Link to={`/payment/${product._id}`}>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                ${product?.price} 
              </button>
            </Link>
          </div>


          <div className="card-actions justify-end">

            <Link to={`/product/${product._id}`}>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </Link>

          </div>
        </div>

      </div>
    </div>

  )
}

export default SingleProductCard
