import { useLoaderData } from "react-router-dom"
import SingleProductCard from "./SingleProductCard";
import ShopingCard from "../../components/Card/ShopingCard";


function OurProducts() {

    const products = useLoaderData();
  


    return (
        <div>
            <div className="text-center font-serif text-3xl text-white">
                <p className="border-2 border-white mx-auto max-w-4xl  bg-black md:mb-10 rounded-lg p-2">Our Products</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 ml-10 md:ml-0">

                {
                    products?.map(product => (
                        <ShopingCard product={product} key={product._id}/>
                        
                    ))
                }





            </div>




           
        </div>
    )
}

export default OurProducts
