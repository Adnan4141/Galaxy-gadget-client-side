
import { useNavigate } from 'react-router-dom';
function PostTeamForm() {
 const Navigate =useNavigate();
    const handleForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const position = event.target.position.value;
        const email = event.target.email.value;
        const image = event.target.image.value;
        const about = event.target.about.value;

        const teammate = {
            name,email,position, image, about
        }
        console.log(position)
        fetch(`http://localhost:3000/add-teammate`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(teammate)
        }).then(res => res.json())
            .then(data => {
                     
                if(data.acknowledged) {
                    Navigate('/add-teammate')
                }

                alert(data)
            })



    }

    return (
        <div>
            <div className="text-center text-4xl p-3">
                <p className="text-yellow-800">Add Member</p>
            </div>

            <form onSubmit={handleForm} className="p-10 text-center w-full md:w-2/4 flex flex-col mx-auto" >

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Teammate Name</p>
                    <input type="text" name="name" placeholder="Teammate Name" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Position</p>
                    <input type="text" name="position" placeholder="Teammate Position" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Email</p>
                    <input type="text" name="email" placeholder="Enter Email" className="input input-bordered w-full " />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Teammate Image</p>
                    <input type="text" name="image" placeholder="URL" className="input input-bordered w-full" />
                </div>

                <div className="text-left">
                    <p className="text-2xl my-2 mx-2">About Teammate</p>
                    <input type="text" name="about" placeholder="About Teammate" className="input input-bordered w-full" />
                </div>

                <div className="my-4">
                    <button className="Text-center text-black btn btn-outline border-warning bg-warning font-bold">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default PostTeamForm
