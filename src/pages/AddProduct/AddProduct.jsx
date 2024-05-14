import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import AddProductForm from "./AddProductForm"

function AddProduct() {
  return (
    <div>
     <Navbar/>
      <div className="max-w-7xl mx-auto">
    <AddProductForm/>
    </div>
     <Footer/>
    </div>
  )
}

export default AddProduct
