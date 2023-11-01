import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonRipple.module.scss'; // Import the CSS module
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
   useLayoutEffect(() => {
      let bounce = null;
      if (rippleCount > 0) {
         clearTimeout(bounce);

         bounce = setTimeout(() => {
            cleanUpFunction();
            clearTimeout(bounce);
         }, duration * 4);
      }

      return () => clearTimeout(bounce);
   }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = (props) => {
   const { duration, color } = props;
   const [rippleArray, setRippleArray] = useState([]);

   useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
      setRippleArray([]);
   });

   const addRipple = (event) => {
      const rippleContainer = event.currentTarget.getBoundingClientRect();
      const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
      const x = event.pageX - rippleContainer.x - size / 2;
      const y = event.pageY - rippleContainer.y - size / 2;
      const newRipple = {
         x,
         y,
         size,
      };

      setRippleArray([...rippleArray, newRipple]);
   };

   return (
      <div className={cx('ripple-container')} onMouseDown={addRipple}>
         {rippleArray.length > 0 &&
            rippleArray.map((ripple, index) => {
               return (
                  <span
                     key={'span' + index}
                     className={cx('ripple-span')}
                     style={{
                        top: ripple.y,
                        left: ripple.x,
                        width: ripple.size,
                        height: ripple.size,
                        animationDuration: `${duration}ms`, // Set dynamic duration here
                        backgroundColor: color, // Set dynamic color here
                     }}
                  />
               );
            })}
      </div>
   );
};

Ripple.propTypes = {
   duration: PropTypes.number,
   color: PropTypes.string,
};

Ripple.defaultProps = {
   duration: 850,
   color: '#fff',
};

export default Ripple;
