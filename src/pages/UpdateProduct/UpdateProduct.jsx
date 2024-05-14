import Navbar from '../../components/Shared/Navbar'
import Footer from '../../components/Shared/Footer'
import { useLoaderData, useNavigate} from 'react-router-dom'


function UpdateProduct() {
    const product = useLoaderData();
   const Navigate=useNavigate();

    const handleUpdateForm = (e) => {
        e.preventDefault();
        const brand = e.target.brand.value;
        const model = e.target.model.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const description = e.target.description.value;

        const UpdateProduct = {
             model,brand,category, price, image, description
        }
      
        fetch(`http://localhost:3000/update-by-id/${product._id}`,{
            method:"PUT",
            headers:{
                "content-Type" :"application/json"
            },
            body:JSON.stringify(UpdateProduct)
        })
        
        .then(res => res.json())
        .then(data=> {
           if(data.modifiedCount== 1){
            Navigate(`/manage-products`)
           }
        } )

    }



    
    
  return (
    <div>
        <Navbar/>
        <div className="text-center text-4xl mt-6 text-red-500">
                <h2>Update Product</h2>
            </div>
            
            <form 
            onSubmit={handleUpdateForm} 
            className="p-10 text-center w-full md:w-2/4 flex flex-col mx-auto" >

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Product Model</p>
                    <input type="text"
                        name="model"
                        defaultValue={product.model}
                        placeholder="Product Model" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Brand</p>
                    <input type="text"
                        name="brand"
                        defaultValue={product.brand}
                        placeholder="Product Brand" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Category</p>
                    <input type="text"
                        name="category"
                        defaultValue={product.category}
                        placeholder="Category" className="input input-bordered w-full" />
                </div>


                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Price</p>
                    <input type="text"
                        name="price"
                        defaultValue={product.price}
                        placeholder="Price" className="input input-bordered w-full" />
                </div>


                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Product Image</p>
                    <input type="text"
                        name="image"
                        defaultValue={product.image}
                        placeholder="Url" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Description</p>
                    <input type="text"
                        name="description"
                        defaultValue={product.description}
                        placeholder="Description" className="input input-bordered w-full" />
                </div>



                <div className="my-4">
                    <button className="Text-center text-white bg-red-700 btn btn-outline btn-warning">Update</button>
                </div>

            </form>

         <Footer/>
    </div>
  )
}

export default UpdateProduct
