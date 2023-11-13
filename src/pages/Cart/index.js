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
const cx = classNames.bind(styles);
function Cart() {
   const [coursesToShow, setCoursesToShow] = useState(8);

   const allCourses = [
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F317789103-1652535269607-phapluatdaicuong.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS PHÁP LUẬT ĐẠI CƯƠNG',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 721,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F417326640-1652533277395-kinhtevimo1.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS KINH TẾ VI MÔ 1',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 658,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F108412384-1666003901169-quantrikinhdoanh525350px.png&w=1920&q=75',
         courseName: 'NEU TOÁN CHO CÁC NHÀ KINH TẾ 2023',
         description:
            '#1 TOP Ôn theo chương trình thi mới, luyện kỹ năng làm đề thi mới nhất cập nhật 2022 môn Toán cao cấp cho các nhà kinh tế',
         reviewCount: 102,
         price: '150,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F28151125-1652535535482-coverebookneu1.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS CHỦ NGHĨA XÃ HỘI KHOA HỌC (cập nhật đề thi 23/11/2021)',
         description: 'UPDATE ĐỀ THI MỚI NHẤT 23/11/2021, XEM NGAY!',
         reviewCount: 477,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F379028495-1652528611094-coverebookneu.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS NGUYÊN LÝ KẾ TOÁN',
         description:
            'Tóm tắt kiến thức trọng tâm môn học NLKT và phân dạng các dạng bài tập, các đề thi cuối kỳ cập nhật mới nhất.',
         reviewCount: 470,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F932430182-1652535174268-kinhtechinhtri.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS KINH TẾ CHÍNH TRỊ',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 760,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F335089725-1652535932655-_.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS KINH TẾ LƯỢNG',
         description: 'Cấp tốc dành cho người mất gốc. Hướng dẫn làm FULL các dạng bài sẽ gặp trong thi cuối kì',
         reviewCount: 143,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
      {
         imgSrc:
            'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
         courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
         description: 'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
         reviewCount: 584,
         price: '40,000 VND',
      },
   ];

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
                     src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fbanner%2Fneu.jpg&w=1920&q=75"
                     alt="ImageBanner"
                  ></img>
               </div>
               <div className={cx('category-course')}>
                  <div className={cx('header-category-course')}>
                     <div className={cx('name-school')}>
                        <img
                           className={cx('icon-tag')}
                           src="https://onthisinhvien.com/images/icon/otsv/icon-tag-school.svg"
                           alt="IconTag"
                        ></img>
                        <div className={cx('school-name')}>Đại học Kinh tế Quốc dân</div>
                     </div>
                     <div className={cx('search-course')}>
                        <button className={cx('btn-combo')}>Hot combo</button>
                        <div className={cx('form-search')}>
                           <input className={cx('input-search')} placeholder="Tìm kiếm khóa học..."></input>
                           <div>
                              <FontAwesomeIcon className={cx('button-search')} icon={faMagnifyingGlass} />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={cx('block-category-school')}>
                     <span className={cx('name-category')}>Môn đại cương (68 Khoá)</span>
                     <div className={cx('list-course')}>
                        {allCourses.slice(0, coursesToShow).map((course, index) => (
                           <ItemCourse
                              key={index}
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
                     <span className={cx('name-category')}>MÔN CHUYÊN NGÀNH (87 KHOÁ)</span>
                     <div className={cx('list-course')}>
                        {allCourses.slice(0, coursesToShow).map((course, index) => (
                           <ItemCourse
                              key={index}
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
                     <span class={cx('name-category')}>MÔN HỌC AEP (40 KHOÁ)</span>
                     <div className={cx('list-course')}>
                        {allCourses.slice(0, coursesToShow).map((course, index) => (
                           <ItemCourse
                              key={index}
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
                     <span className={cx('name-category')}>NGOẠI NGỮ - TIN HỌC - CĐR (0 KHOÁ)</span>
                  </div>
               </div>
               <div className={cx('panel-feedback')}>
                  <div className={cx('feedback-container')}>
                     <h3>Phản hồi của học viên kỳ trước</h3>
                  </div>
                  <div className={cx('slide-feedback')}>
                     <SwiperCart />
                  </div>
               </div>
               <div className={cx('achive')}>
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
               </div>
            </div>
         </div>
      </div>
   );
}

export default Cart;
