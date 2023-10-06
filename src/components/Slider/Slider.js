import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "../../../node_modules/swiper/swiper.min.css";
// import "../../../node_modules/swiper/swiper.min.css";
// import "../../../node_modules/swiper/swiper.min.css";
// import "../../../node_modules/swiper/swiper.min.css";

import "../../../node_modules/swiper/swiper-bundle.min.css";

import Banglore from "../../assets/images/banglore.png";
import Channai from "../../assets/images/channai.png";
import Gurugoun from "../../assets/images/gurugaon.png";
import Delhi from "../../assets/images/delhi.png";
import Hyderabad from "../../assets/images/hyderabad.png";


const cityCard = [
    {
        id: 1,
        name: "Banglore",
        image: Banglore,
    },
    {
        id: 2,
        name: "Channai",
        image: Channai,
    },
    {
        id: 3,
        name: "Delhi",
        image: Delhi,
    },
    {
        id: 4,
        name: "Gurgaon",
        image: Gurugoun,
    }, {
        id: 5,
        name: "Hyderabad",
        image: Hyderabad,
    }, {
        id: 6,
        name: "Mumbai",
        image: Gurugoun,
    }
]

const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {cityCard.map((item) => {
                return <SwiperSlide>
                    <img src={item.image} alt={item.name} /></SwiperSlide>
            })}
        </Swiper>
    )
}

export default Slider
