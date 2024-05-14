import CarouselItem from "../../components/Carousel/CarouselItem"
import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import ContactForm from "../ContactUS/ContactForm"
import AboutUs from "./AboutUs"
import HomeBanner from "./HomeBanner"
import OurProducts from "./OurProducts"
import TeammateView from "../Teammate/TeammateView"
import Card from "../../components/Card/Card"
import ShopingCard from "../../components/Card/ShopingCard"
import ShopingCart from "../../components/Cart/ShopingCart"
import Dashboard from "../../components/Dashboard/Dashboard"
import AddReview from "../AddReview/AddReview"
import ManageReview from "../ManageReview/ManageReview"
import ManageReviewTable from "../ManageReview/ManageReviewTable"






function Home() {
  return (
    <div>
      <Navbar />
      <div className="md:max-w-7xl md:mx-auto">
      <CarouselItem />
      <div className="divider divider-end md:my-[50px]"></div>
      <HomeBanner />
      <div className="divider divider-end md:my-[50px]"></div>
      <OurProducts />
      <div className="divider divider-end md:my-[50px]"></div>
      <AboutUs />
      <div className="divider divider-end md:my-[50px]"></div>
      <TeammateView />
      <div className="divider divider-end md:my-[50px]"></div>
      <ContactForm />
      
      
    </div>
      <Footer />
    </div>
  )
}

export default Home
