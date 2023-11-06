import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SwiperComponent from './components/Swiper/Swiper';
import ListItemCount from './components/ListItemCount/ListItemCount';
import SchoolCard from './components/Card/SchoolCard';

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
               <p className={cx('title-block-category')}>Danh sách trường học</p>
               <p className={cx('description-block-category')}>
                  <b>400+</b> khóa luyện chi tiết theo từng trường <b>Đại học, </b>giúp ôn thi hiệu quả
               </p>
               <div className={cx('form-search')}>
                  <input className={cx('input-search')} placeholder="Tìm kiếm tên trường..."></input>
                  <button className={cx('button-search')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
               <div className={cx('list-card-school')}>
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"
                     shortname="NEU"
                     fullname="Đại học Kinh tế Quốc Dân"
                     course="192 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/258008389-1646280981033-daihocxaydung.png"
                     shortname="HUCE"
                     fullname="Đại học Xây dựng"
                     course="53 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/30498790-1590834420684-logo(1).jpg"
                     shortname="UEH"
                     fullname="ĐẠI học Kinh tế Thành phố HCM"
                     course="63 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/335050581-1646297997776-daihockinhteluathcm.png"
                     shortname="UEL"
                     fullname="Đại học Kinh tế - Luật HCM"
                     course="29 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/53758198-1650331342559-logohub.png"
                     shortname="HUB"
                     fullname="Đại học Ngân hàng thành phố HCM"
                     course="30 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/435232271-1647858439448-daihocthuongmai.png"
                     shortname="TMU"
                     fullname="Đại học Thương mại"
                     course="30 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/222815085-1646299905098-daihocbachkhoahanoi.png"
                     shortname="HUST"
                     fullname="ĐH Bách khoa Hà Nội"
                     course="19 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/16741081-1649079134281-tdt_logo.png"
                     shortname="TDTU"
                     fullname="Đại học Tôn Đức Thắng"
                     course="17 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/503622015-1650331824750-logoufm.png"
                     shortname="UFM"
                     fullname="Đại học Tài chính - Marketing "
                     course="19 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/506704871-1647931975956-dhvinh.png"
                     shortname="VinhUni"
                     fullname="Đại học Vinh"
                     course="10 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/722165884-1646280993845-hocvientaichinh.png"
                     shortname="AOF"
                     fullname="Học viện tài chính"
                     course="26 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/26823064-1647858464142-hocviennganhang.png"
                     shortname="BA"
                     fullname="Học Viện Ngân Hàng"
                     course="12 khóa học"
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/987350358-1647931958351-daihoccongdoan.png"
                     shortname="TUU"
                     fullname="Đại học Công Đoàn"
                     course="6 khóa học"
                     khóa
                     học
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/636939926-1650331677139-logohcmut.jpg"
                     shortname="HCMUT"
                     fullname="Đại học Bách Khoa thành phố HCM"
                     course=""
                     khóa
                     học
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/254687189-1646299865390-hocviennongnghiepvietnam.png"
                     shortname="VNUA"
                     fullname="Học Viện Nông nghiệp VN"
                     course="6 khóa học"
                     khóa
                     học
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/551960452-1689584570319-ok.jpg"
                     shortname="CLC, TT, KSTN, CNTN"
                     fullname="CHƯƠNG TRÌNH TIẾNG ANH"
                     course=""
                     khóa
                     học
                  />
                  <SchoolCard
                     img="https://storage.googleapis.com/onthisinhvien.appspot.com/images/175933348-1668851782307-logohltroncovien1.png"
                     shortname=""
                     fullname="TRƯỜNG KHÁC"
                     course="8 khóa học"
                     khóa
                     học
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
