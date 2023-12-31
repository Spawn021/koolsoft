import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from './Button';
import Ripple from './Ripple';
import OtsvLogo from '~/assets/images/logo-otsv.webp';
import CartIcon from '~/assets/images/icons/cart.svg';
import { BsChevronUp } from 'react-icons/bs';
import { HiBars3 } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { selectCartItems } from '~/cart/CartSlice';
const cx = classNames.bind(styles);
function Header() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };
   const cart = useSelector(selectCartItems);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         // Kiểm tra vị trí cuộn và cập nhật trạng thái
         const scrolled = window.scrollY > 0;
         setIsScrolled(scrolled);
      };

      // Thêm sự kiện cuộn
      window.addEventListener('scroll', handleScroll);

      // Làm sạch sự kiện khi component unmount
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   // Sử dụng classNames để quản lý class và thêm class 'scrolled' nếu đã cuộn
   const wrapperClasses = cx('wrapper', { scrolled: isScrolled });
   return (
      <header className={wrapperClasses}>
         <div className={cx('chat-panel')}>
            <button className={cx('float-chat')}>
               <img src="https://onthisinhvien.com/images/icon/otsv/message.svg"></img>
               <span>Nhắn tin cho Ôn Thi Sinh Viên!</span>
               <BsChevronUp className={cx('icon-mess')} />
            </button>
         </div>
         <div className={cx('grid')}>
            <div className={cx('header__navbar')}>
               <ul className={cx('header__navbar-list')}>
                  <li className={cx('header__navbar-item')}>
                     <Link to="/" style={{ textDecoration: 'none' }}>
                        <a href="/" className={cx('header__navbar-logo')}>
                           <img src={OtsvLogo} alt="Trang chủ" className={cx('header__navbar-logo-img')} />
                        </a>
                     </Link>
                     <span className={cx('header__navbar-slogan')}>Ôn thi nhàn, Kết quả cao</span>
                  </li>
               </ul>
               <ul className={cx('header__navbar-list')}>
                  <li className={cx('header__navbar-item')}>
                     <HiBars3 className={cx('header__navbar-bars')} onClick={handleMobileMenuToggle} />
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link
                        to="/"
                        className={cx('header__navbar-item-link', 'header__navbar-home-page')}
                        style={{ textDecoration: 'none' }}
                     >
                        TRANG CHỦ
                     </Link>
                  </li>
                  <li
                     className={cx(
                        'header__navbar-item',
                        'header__navbar-item--has-list',
                        'header__navbar-item--separate',
                     )}
                  >
                     {/* eslint-disable-next-line */}
                     <a href="" className={cx('header__navbar-item-link')}>
                        KHÓA HỌC
                     </a>
                     <div className={cx('header__school')}>
                        <ul className={cx('header__school-list')}>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC KINH TẾ QUỐC DÂN
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC XÂY DỰNG
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC KINH TẾ THÀNH PHỐ HCM
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC KINH TẾ - LUẬT HCM
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC NGÂN HÀNG THÀNH PHỐ HCM
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC THƯƠNG MẠI
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC BÁCH KHOA HÀ NỘI
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC TÔN ĐỨC THẮNG
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC TÀI CHÍNH - MARKETING
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC VINH
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 HỌC VIỆN TÀI CHÍNH
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 HỌC VIỆN NGÂN HÀNG
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC CÔNG ĐOÀN
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC BÁCH KHOA THÀNH PHỐ HCM
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 HỌC VIỆN NÔNG NGHIỆP VN
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 CHƯƠNG TRÌNH TIẾNG ANH
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 TRƯỜNG KHÁC
                              </a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     {/* eslint-disable-next-line */}
                     <a href="" className={cx('header__navbar-item-link')}>
                        KÍCH HOẠT
                     </a>
                  </li>
                  <li className={cx('header__navbar-item', 'header__navbar-item-has-cart')}>
                     <Link to="/course" style={{ textDecoration: 'none' }}>
                        <div href="" className={cx('header__navbar-item-link')}>
                           <img className={cx('header__navbar-item-icon')} src={CartIcon} alt="CartIcon"></img>
                           <div
                              className={cx('num-course-in-cart')}
                              style={{ display: cart.length === 0 ? 'none' : 'block' }}
                           >
                              {cart.length}
                           </div>
                        </div>
                     </Link>
                     <div className={cx('header__cart')}>
                        <span className={cx('header__cart-name')}>Giỏ hàng</span>
                     </div>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Button>
                        ĐĂNG NHẬP
                        <Ripple color={'#617595'} duration={1000} />
                     </Button>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Button>
                        ĐĂNG KÝ
                        <Ripple color={'#617595'} duration={1000} />
                     </Button>
                  </li>
               </ul>
               <ul className={cx('navbar-mobile-list', { 'navbar-mobile-list--open': isMobileMenuOpen })}>
                  <li className={cx('navbar-mobile-item')}>
                     <a href="/" className={cx('navbar-mobile-item-link')}>
                        TRANG CHỦ
                     </a>
                  </li>
                  <li
                     className={cx(
                        'navbar-mobile-item',
                        'navbar-mobile-item--has-list',
                        'navbar-mobile-item--separate',
                     )}
                  >
                     {/* eslint-disable-next-line */}
                     <a href="" className={cx('navbar-mobile-item-link')}>
                        KHÓA HỌC
                     </a>
                  </li>
                  <li className={cx('navbar-mobile-item')}>
                     {/* eslint-disable-next-line */}
                     <a href="" className={cx('navbar-mobile-item-link')}>
                        KÍCH HOẠT
                     </a>
                  </li>
                  <li className={cx('navbar-mobile-item', 'nabar-mobile__navbar-item-has-cart')}>
                     {/* eslint-disable-next-line */}
                     <Link to="/course" style={{ textDecoration: 'none' }}>
                        <div className={cx('navbar-mobile-item-link')}>
                           <img className={cx('navbar-mobile-item-icon')} src={CartIcon} alt="CartIcon"></img>
                           <div
                              className={cx('nabar-mobile-num-course-in-cart')}
                              style={{ display: cart.length === 0 ? 'none' : 'block' }}
                           >
                              {cart.length}
                           </div>
                        </div>
                     </Link>
                     <div className={cx('navbar-mobile__cart')}>
                        <span className={cx('navbar-mobile__cart-name')}>Giỏ hàng</span>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
}

export default Header;
