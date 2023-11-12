import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ItemCourse.module.scss';

const cx = classNames.bind(styles);

function ItemCourse({ imgSrc, courseName, description, reviewCount, price }) {
   return (
      <div className={cx('item-course-wrapper')}>
         <div className={cx('item-course')}>
            <div className={cx('hover-course')}>
               <button className={cx('btn-view')}>Xem nhanh</button>
               <button className={cx('btn-buy')}>Mua Ngay</button>
            </div>
            <div>
               <div className={cx('image-course')}>
                  <img src={imgSrc} alt={courseName} />
               </div>
               <div className={cx('info-course')}>
                  <div className={cx('name-course')}>{courseName}</div>
                  <div className={cx('description-course')}>{description}</div>
                  <div className={cx('card-footer-course')}>
                     <div className={cx('member-number')}>
                        <BsFillPeopleFill className={cx('icon-people')} />
                        <span>{reviewCount} Đánh giá</span>
                     </div>
                     <div className={cx('price-course')}>
                        <button className={cx('btn-price')}>{price}</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

ItemCourse.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   courseName: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   reviewCount: PropTypes.number.isRequired,
   price: PropTypes.string.isRequired,
};

export default ItemCourse;
