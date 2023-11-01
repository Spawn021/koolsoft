import React from 'react';
import styles from './ButtonRipple.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ children }) {
   return <button className={cx('button-styled')}>{children}</button>;
}

export default Button;
