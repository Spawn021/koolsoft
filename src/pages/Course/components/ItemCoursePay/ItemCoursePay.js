import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ItemCoursePay.module.scss';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '~/cart/CartSlice';
const cx = classNames.bind(styles);
function ItemCoursePay({ id, imgSrc, courseName, description, price, isChecked, onCheckboxChange }) {
   const dispatch = useDispatch();

   const handleRemoveFromCart = () => {
      dispatch(removeFromCart(id));
   };
   const handleCheckboxChange = (event) => {
      onCheckboxChange(id, event.target.checked);
   };
   return (
      <div>
         <div className={cx('item-course-in-cart')}>
            <div className={cx('check-box')}>
               <input
                  className={cx('check-box-css')}
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
               />
            </div>
            <div className={cx('item-course-wrapper')}>
               <div className={cx('item-course-left')}>
                  <img className={cx('item-course-image')} src={imgSrc} alt={courseName}></img>
               </div>
               <div className={cx('item-course-right')}>
                  <div className={cx('item-course-info')}>
                     <div>
                        <div className={cx('item-course-title')}>{courseName}</div>
                        <div className={cx('item-course-rate')}>
                           <span>(0)</span>
                           <svg
                              className={cx('rate-star')}
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarOutlinedIcon"
                           >
                              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                           </svg>
                           <svg
                              className={cx('rate-star')}
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarOutlinedIcon"
                           >
                              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                           </svg>
                           <svg
                              className={cx('rate-star')}
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarOutlinedIcon"
                           >
                              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                           </svg>
                           <svg
                              className={cx('rate-star')}
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarOutlinedIcon"
                           >
                              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                           </svg>
                           <svg
                              className={cx('rate-star')}
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarOutlinedIcon"
                           >
                              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                           </svg>
                        </div>
                        <div className={cx('item-course-description')}>{description}</div>
                     </div>
                  </div>
                  <div className={cx('item-course-price')}>
                     <div className={cx('cost-real')}>{price}</div>
                     <div className={cx('course-remove')}>
                        <button className={cx('remove-inner')} onClick={handleRemoveFromCart}>
                           <IoCloseSharp />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
ItemCoursePay.propTypes = {
   id: PropTypes.number.isRequired,
   imgSrc: PropTypes.string.isRequired,
   courseName: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   price: PropTypes.string.isRequired,
   isChecked: PropTypes.bool.isRequired,
   onCheckboxChange: PropTypes.func.isRequired,
};
export default ItemCoursePay;
