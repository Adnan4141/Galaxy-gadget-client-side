import Navbar from './../../components/Shared/Navbar';
import Footer from './../../components/Shared/Footer';
import ManageProductsTable from './ManageProductsTable';


function ManageProducts() {


  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto'>
      <div className='my-6'>
        <h2 className='text-center text-red-600 text-4xl my-2 font-serif'>Manage Products</h2>
     <p className='text-center text-red-500 text-2xl font-serif'>Your Can Update Or Delete Any Product</p>
      </div>
      <ManageProductsTable/>
    </div>
      <Footer/>
    </div>
  )
}

export default ManageProducts
