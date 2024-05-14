import { Link } from "react-router-dom"


function HomeBanner() {
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/12/31/31/240_F_512313150_SXjoxQrERJnZZeMzLQPjEYCQS67qdJFs.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="font-mono mb-5 text-5xl font-bold">Hello there Explore Our Shop</h1>
            <p className="mb-5 text-2xl">Upgrade your life with the latest gadgets. Shop now and enjoy exclusive deals.</p>
           
            <Link to={`/sign-up`}><button className="font-serif border-white btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
   
 
  
  </>
  )
}

export default HomeBanner
