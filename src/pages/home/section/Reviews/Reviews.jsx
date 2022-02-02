import { ReviewsData } from "./ReviewsData"
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import { useState } from "react"
import './Reviews.css'
const Reviews = ({ items }) => {
  const [current, setCurrent] = useState(0)
  const length = items.length

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <section
      id="reviews"
      className="bg-[#e4efe2] w-full min-h-screen px-16 pt-16 font-sans"
    >
      <h1 className="text-center text-3xl font-bold tracking-tight ">
        What Our Clients Say
      </h1>
      <div className="flex justify-evenly pt-20 relative">
        <MdArrowBackIos
          className="absolute top-1/2 left-8 text-5xl cursor-pointer select-none"
          onClick={prevSlide}
        />
        <MdArrowForwardIos
          className="absolute top-1/2 right-8 text-5xl cursor-pointer select-none"
          onClick={nextSlide}
        />
        {ReviewsData.map((item, index) => {
          return (
            <>
              {index === current && (
                <div className={`flex gap-x-16 ${index === current ? 'slide active' : 'slide'}`} >
                  <div key={item.id}>
                    <h1 className="text-2xl font-semibold text-darkText">
                      {item.name}
                    </h1>
                    <h1 className="text-gray-500">{item.job}</h1>
                    <div className="flex gap-2 py-8">
                      <div className="w-2 h-2 bg-lightText rounded-full"></div>
                      <div className="w-2 h-2 bg-lightText rounded-full"></div>
                      <div className="w-2 h-2 bg-lightText rounded-full"></div>
                      <div className="w-2 h-2 bg-lightText rounded-full"></div>
                    </div>
                    <p className="w-[500px] text-justify text-darkText leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                  <div>
                    <img
                      src={item.image}
                      className="w-62 h-[300px] rounded-md shadow-md shadow-black/30"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews
