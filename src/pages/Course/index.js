import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Course.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart as addToCartAction, selectCartItems } from '~/cart/CartSlice';
import ItemCoursePay from './components/ItemCoursePay/ItemCoursePay';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Course() {
   const cartItems = useSelector(selectCartItems);
   const [isAllChecked, setIsAllChecked] = useState(false);
   const [selectedItems, setSelectedItems] = useState({});
   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      calculateTotalPrice();
   }, [selectedItems, cartItems]);

   const calculateTotalPrice = () => {
      let total = 0;

      cartItems.forEach((item) => {
         if (selectedItems[item.id]) {
            const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
            total += numericPrice; // Giả sử price là một số dạng string
         }
      });

      setTotalPrice(total.toLocaleString('vi-VN').replace('.', ','));
   };

   const handleItemCheckboxChange = (itemId, isChecked) => {
      const updatedSelectedItems = { ...selectedItems, [itemId]: isChecked };
      setSelectedItems(updatedSelectedItems);

      const allChecked = cartItems.every((item) => updatedSelectedItems[item.id]);

      setIsAllChecked(allChecked);
   };

   const handleSelectAll = () => {
      const updatedSelectedItems = {};
      const newIsAllChecked = !isAllChecked;

      cartItems.forEach((item) => {
         updatedSelectedItems[item.id] = newIsAllChecked;
      });

      setSelectedItems(updatedSelectedItems);
      setIsAllChecked(newIsAllChecked);
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('path-link')}>
            <div className={cx('path-link-container')}>
               <nav className={cx('path-link-content')}>
                  <ol className={cx('path-link-content-list')}>
                     <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className={cx('path-link-content-item__home')}>Trang chủ</li>
                     </Link>
                     <li className={cx('path-link-content-item__gt')}>&gt;</li>
                     <Link to="/course" style={{ textDecoration: 'none' }}>
                        <li className={cx('path-link-content-item__cart')}>Giỏ hàng</li>
                     </Link>
                  </ol>
               </nav>
            </div>
            <div className={cx('item-cart-panel')}>
               <div className={cx('item-cart-panel-container')}>
                  {cartItems.length === 0 ? (
                     <div className={cx('cart-page')}>
                        <div className={cx('empty-cart-container')}>
                           <div>
                              <div className={cx('empty-cart-icon-container')}>
                                 <svg
                                    class={cx('empty-cart-icon')}
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="AddShoppingCartIcon"
                                 >
                                    <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path>
                                 </svg>
                              </div>
                              <div className={cx('empty-cart-text')}>
                                 Bạn chưa có khóa học nào <br></br>trong giỏ hàng
                              </div>
                           </div>
                           <div className={cx('empty-cart-div')}>
                              <Link to="/cart" style={{ textDecoration: 'none' }}>
                                 <div className={cx('empty-cart-button')}>Tiếp tục mua sắm</div>
                              </Link>
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div className={cx('cart-page-has-course')}>
                        <div className={cx('cart-page-inner')}>
                           {cartItems.map((course, index) => (
                              <ItemCoursePay
                                 key={index}
                                 id={course.id}
                                 imgSrc={course.imgSrc}
                                 courseName={course.courseName}
                                 description={course.description}
                                 price={course.price}
                                 isChecked={selectedItems[course.id] || false}
                                 onCheckboxChange={handleItemCheckboxChange}
                              />
                           ))}
                        </div>
                        <div className={cx('cart-page-pay')}>
                           <div className={cx('pay-course')}>
                              <div className={cx('order-info')}>Thông tin đơn hàng</div>
                              <div className={cx('order-provisional')}>
                                 <span>Tạm tính</span>
                                 <span>{totalPrice}VND</span>
                              </div>
                              <div className={cx('order-sum')}>
                                 <span>Tổng tiền</span>
                                 <div>{totalPrice}VND</div>
                              </div>
                              <button className={cx('btn-pay')}>THANH TOÁN</button>
                           </div>
                           <div className={cx('select-all')}>
                              <button className={cx('btn-select')} onClick={handleSelectAll}>
                                 {isAllChecked ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
                              </button>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Course;
