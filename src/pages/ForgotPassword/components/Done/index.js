import classNames from 'classnames/bind';
import styles from './Done.module.scss';
import { Link } from 'react-router-dom';
import { LuBadgeCheck } from 'react-icons/lu';
import { FaArrowLeft } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import DoneImage from '../../../../assets/images/done.jpg';

const cx = classNames.bind(styles);

function Done() {
   return (
      <div className={cx('container')}>
         <div className={cx('screen')}>
            <div className={cx('screen__overlay')}>
               <div className={cx('screen__overlay-left')}>
                  <div className={cx('content')}>
                     <LuBadgeCheck className={cx('content__icon')} />
                     <h1 className={cx('content__title')}>All Done!</h1>
                     <p className={cx('content__desc')}>
                        Your password has been successfully reset. You can now login with your new password.
                     </p>

                     <Link to="/login" className={cx('footer')}>
                        <FaArrowLeft className={cx('footer__icon-back')} />
                        <span>Back to login</span>
                     </Link>
                     <div className={cx('step')}>
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon', 'actived')} />
                     </div>
                  </div>
               </div>
               <div className={cx('screen__overlay-right')}>
                  <div className={cx('image-wrapper')}>
                     <img src={DoneImage} alt="Done" className={cx('image')} />
                     <div className={cx('image-overlay')}></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Done;
