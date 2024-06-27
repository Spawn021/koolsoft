import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { BiShow, BiHide } from 'react-icons/bi';

const cx = classNames.bind(styles);
function Login() {
   const [showPassword, setShowPassword] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (email && password) {
         window.location.href = '/';
         console.log('Form submitted:', { email, password });
      } else {
         alert('Please enter both email and password.');
      }
   };
   return (
      <div className={cx('container')}>
         <form onSubmit={handleSubmit} action="" className={cx('login-form')}>
            <div className={cx('login-form__overlay')}>
               <div className={cx('login-form__overlay-left')}>
                  <div className={cx('login-form__header')}>
                     <h1 className={cx('login-form__header__title')}>Login</h1>
                     <div clasName={cx('login-form__header__social')}>
                        <button className={cx('login-form__header__social-button', 'btn-facebook')}>
                           <FaFacebook className={cx('icon-cus')} />
                           <span>Log in with Facebook</span>
                        </button>
                        <button className={cx('login-form__header__social-button', 'btn-google')}>
                           <FaGoogle className={cx('icon-cus')} />
                           <span>Log in with Google</span>
                        </button>
                     </div>
                     <span className={cx('login-form__header__separator')}>or use your account</span>
                  </div>
                  <div className={cx('login-form__body')}>
                     <div className={cx('login-form__body__input')}>
                        <label htmlFor="email" className={cx('login-form__body__label')}>
                           Email
                        </label>
                        <input
                           type="email"
                           id="email"
                           placeholder="Enter your email"
                           className={cx('login-form__body__input-field')}
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                        />
                     </div>
                     <div className={cx('login-form__body__input')}>
                        <label htmlFor="password" className={cx('login-form__body__label')}>
                           Password
                        </label>
                        <div className={cx('login-form__body__password')}>
                           <span
                              className={cx('login-form__body__password__toggle')}
                              onClick={togglePasswordVisibility}
                           >
                              {showPassword ? (
                                 <BiHide className={cx('login-form__body__password__icon')} />
                              ) : (
                                 <BiShow className={cx('login-form__body__password__icon')} />
                              )}
                              {showPassword ? 'Ẩn' : 'Hiển thị'}
                           </span>
                        </div>
                        <input
                           type={showPassword ? 'text' : 'password'}
                           id="password"
                           placeholder="Enter your password"
                           className={cx('login-form__body__input-field')}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                        />
                        <Link to="/forgot-password/send-email" className={cx('login-form__body__forgot-password')}>
                           Forget your password?
                        </Link>
                     </div>
                     <div className={cx('login-form__body__input')}>
                        <button type="submit" className={cx('login-form__body__submit')}>
                           Login
                        </button>
                     </div>
                  </div>
               </div>
               <div className={cx('login-form__overlay-right')}>
                  <div className={cx('login-form__overlay-right__content')}>
                     <h1 className={cx('login-form__overlay-right__title')}>Hello, Friend!</h1>
                     <p className={cx('login-form__overlay-right__text')}>
                        Enter your personal details and start journey with us
                     </p>
                     <Link to="/signup">
                        <button className={cx('login-form__overlay-right__button')}>Sign Up</button>
                     </Link>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
}
export default Login;

// Remember me
