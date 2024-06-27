import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Signup.module.scss';
import { BiShow, BiHide } from 'react-icons/bi';
import { GoDotFill, GoCheck } from 'react-icons/go';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Signup() {
   const [showPassword, setShowPassword] = useState(false);
   const [password, setPassword] = useState('');
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
   };

   return (
      <div className={cx('container')}>
         <form action="" className={cx('signup-form')}>
            <div className={cx('signup-form__overlay')}>
               <div className={cx('signup-form__overlay-right')}>
                  <div className={cx('signup-form__overlay-right__content')}>
                     <h1 className={cx('signup-form__overlay-right__title')}>Welcome Back!</h1>
                     <p className={cx('signup-form__overlay-right__text')}>
                        To keep connected with us please login with your personal info
                     </p>
                     <Link to="/login">
                        <button className={cx('signup-form__overlay-right__button')}>Sign In</button>
                     </Link>
                  </div>
               </div>
               <div className={cx('signup-form__overlay-left')}>
                  <div className={cx('signup-form__header')}>
                     <h1 className={cx('signup-form__header__title')}>Sign up</h1>
                  </div>
                  <div className={cx('signup-form__body')}>
                     <div className={cx('signup-form__body__input')}>
                        <label htmlFor="username" className={cx('signup-form__body__label')}>
                           Username
                        </label>
                        <input
                           type="username"
                           id="username"
                           placeholder="tqnam"
                           className={cx('signup-form__body__input-field')}
                           required
                        />
                     </div>
                     <div className={cx('signup-form__body__input')}>
                        <label htmlFor="email" className={cx('signup-form__body__label')}>
                           Email
                        </label>
                        <input
                           type="email"
                           id="email"
                           placeholder="abc@gmail.com"
                           className={cx('signup-form__body__input-field')}
                           required
                        />
                     </div>
                     <div className={cx('signup-form__body__input')}>
                        <label htmlFor="password" className={cx('signup-form__body__label')}>
                           Password
                        </label>
                        <div className={cx('signup-form__body__password')}>
                           <span onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                 <BiHide className={cx('signup-form__body__password__icon')} />
                              ) : (
                                 <BiShow className={cx('signup-form__body__password__icon')} />
                              )}
                              {showPassword ? 'Ẩn' : 'Hiển thị'}
                           </span>
                        </div>
                        <input
                           type={showPassword ? 'text' : 'password'}
                           id="password"
                           placeholder="@abc12345"
                           value={password}
                           onChange={handlePasswordChange}
                           className={cx('signup-form__body__input-field')}
                           required
                        />
                        <div className={cx('signup-form__body__password-regex')}>
                           <div className={cx('signup-form__body__password-regex__left')}>
                              <div className={cx('signup-form__body__password-regex__item')}>
                                 {passwordValidations.length ? (
                                    <GoCheck className={cx('signup-form__body__password-regex__icon-check')} />
                                 ) : (
                                    <GoDotFill className={cx('signup-form__body__password-regex__icon-uncheck')} />
                                 )}

                                 {passwordValidations.length ? (
                                    <span className={cx('signup-form__body__password-regex__text-check')}>
                                       8 or more characters
                                    </span>
                                 ) : (
                                    <span className={cx('signup-form__body__password-regex__text-uncheck')}>
                                       8 or more characters
                                    </span>
                                 )}
                              </div>
                              <div className={cx('signup-form__body__password-regex__item')}>
                                 {passwordValidations.number ? (
                                    <GoCheck className={cx('signup-form__body__password-regex__icon-check')} />
                                 ) : (
                                    <GoDotFill className={cx('signup-form__body__password-regex__icon-uncheck')} />
                                 )}

                                 {passwordValidations.number ? (
                                    <span className={cx('signup-form__body__password-regex__text-check')}>
                                       One number character
                                    </span>
                                 ) : (
                                    <span className={cx('signup-form__body__password-regex__text-uncheck')}>
                                       One number character
                                    </span>
                                 )}
                              </div>
                              <div className={cx('signup-form__body__password-regex__item')}>
                                 {passwordValidations.specialChar ? (
                                    <GoCheck className={cx('signup-form__body__password-regex__icon-check')} />
                                 ) : (
                                    <GoDotFill className={cx('signup-form__body__password-regex__icon-uncheck')} />
                                 )}

                                 {passwordValidations.specialChar ? (
                                    <span className={cx('signup-form__body__password-regex__text-check')}>
                                       One special character
                                    </span>
                                 ) : (
                                    <span className={cx('signup-form__body__password-regex__text-uncheck')}>
                                       One special character
                                    </span>
                                 )}
                              </div>
                           </div>
                           <div className={cx('signup-form__body__password-regex__right')}>
                              <div className={cx('signup-form__body__password-regex__item')}>
                                 {passwordValidations.uppercase ? (
                                    <GoCheck className={cx('signup-form__body__password-regex__icon-check')} />
                                 ) : (
                                    <GoDotFill className={cx('signup-form__body__password-regex__icon-uncheck')} />
                                 )}
                                 {passwordValidations.uppercase ? (
                                    <span className={cx('signup-form__body__password-regex__text-check')}>
                                       One uppercase letter
                                    </span>
                                 ) : (
                                    <span className={cx('signup-form__body__password-regex__text-uncheck')}>
                                       One uppercase letter
                                    </span>
                                 )}
                              </div>
                              <div className={cx('signup-form__body__password-regex__item')}>
                                 {passwordValidations.lowercase ? (
                                    <GoCheck className={cx('signup-form__body__password-regex__icon-check')} />
                                 ) : (
                                    <GoDotFill className={cx('signup-form__body__password-regex__icon-uncheck')} />
                                 )}

                                 {passwordValidations.lowercase ? (
                                    <span className={cx('signup-form__body__password-regex__text-check')}>
                                       One lowercase letter
                                    </span>
                                 ) : (
                                    <span className={cx('signup-form__body__password-regex__text-uncheck')}>
                                       One lowercase letter
                                    </span>
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={cx('signup-form__body__input')}>
                        <button type="submit" className={cx('signup-form__body__submit')}>
                           Sign Up
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
}
export default Signup;
// Bắt buộc nhập email hợp lệ -> Signup
// Bắt buộc nhập đủ thông tin -> Signup
