import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import { Link } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { BiShow, BiHide } from 'react-icons/bi';
import { GoDotFill, GoCheck } from 'react-icons/go';
import { MdError } from 'react-icons/md';
import ResetPasswordImage from '../../../../assets/images/reset-password.png';

const cx = classNames.bind(styles);

function ResetPassword() {
   const [canSubmit, setCanSubmit] = useState(false);

   const [showPassword, setShowPassword] = useState(false);
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [passwordsMatch, setPasswordsMatch] = useState(true);
   const [passwordValidations, setPasswordValidations] = useState({
      length: false,
      number: false,
      specialChar: false,
      uppercase: false,
      lowercase: false,
   });

   const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
   };

   const handlePasswordChange = (e) => {
      const { value } = e.target;
      setPassword(value);

      setPasswordValidations({
         length: value.length >= 8,
         number: /\d/.test(value),
         specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
         uppercase: /[A-Z]/.test(value),
         lowercase: /[a-z]/.test(value),
      });

      // Check if both password and confirm password match and meet criteria
      setCanSubmit(
         value === confirmPassword &&
            passwordValidations.length &&
            passwordValidations.number &&
            passwordValidations.specialChar &&
            passwordValidations.uppercase &&
            passwordValidations.lowercase,
      );
   };

   const handleConfirmPasswordChange = (e) => {
      const { value } = e.target;
      setConfirmPassword(value);
      setPasswordsMatch(password === value);
      // Check if both password and confirm password match and meet criteria
      setCanSubmit(
         password === value &&
            passwordValidations.length &&
            passwordValidations.number &&
            passwordValidations.specialChar &&
            passwordValidations.uppercase &&
            passwordValidations.lowercase,
      );
   };

   return (
      <div className={cx('container')}>
         <div className={cx('screen')}>
            <div className={cx('screen__overlay')}>
               <div className={cx('screen__overlay-left')}>
                  <div className={cx('content')}>
                     <MdLockOutline className={cx('content__icon')} />
                     <h1 className={cx('content__title')}>Set new password</h1>
                     <p className={cx('content__desc')}>
                        Your new password must be different from previously used passwords.
                     </p>
                     <form action="/forgot-password/done" className={cx('form')}>
                        <div className={cx('form__input')}>
                           <label htmlFor="password" className={cx('form__label')}>
                              Password*
                           </label>
                           <div className={cx('form__password')}>
                              <span onClick={togglePasswordVisibility}>
                                 {showPassword ? (
                                    <BiHide className={cx('form__password__icon')} />
                                 ) : (
                                    <BiShow className={cx('form__password__icon')} />
                                 )}
                                 {showPassword ? 'Ẩn' : 'Hiển thị'}
                              </span>
                           </div>
                           <input
                              type={showPassword ? 'text' : 'password'}
                              id="password"
                              placeholder="@Abc12345"
                              value={password}
                              onChange={handlePasswordChange}
                              className={cx('form__input-field')}
                              required
                           />
                           <div className={cx('form__password-regex')}>
                              <div className={cx('form__password-regex__left')}>
                                 <div className={cx('form__password-regex__item')}>
                                    {passwordValidations.length ? (
                                       <GoCheck className={cx('form__password-regex__icon-check')} />
                                    ) : (
                                       <GoDotFill className={cx('form__password-regex__icon-uncheck')} />
                                    )}
                                    <span
                                       className={
                                          passwordValidations.length
                                             ? cx('form__password-regex__text-check')
                                             : cx('form__password-regex__text-uncheck')
                                       }
                                    >
                                       8 or more characters
                                    </span>
                                 </div>
                                 <div className={cx('form__password-regex__item')}>
                                    {passwordValidations.number ? (
                                       <GoCheck className={cx('form__password-regex__icon-check')} />
                                    ) : (
                                       <GoDotFill className={cx('form__password-regex__icon-uncheck')} />
                                    )}
                                    <span
                                       className={
                                          passwordValidations.number
                                             ? cx('form__password-regex__text-check')
                                             : cx('form__password-regex__text-uncheck')
                                       }
                                    >
                                       One number character
                                    </span>
                                 </div>
                                 <div className={cx('form__password-regex__item')}>
                                    {passwordValidations.specialChar ? (
                                       <GoCheck className={cx('form__password-regex__icon-check')} />
                                    ) : (
                                       <GoDotFill className={cx('form__password-regex__icon-uncheck')} />
                                    )}
                                    <span
                                       className={
                                          passwordValidations.specialChar
                                             ? cx('form__password-regex__text-check')
                                             : cx('form__password-regex__text-uncheck')
                                       }
                                    >
                                       One special character
                                    </span>
                                 </div>
                              </div>
                              <div className={cx('form__password-regex__right')}>
                                 <div className={cx('form__password-regex__item')}>
                                    {passwordValidations.uppercase ? (
                                       <GoCheck className={cx('form__password-regex__icon-check')} />
                                    ) : (
                                       <GoDotFill className={cx('form__password-regex__icon-uncheck')} />
                                    )}
                                    <span
                                       className={
                                          passwordValidations.uppercase
                                             ? cx('form__password-regex__text-check')
                                             : cx('form__password-regex__text-uncheck')
                                       }
                                    >
                                       One uppercase letter
                                    </span>
                                 </div>
                                 <div className={cx('form__password-regex__item')}>
                                    {passwordValidations.lowercase ? (
                                       <GoCheck className={cx('form__password-regex__icon-check')} />
                                    ) : (
                                       <GoDotFill className={cx('form__password-regex__icon-uncheck')} />
                                    )}
                                    <span
                                       className={
                                          passwordValidations.lowercase
                                             ? cx('form__password-regex__text-check')
                                             : cx('form__password-regex__text-uncheck')
                                       }
                                    >
                                       One lowercase letter
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={cx('form__input')}>
                           <label htmlFor="confirm-password" className={cx('form__label')}>
                              Confirm Password*
                           </label>
                           <input
                              type="password"
                              id="confirm-password"
                              value={confirmPassword}
                              onChange={handleConfirmPasswordChange}
                              className={cx('form__input-field')}
                              required
                           />
                           {confirmPassword && (
                              <>
                                 {passwordsMatch ? (
                                    <div className={cx('form__success')}>
                                       <GoCheck className={cx('form__success-icon')} />
                                       <span className={cx('form__success-text')}>Passwords match</span>
                                    </div>
                                 ) : (
                                    <div className={cx('form__error')}>
                                       <MdError className={cx('form__error-icon')} />
                                       <span className={cx('form__error-text')}>Passwords do not match</span>
                                    </div>
                                 )}
                              </>
                           )}
                        </div>
                        <button type="submit" className={cx('form__submit')} disabled={!canSubmit}>
                           Reset Password
                        </button>
                     </form>
                     <Link to="/login" className={cx('footer')}>
                        <FaArrowLeft className={cx('footer__icon-back')} />
                        <span>Back to login</span>
                     </Link>
                     <div className={cx('step')}>
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon')} />
                        <FaMinus className={cx('step__icon', 'actived')} />
                        <FaMinus className={cx('step__icon')} />
                     </div>
                  </div>
               </div>
               <div className={cx('screen__overlay-right')}>
                  <div className={cx('image-wrapper')}>
                     <img src={ResetPasswordImage} alt="Reset password" className={cx('image')} />
                     <div className={cx('image-overlay')}></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ResetPassword;
