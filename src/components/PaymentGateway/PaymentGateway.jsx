import Navbar from "../Shared/Navbar"
import GatewayCard from "./GatewayCard"


function PaymentGateway() {
    return (

        <div className="max-w-6xl mx-auto">
            <div className=" bg-yellow-400  min-h-screen">
                <Navbar />
                <p className="text-4xl text-center text-red-500 font-mono p-3 bg-yellow-300">Pay now</p>
                <GatewayCard />
            </div>

        </div>
    )
}

export default PaymentGateway
