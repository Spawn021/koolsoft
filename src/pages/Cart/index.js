import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ItemCourse from './components/ItemCourse/ItemCourse';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { BiChevronDown } from 'react-icons/bi';
import './components/SwiperCart/SwiperCart';
import ItemCommunity from './components/ItemCommunity/ItemCommunity';

import SwiperCart from './components/SwiperCart/SwiperCart';
import ListItemCount from '../Home/components/ListItemCount/ListItemCount';
import CourseIcon from '../../assets/images/icons/khoa-luyen.svg';
import StdIcon from '../../assets/images/icons/hocvien.svg';
import OnePeople from '../../assets/images/icons/kha-gioi.svg';
import Message from '../../assets/images/icons/feebb.svg';
import ShooesIcon from '../../assets/images/shoes.png';
import coursesData from './data/coursesData';
const cx = classNames.bind(styles);
function Cart() {
   const [coursesToShow, setCoursesToShow] = useState(8);

   const allCourses = coursesData;

   const toggleShowMore = () => {
      setCoursesToShow(coursesToShow + 8);
   };
   useEffect(() => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
   }, []);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container-center')}>
            <div className={cx('container')}>
               <div className={cx('banner-school')}>
                  <img
                     className={cx('image-banner')}
                     src="https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/May2024/SOMI_PREMIUM_XAM_(1).png"
                     alt="ImageBanner"
                  ></img>
               </div>
               <div className={cx('category-course')}>
                  <div className={cx('header-category-course')}>
                     <div className={cx('name-school')}>
                        <img className={cx('icon-tag')} src={ShooesIcon} alt="IconTag"></img>
                        <div className={cx('school-name')}>Giày dép thời thượng</div>
                     </div>
                     <div className={cx('search-course')}>
                        <button className={cx('btn-combo')}>Hot combo</button>
                        <div className={cx('form-search')}>
                           <input className={cx('input-search')} placeholder="Tìm kiếm sản phẩm..."></input>
                           <div>
                              <FontAwesomeIcon className={cx('button-search')} icon={faMagnifyingGlass} />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={cx('block-category-school')}>
                     <span className={cx('name-category')}>Hàng mới về</span>
                     <div className={cx('list-course')}>
                        {allCourses.slice(0, coursesToShow).map((course, index) => (
                           <ItemCourse
                              key={index}
                              id={course.id}
                              imgSrc={course.imgSrc}
                              courseName={course.courseName}
                              description={course.description}
                              reviewCount={course.reviewCount}
                              price={course.price}
                           />
                        ))}
                     </div>
                     {coursesToShow < allCourses.length && (
                        <div className={cx('show-more')}>
                           <button onClick={toggleShowMore}>
                              Xem thêm
                              <BiChevronDown className={cx('icon-chev')} />
                           </button>
                        </div>
                     )}
                  </div>
                  <div className={cx('block-category-school')}>
                     <span className={cx('name-category')}>Hàng Hot Giá Xịn</span>
                     <div className={cx('list-course')}>
                        {allCourses.slice(0, coursesToShow).map((course, index) => (
                           <ItemCourse
                              key={index}
                              id={course.id}
                              imgSrc={course.imgSrc}
                              courseName={course.courseName}
                              description={course.description}
                              reviewCount={course.reviewCount}
                              price={course.price}
                           />
                        ))}
                     </div>
                     {coursesToShow < allCourses.length && (
                        <div className={cx('show-more')}>
                           <button onClick={toggleShowMore}>
                              Xem thêm
                              <BiChevronDown className={cx('icon-chev')} />
                           </button>
                        </div>
                     )}
                  </div>
                  <div className={cx('block-category-school')}>
                     <span class={cx('name-category')}>Hàng Deal Ngon</span>
                     <div className={cx('list-course')}>
                        {allCourses.slice(0, coursesToShow).map((course, index) => (
                           <ItemCourse
                              key={index}
                              id={course.id}
                              imgSrc={course.imgSrc}
                              courseName={course.courseName}
                              description={course.description}
                              reviewCount={course.reviewCount}
                              price={course.price}
                           />
                        ))}
                     </div>
                     {coursesToShow < allCourses.length && (
                        <div className={cx('show-more')}>
                           <button onClick={toggleShowMore}>
                              Xem thêm
                              <BiChevronDown className={cx('icon-chev')} />
                           </button>
                        </div>
                     )}
                  </div>
               </div>
               <div className={cx('panel-feedback')}>
                  <div className={cx('feedback-container')}>
                     <h3>Phản hồi của khách hàng</h3>
                  </div>
                  <div className={cx('slide-feedback')}>
                     <SwiperCart />
                  </div>
               </div>
               {/* <div className={cx('achive')}>
                  <div className={cx('slogan')}>
                     ÔN THI SINH VIÊN <br></br> THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN
                  </div>
                  <div className={cx('static-wrapper')}>
                     <ListItemCount iconSrc={CourseIcon} number={150} numAfter="" text="Khóa Luyện" />
                     <ListItemCount iconSrc={StdIcon} number={80} numAfter="" text="Khá Giỏi" />
                     <ListItemCount iconSrc={OnePeople} number={500} numAfter="" text="9-10 Điểm" />
                     <ListItemCount iconSrc={Message} number={100} numAfter="" text="Feedback" />
                     <ListItemCount iconSrc={OnePeople} number={30} numAfter="k" text="Thành Viên" />
                  </div>
               </div>
               <div className={cx('communities')}>
                  <h2>Cộng đồng</h2>
                  <div className={cx('list-item-communities')}>
                     <ItemCommunity nameCm="group Góc ôn thi NEU Shares" numMem="30.000" rate="" />
                     <ItemCommunity
                        nameCm="FANPAGE ÔN THI SINH VIÊN HL ĐH KINH TẾ QUỐC DÂN"
                        numMem="12.000"
                        rate="65"
                     />
                     <ItemCommunity nameCm="group Góc review nhà trọ Bách Kinh Xây" numMem="80.0000" rate="****" />
                     <ItemCommunity nameCm="Góc ôn thi AEP - NEU Shares ✅" numMem="3100" rate="****" />
                     <ItemCommunity nameCm="Góc tuyển dụng NEU ✅" numMem="9000" rate="****" />
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   );
}

export default Cart;
