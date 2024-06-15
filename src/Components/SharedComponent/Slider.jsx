import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
    >
      {slides && slides.map(slide=> <SwiperSlide key={slide._id}>
        <div className="p-12 min-h-[500px] max-h-[600px] flex flex-col justify-between">
                  <p>{slide?.description}</p>

                  <div className="my-10 mx-auto ">
                    <img
                      src={slide?.img}
                      className="w-12 h-12 mx-auto rounded-full"
                      alt=""
                    />
                    <div className="mx-auto">
                      <p>Name:- {slide?.authorName}</p>
                      <p>Email:- {slide?.authorEmail}</p>
                    </div>
                  </div>
                </div>
      </SwiperSlide>)}
    </Swiper>
  );
};

export default Slider;
