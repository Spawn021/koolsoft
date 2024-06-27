import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from './Button';
import Ripple from './Ripple';
import OtsvLogo from '~/assets/images/logo.jpg';
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
               <span>Chăm sóc khách hàng</span>
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
                     <span className={cx('header__navbar-slogan')}>Giày Đẹp, Bước Đi Tự Tin!</span>
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
                        SẢN PHẨM
                     </a>
                     <div className={cx('header__school')}>
                        <ul className={cx('header__school-list')}>
                           <Link to="/cart" className={cx('header__school-item')} style={{ textDecoration: 'none' }}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Giày dép
                              </a>
                           </Link>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Áo
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Quần
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Balo - Túi xách
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Trang sức - Phụ kiện
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__school-item-name')}>
                                 Khác
                              </a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     {/* eslint-disable-next-line */}
                     <a href="" className={cx('header__navbar-item-link')}>
                        COMBO
                     </a>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     {/* eslint-disable-next-line */}
                     <a href="" className={cx('header__navbar-item-link')}>
                        GIẢM GIÁ
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
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                     <li className={cx('header__navbar-item')}>
                        <Button>
                           ĐĂNG NHẬP
                           <Ripple color={'#617595'} duration={1000} />
                        </Button>
                     </li>
                  </Link>
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
