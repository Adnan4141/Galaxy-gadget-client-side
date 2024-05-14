import { Link } from "react-router-dom"
import { Dropdown } from 'flowbite-react';
function Navbar() {
    return (
        <div>

            <div className="navbar bg-teal-400 flex flex-col md:flex-row">

                <div className="flex-0">
                    <Link to={`/`} className="w-[100px] md:ml-10 rounded-lg hover:shadow-lg">
                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/166236181_103608611832203_255698169725973464_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=101&ccb=1-7&_nc_sid=efc22e&_nc_ohc=b_tzjree0ugAX_v5Xdj&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB6vr714f3LECz5VEqXwBI2yWKYdMFfuv_ZpsM6mc-quw&oe=6598153E" alt="" />
                    </Link>
                </div>
                <div className="flex-1 md:ml-5">
                    <div className="join">
                        <div>
                            <div>
                                <input className="input input-bordered join-item" placeholder="Search" />
                            </div>
                        </div>
                        <select className="select select-bordered join-item">
                            <option disabled selected>Filter</option>
                            <option>New Model</option>
                            <option>Old Model</option>
                        </select>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-2xl md:text-2xl  px-1 flex flex-col md:flex-row items-center">

                        <li className="text-white">
                        <Link to={`/`}>Home</Link>
                        </li>

                        <li>

                        </li>

                        <li className="text-white">
                            <Link to={`/shoping-cart`}>Order</Link>
                        </li>

                        <li className="text-white">
                            <Link to={`/contact-us`}>Contact</Link>
                        </li>

                        {/* Dropdown  */}

                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="text-white btn-ghost block mx-4 font-semibold p-4 rounded-lg text-xl">Settings</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={`/add-teammate`}>Add Member</Link></li>
                                <li><Link to={`/add-product`}>Add Products</Link></li>
                                <li><Link to={`/manage-products`}>Manage-Product</Link></li>
                                <li><Link to={`/dashboard`}>Dashboard</Link></li>
                                <li><Link to={`/sign-up`}>User Account</Link></li>
                                <li><Link to={`/add-review`}>Add Review</Link></li>
                                <li><Link to={`/manage-review`}>Manage Review</Link></li>

                                


                            </ul>
                        </div>









                    </ul>
                </div>
            </div>



        </div>
    )
}

export default Navbar
