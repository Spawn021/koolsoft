import classNames from 'classnames/bind';
import Header from './Header';
import styles from './DefaultLayout.module.scss';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   const location = useLocation();
   let contentHeight = 'auto';

   switch (location.pathname) {
      case '/':
         contentHeight = '4750px';
         break;
      case '/cart':
         contentHeight = '3000px';
         break;
      default:
         contentHeight = 'auto';
         break;
   }

   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('content')} style={{ minHeight: contentHeight }}>
            {children}
         </div>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
