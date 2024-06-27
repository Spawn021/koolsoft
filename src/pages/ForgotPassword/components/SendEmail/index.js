import classNames from 'classnames/bind';
import styles from './SendEmail.module.scss';
import { Link } from 'react-router-dom';
import { IoKeyOutline } from 'react-icons/io5';
import { FaArrowLeft } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import SendEmailImage from '../../../../assets/images/send-email.png';

const cx = classNames.bind(styles);

function SendEmail() {
   return (
      <div className={cx('container')}>
         <div className={cx('screen')}>
            <div className={cx('screen__overlay')}>
               <div className={cx('screen__overlay-left')}>
                  <div className={cx('content')}>
                     <IoKeyOutline className={cx('content__icon')} />
                     <h1 className={cx('content__title')}>Forgot Password?</h1>
                     <p className={cx('content__desc')}>
                        Enter your email address and we will send you a link to reset your password.
                     </p>
                     <form action="/forgot-password/otp" className={cx('form')}>
                        <div className={cx('form__input')}>
                           <label htmlFor="email" className={cx('form__label')}>
                              Email*
                           </label>
                           <input
                              type="email"
                              id="email"
                              required
                              placeholder="Enter your email"
                              className={cx('form__input-field')}
                           />
                        </div>
                        <button type="submit" className={cx('form__submit')}>
                           Reset Password
                        </button>
                     </form>
                     <Link to="/login" className={cx('footer')}>
                        <FaArrowLeft className={cx('footer__icon-back')} />
                        <span>Back to login</span>
                     </Link>
                     <div className={cx('step')}>
                        <FaMinus className={cx('step__icon', 'actived')} />
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon')} />
                     </div>
                  </div>
               </div>
               <div className={cx('screen__overlay-right')}>
                  <img src={SendEmailImage} alt="Send email" className={cx('image')} />
               </div>
            </div>
         </div>
      </div>
   );
}
export default SendEmail;
