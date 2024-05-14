import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Shared/Navbar";

function AddReview() {

// addrev
    const [counter,setCounter]=useState(1);
    function handleClick(op){
if(op==1 && counter<5)
     setCounter(counter+1);
else if(op==2 && counter>1)
setCounter(counter-1);
     
    }
    
// addrev


  const navigate = useNavigate();
  
    const handleProductFrom = (e) => {
        e.preventDefault();
        const model = e.target.model.value;
        const brand = e.target.brand.value;
        const description = e.target.description.value;
        const rating=counter;
        const review = {
            model, brand,description,rating
        }
        
        fetch(`http://localhost:3000/add-review`, {
            method:"POST",
            headers:{
                "content-Type" :"application/json"
            },
            body:JSON.stringify(review)
        }).then(res=>res.json())
        .then (data=> {
         
            if(data.acknowledged){
                navigate('/')
            }
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center text-3xl mt-6 text-red-500">
                <h2 className="font-serif">Add Review</h2>
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
                

                <p className="text-left text-2xl my-2 mx-2">Rating</p>
                <div className="mt text left flex">
                <span className="border-indigo-500/100 btn-ghost btn text-xl" onClick={()=>handleClick(1)}>+</span>
                <span className="inline-block mx-3 text-3xl">{counter}</span>
                <span className="border-indigo-500/100 btn-ghost btn text-xl" onClick={()=>handleClick(2)}>-</span>
                </div>



                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Write Review</p>
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

export default AddReview;