import { useNavigate } from "react-router-dom";

function AddProductForm() {

  const navigate = useNavigate();

    const handleProductFrom = (e) => {
        e.preventDefault();
        const model = e.target.model.value;
        const brand = e.target.brand.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const description = e.target.description.value;

        const product = {
            model, brand,category, price, image, description
        }
        console.log(product)
        fetch(`http://localhost:3000/add-a-product`, {
            method:"POST",
            headers:{
                "content-Type" :"application/json"
            },
            body:JSON.stringify(product)
        }).then(res=>res.json())
        .then (data=> {
         
            if(data.acknowledged){
                navigate('/manage-products')
            }
        })
    }


    return (
        <div>
            <div className="text-center text-3xl mt-6 text-red-500">
                <h2 className="font-serif">Add Product</h2>
            </div>
            
            <form onSubmit={handleProductFrom} className="p-10 text-center w-full md:w-2/4 flex flex-col mx-auto" >

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Product Model</p>
                    <input type="text"
                        name="model"
                        placeholder="Product Model" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Brand</p>
                    <input type="text"
                        name="brand"
                        placeholder="Product brand" className="input input-bordered w-full" />
                </div>
 

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Category</p>
                    <input type="text"
                        name="category"
                        placeholder="Category" className="input input-bordered w-full" />
                </div>


                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Price</p>
                    <input type="text"
                        name="price"
                        placeholder="Product price" className="input input-bordered w-full" />
                </div>


                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Image</p>
                    <input type="text"
                        name="image"
                        placeholder="Url" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Description</p>
                    <input type="text"
                        name="description"
                        placeholder="Description" className="input input-bordered w-full" />
                </div>



                <div className="my-4">
                    <button className="Text-center text-black btn btn-outline border-warning bg-warning font-bold">Submit</button>
                </div>

            </form>




        </div>
    )
}

export default AddProductForm
