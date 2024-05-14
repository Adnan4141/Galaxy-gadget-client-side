import ManageReviewTable from "./ManageReviewTable"
import Navbar from "../../components/Shared/Navbar"
import Footer from "../../components/Shared/Footer"
function ManageReview() {


    return (
      <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
        <div className='my-6'>
          <h2 className='text-center text-red-600 text-4xl my-2 font-serif'>Manage Review</h2>
       <p className='text-center text-yellow-500 text-2xl font-serif'>Your Can Delete Any Unecessary Review</p>
        </div>
        <ManageReviewTable/>
      </div>
        <Footer/>
      </div>
    )
  }
  
  export default ManageReview