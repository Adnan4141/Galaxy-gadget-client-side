import Navbar from "../../components/Shared/Navbar"
import PostTeamForm from "./PostTeamForm"

function PostTeam() {
    return (
        <div>
        <Navbar/>
            <div className="max-w-7xl mx-auto">
       <PostTeamForm/>
        </div>
        </div>
    )
}

export default PostTeam
