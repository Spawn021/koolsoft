import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import classNames from 'classnames/bind';
import Slide1 from '~/assets/images/slides/DESKTOP_EX-DRY_BANNER.jpg';
import Slide2 from '~/assets/images/slides/SOMI_PREMIUM_XAM_(1).jpg';
import Slide3 from '~/assets/images/slides/CM24_BANNER.webp';
import Slide4 from '~/assets/images/slides/LDP_ACTIVE.webp';
import Slide5 from '~/assets/images/slides/1107ng_ban_dong_hanh_2-01_56.webp';
import Slide6 from '~/assets/images/slides/CM_BASIC.webp';
import Slide7 from '~/assets/images/slides/mceclip0_98.png';
import Slide8 from '~/assets/images/slides/slideshow_2.webp';
import Slide9 from '~/assets/images/slides/gias_toost_cc491c803fc647da85b38dffee5e64fa.webp';
import styles from './Swiper.module.scss';
import './custom-pagination.css';
const cx = classNames.bind(styles);
export default function SwiperComponent() {
   return (
      <Swiper
         slidesPerView={1}
         spaceBetween={30}
         loop={true}
         pagination={{
            clickable: true,
         }}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         modules={[Autoplay, Pagination]}
         className="mySwiper"
      >
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide1} alt="Slide 1"></img>
         </SwiperSlide>
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide2} alt="Slide 2"></img>
         </SwiperSlide>
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide3} alt="Slide 3"></img>
         </SwiperSlide>
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide4} alt="Slide 4"></img>
         </SwiperSlide>
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide5} alt="Slide 5"></img>
         </SwiperSlide>
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide6} alt="Slide 6"></img>
         </SwiperSlide>
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide7} alt="Slide 7"></img>
         </SwiperSlide>
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide8} alt="Slide 8"></img>
         </SwiperSlide>
         <SwiperSlide>
            <img className={cx('swiper-image')} src={Slide9} alt="Slide 9"></img>
         </SwiperSlide>
      </Swiper>
   );
}
