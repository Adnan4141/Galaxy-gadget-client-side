
function ContactForm() {
 
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const email=e.target.email.value;
        const subject=e.target.email.value;
        const bio=e.target.bio.value;
          
        const contactInfo ={
            email,subject,bio
        }
       
        alert("Successfully Submitted");
    }
    return (
        <>
            <div className="text-center text-4xl p-3">
                <h2 className="font-bold text-orange-600">Contact</h2>
                <p className="font-bold text-yellow-800">Leave Your Meassage</p>

            </div>
            <form onSubmit={handleSubmit} className="p-10 text-center w-full md:w-2/4 flex flex-col mx-auto" >
                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Email</p>
                    <input type="text" name="email" placeholder="Enter Your Email" className="input input-bordered w-full " />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Subject</p>
                    <input type="text" name="subject"  placeholder="Enter Your Subject" className="input input-bordered w-full" />
                </div>

                <div className="text-left">
                    <p className="text-2xl my-2 mx-2">Bio</p>
                    <input type="text" name="bio"  placeholder="Enter Your Bio" className="input input-bordered w-full" />
                </div>

                <div className="my-4">
                    <button className="Text-center text-black btn btn-outline border-warning bg-warning font-bold">Submit</button>
                </div>

            </form>
            </>
            )
}

            export default ContactForm
