import Card from "../Card/Card"


function CarouselItem() {

  const url4="https://vulcanpost.com/wp-content/uploads/2023/02/samsung-galaxy-s23-ultra-review-006.jpg"
  const url2="https://blog.playstation.com/tachyon/2023/10/cd56722db7b991b3d7a33f1bafd55f80d0ac553d.png?resize=1088%2C612&crop_strategy=smart&zoom=1.5"
  const url3="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg"
  const url1="https://hips.hearstapps.com/hmg-prod/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg?crop=1.00xw:0.753xh;0,0.0831xh&resize=1200:*"

  return (
    <>
      <div>
        <p className="border rounded-lg text-white border-white mx-auto max-w-4xl  bg-black text-center font-mono text-3xl md:my-4 p-2">Explore Our Products</p>
      </div>
      <div className="carousel w-full md:my-7  md:mb-[200px]">
        <div id="slide1" className="carousel-item relative w-full ">
          
          <img src={url1} className="w-full h-[600px]" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src={url2} className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src={url3} className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src={url4} className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarouselItem
