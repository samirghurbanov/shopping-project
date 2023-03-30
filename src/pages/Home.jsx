import '../assets/styles/home.css'
import { Link } from 'react-router-dom'
import data from '../product.js'
// Import Swiper styles
import Itemcard from '../components/Itemcard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {

  return (
    <>
   <div className='home container-fluid text-center justify-content-center d-flex'>
    <div className='homebox  w-50 py-4'>
    <h1 className='text-black'>New Collections</h1>
    <Link to={'/collections'} className='text-white shop-btn'>Shopping</Link>
    </div>
   </div>
   <div className='container p-5'>
  <div className="row">
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={window.screen.width > 768 ? 3 : 1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {data.productData.slice(7,12).map((item) => {
      return <SwiperSlide ><Itemcard  image={item.image} title={item.title} price={item.price}/></SwiperSlide>
    }) }
    </Swiper>
  </div>
   </div>
   </>
  )
}
