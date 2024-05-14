import { useEffect, useState } from "react"
import TeammateCard from "./TeammateCard";

function TeammateView() {

const [teammates,setTeammates] =useState([])
useEffect(()=>{
    fetch('http://localhost:3000/all-teammate').then(res => res.json())
    .then(data => setTeammates(data));
},[])



  return (
    <div>
       <p className="text-center font-mono text-orange-300 text-4xl md:my-9">Team mate</p>
        
        <div className="grid grid-cols-3 gap-5">
        {  teammates?.map(teammate => (
                 
               <TeammateCard key={teammate._id} teammate={teammate}/>
            ))
        }

        </div>


    </div>
  )
}

export default TeammateView
