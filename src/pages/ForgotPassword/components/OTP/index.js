import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './OTP.module.scss';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import OTPImage from '../../../../assets/images/otp.png';

const cx = classNames.bind(styles);

function OTP() {
   const [otp, setOtp] = useState(new Array(4).fill(''));
   const [otpEntered, setOtpEntered] = useState(false);

   useEffect(() => {
      // Check if all OTP fields are filled
      const isFilled = otp.every((value) => value !== '');
      setOtpEntered(isFilled);
   }, [otp]);

   const handleOTPInput = (e, index) => {
      const { value } = e.target;
      if (/[^0-9]/.test(value)) return; // Only allow numeric input

      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is not empty
      if (value && index < 3) {
         const nextSibling = document.getElementById(`otp-input-${index + 1}`);
         if (nextSibling) {
            nextSibling.focus();
         }
      }

      // Move to previous input if value is empty
      if (!value && index > 0) {
         const prevSibling = document.getElementById(`otp-input-${index - 1}`);
         if (prevSibling) {
            prevSibling.focus();
         }
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form submission
      // Handle continue action if OTP is entered
      if (otpEntered) {
         // Navigate to the reset password page
         window.location.href = '/forgot-password/reset-password';
      } else {
         // Optionally, show a message to enter OTP first
         alert('Please enter OTP first.');
      }
   };

   return (
      <div className={cx('container')}>
         <div className={cx('screen')}>
            <div className={cx('screen__overlay')}>
               <div className={cx('screen__overlay-left')}>
                  <div className={cx('content')}>
                     <MdOutlineMail className={cx('content__icon')} />
                     <h1 className={cx('content__title')}>Password reset</h1>
                     <p className={cx('content__desc')}>
                        <span>We sent a code to </span>
                        <span>tranquangnam27012002@gmail.com. </span>
                        <span>Please check your email and enter the code below.</span>
                     </p>
                     <form onSubmit={handleSubmit} className={cx('form')}>
                        <div className={cx('form__group')}>
                           {otp.map((_, index) => (
                              <input
                                 key={index}
                                 id={`otp-input-${index}`}
                                 type="text"
                                 maxLength="1"
                                 className={cx('otp-input')}
                                 value={otp[index]}
                                 onChange={(e) => handleOTPInput(e, index)}
                                 autoFocus={index === 0}
                              />
                           ))}
                        </div>
                        <div className={cx('form__input')}>
                           <button type="submit" className={cx('form__submit')} disabled={!otpEntered}>
                              Continue
                           </button>
                        </div>
                     </form>
                     <Link to="/login" className={cx('footer')}>
                        <FaArrowLeft className={cx('footer__icon-back')} />
                        <span>Back to login</span>
                     </Link>
                     <div className={cx('step')}>
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon', 'actived')} />
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon')} />
                     </div>
                  </div>
               </div>
               <div className={cx('screen__overlay-right')}>
                  <img src={OTPImage} alt="OTP" className={cx('image')} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default OTP;
