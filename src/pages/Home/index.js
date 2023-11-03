import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SwiperComponent from './components/Swiper/Swiper';
import ListItemCount from './components/ListItemCount/ListItemCount';
import YearIcon from '../../assets/images/icons/nam.svg';
import SchoolIcon from '../../assets/images/icons/truong.svg';
import CourseIcon from '../../assets/images/icons/khoa-luyen.svg';
import StdIcon from '../../assets/images/icons/hocvien.svg';
import RateIcon from '../../assets/images/icons/fireStar.svg';
import PassIcon from '../../assets/images/icons/hai-long.svg';
const cx = classNames.bind(styles);
function Home() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('slide')}>
            <SwiperComponent />
         </div>
         <div className={cx('achive')}>
            <div className={cx('slogan')}>ÔN THI SINH VIÊN - THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN</div>
            <div className={cx('static-wrapper')}>
               <ListItemCount iconSrc={YearIcon} number={9} numAfter="+" text="Năm" />
               <ListItemCount iconSrc={SchoolIcon} number={20} numAfter="+" text="Trường" />
               <ListItemCount iconSrc={CourseIcon} number={400} numAfter="+" text="Khóa học" />
               <ListItemCount iconSrc={StdIcon} number={200} numAfter="k+" text="Học Viên" />
               <ListItemCount iconSrc={RateIcon} number={25} numAfter="k" text="Đánh giá" />
               <ListItemCount iconSrc={PassIcon} number={99} numAfter="%" text="Qua Môn" />
            </div>
         </div>
         <div className={cx('block-category')}>
            <div className={cx('school-wrap')}>
               <div className={cx('')}>
                  <p className={cx('big-text')}>Danh sách trường học</p>
                  <p className={cx('small-text')}>
                     <b>400+</b> khóa luyện chi tiết theo từng trường <b>Đại học, </b>giúp ôn thi hiệu quả
                  </p>
               </div>
               <div className={cx('form-search')}>
                  <input placeholder="Tìm kiếm tên trường..."></input>
                  <button>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>

               <div className={cx('')}></div>
            </div>
         </div>
      </div>
   );
}

export default Home;
