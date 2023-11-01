import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from './Button';
import Ripple from './Ripple';
import OtsvLogo from '~/assets/images/logo-otsv.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BsCart3 } from 'react-icons/bs';
const cx = classNames.bind(styles);
function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('grid')}>
            <div className={cx('header__navbar')}>
               <ul className={cx('header__navbar-list')}>
                  <li className={cx('header__navbar-item')}>
                     <a href="/" className={cx('header__navbar-logo')}>
                        <img src={OtsvLogo} alt="Trang chủ" className={cx('header__navbar-logo-img')} />
                     </a>
                     <span className={cx('header__navbar-slogan')}>Ôn thi nhàn, Kết quả cao</span>
                  </li>
               </ul>
               <ul className={cx('header__navbar-list')}>
                  <li className={cx('header__navbar-item')}>
                     <a href="" className={cx('header__navbar-item-link')}>
                        TRANG CHỦ
                     </a>
                  </li>
                  <li
                     className={cx(
                        'header__navbar-item',
                        'header__navbar-item--has-list',
                        'header__navbar-item--separate',
                     )}
                  >
                     <a href="" className={cx('header__navbar-item-link')}>
                        KHÓA HỌC
                     </a>
                     <div className={cx('header__school')}>
                        <ul className={cx('header__school-list')}>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC KINH TẾ QUỐC DÂN
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC XÂY DỰNG
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC KINH TẾ THÀNH PHỐ HCM
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC KINH TẾ - LUẬT HCM
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC NGÂN HÀNG THÀNH PHỐ HCM
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC THƯƠNG MẠI
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC BÁCH KHOA HÀ NỘI
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC TÔN ĐỨC THẮNG
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC TÀI CHÍNH - MARKETING
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC VINH
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 HỌC VIỆN TÀI CHÍNH
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 HỌC VIỆN NGÂN HÀNG
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC CÔNG ĐOÀN
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 ĐẠI HỌC BÁCH KHOA THÀNH PHỐ HCM
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 HỌC VIỆN NÔNG NGHIỆP VN
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 CHƯƠNG TRÌNH TIẾNG ANH
                              </a>
                           </li>
                           <li className={cx('header__school-item')}>
                              <a href="" className={cx('header__school-item-name')}>
                                 TRƯỜNG KHÁC
                              </a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <a href="" className={cx('header__navbar-item-link')}>
                        KÍCH HOẠT
                     </a>
                  </li>
                  <li className={cx('header__navbar-item', 'header__navbar-item-has-cart')}>
                     <a href="" className={cx('header__navbar-item-link')}>
                        <BsCart3 className={cx('header__navbar-item-icon')} />
                     </a>
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
            </div>
         </div>
      </header>
   );
}

export default Header;
