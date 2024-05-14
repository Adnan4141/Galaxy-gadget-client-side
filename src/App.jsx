import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUS/ContactUs';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import AddProduct from './pages/AddProduct/AddProduct';
import AddReview from './pages/AddReview/AddReview';
import ProductDetails from './pages/ProductDetails/productDetails';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import PostTeam from './pages/PostTeamMate/PostTeam';
import SignUp from './components/SignUp/SignUp';
import PaymentGateway from './components/PaymentGateway/PaymentGateway';
import ShopingCart from './components/Cart/ShopingCart';
import Dashboard from './components/Dashboard/Dashboard';
import ManageReview from './pages/ManageReview/ManageReview';
import ManageReviewTable from './pages/ManageReview/ManageReviewTable';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: function () {
        return fetch(`http://localhost:3000/all-products`);
      }

    },

    {
      path: "/contact-us",
      element: <ContactUs />

    },
    {
      path: "/manage-products",
      element: <ManageProducts />,
      loader: function () {
        return fetch(`http://localhost:3000/all-products`);
      }

    },
    {
      path: "/add-product",
      element: <AddProduct />

    },
   
    {
      path: "/add-review",
      element: <AddReview />
      ,loader: function () {
        return fetch(`http://localhost:3000/all-review`);
      }

    },

    {
      path:"/product/:id",
      element: <ProductDetails/>,
      loader:function({params}){
        return fetch(`http://localhost:3000/product/${params.id}`);
      }
    },

    {
      path:"/update-product/:id",
      element:<UpdateProduct/>,
      loader:function({params}){
        return fetch(`http://localhost:3000/product/${params.id}`);
      }
    },

    {
      path: "/add-teammate",
      element: <PostTeam/>
    },
    {
      path: "/sign-up",
      element: <SignUp/>
    },
    {
      path: "/payment/:id",
      element: <PaymentGateway/>
    },
    {
      path: "/shoping-cart",
      element:<ShopingCart/>
    },
        
    {
      path: "/dashboard",
      element:<Dashboard/>
    },
    {
      path: "/manage-review",
      element:<ManageReview/>
    },



  ])

  return (
    <RouterProvider router={router} />

  )
}

export default App
