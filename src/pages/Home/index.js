import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SwiperComponent from './components/Swiper/Swiper';
import ListItemCount from './components/ListItemCount/ListItemCount';
import SchoolCard from './components/Card/SchoolCard';
import SwiperFeedBack from './components/SwiperFeedBack/SwiperFeedBack';
import LabTabs from './components/LabTabs/LabTabs';
import YearIcon from '../../assets/images/icons/nam.svg';
import SchoolIcon from '../../assets/images/icons/truong.svg';
import CourseIcon from '../../assets/images/icons/khoa-luyen.svg';
import StdIcon from '../../assets/images/icons/hocvien.svg';
import RateIcon from '../../assets/images/icons/fireStar.svg';
import PassIcon from '../../assets/images/icons/hai-long.svg';
import { BiChevronRight } from 'react-icons/bi';
import Header from '~/components/Layout/DefaultLayout/Header';
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
               <div className={cx('why-choose')}>
                  <div className={cx('why-choose-container')}>
                     <div className={cx('sub-title')}>
                        <h2>Vì sao hơn 200,000 bạn chọn</h2>
                        <h5>Onthisinhvien.com</h5>
                        <p>Bí quyết chinh phục điểm A các môn đại cương và chuyên ngành</p>
                     </div>
                     <div className={cx('why-choose-list-item')}>
                        <div className={cx('why-choose-item')}>
                           <div className={cx('item-top')}>
                              <span>
                                 <img
                                    className={cx('item-image')}
                                    src="https://onthisinhvien.com/images/icon/otsv/icon1-why-choose.svg"
                                    alt="Icon"
                                 ></img>
                              </span>
                           </div>
                           <h3>Em không biết môn này học cái gì?</h3>
                           <span>
                              Đừng lo, Khóa luyện sẽ "Review đề thi" lại cho em, đề thi có bao nhiêu câu, rơi vào những
                              phần kiến thức nào,...
                           </span>
                        </div>
                        <div className={cx('why-choose-item')}>
                           <div className={cx('item-top')}>
                              <span>
                                 <img
                                    className={cx('item-image')}
                                    src="https://onthisinhvien.com/images/icon/otsv/icon2-why-choose.svg"
                                    alt="Icon"
                                 ></img>
                              </span>
                           </div>
                           <h3>Em không biết bắt đầu học từ đâu?</h3>
                           <span>
                              Đừng lo, Khóa luyện luôn tạo ra "Lộ trình học tập" để học từ đầu đến cuối, biết mình đang
                              học đến đâu, cần học thêm những gì.
                           </span>
                        </div>
                        <div className={cx('why-choose-item')}>
                           <div className={cx('item-top')}>
                              <span>
                                 <img
                                    className={cx('item-image')}
                                    src="https://onthisinhvien.com/images/icon/otsv/icon3-why-choose.svg"
                                    alt="Icon"
                                 ></img>
                              </span>
                           </div>
                           <h3>Em không biết hỏi bài ai?</h3>
                           <span>
                              Đừng lo, Khóa luyện có một "Group chat riêng" để hỗ trợ em, giúp em trả lời các câu hỏi,
                              giải đáp các thắc mắc về môn học nhé.
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={cx('panel')}>
                  <div>
                     <iframe
                        className={cx('panel-iframe')}
                        src="https://www.youtube.com/embed/L1kI-MVZtEY"
                        title="HỌC ĐẠI HỌC - GẮNG LÀ CÓ - A+ KHÔNG KHÓ |👥 ONTHISINHVIEN"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                     ></iframe>
                  </div>
               </div>
               <div className={cx('panel-feedback')}>
                  <div className={cx('feedback-container')}>
                     <h3>Phản hồi của học viên kỳ trước</h3>
                  </div>
                  <div className={cx('slide-feedback')}>
                     <SwiperFeedBack />
                  </div>
               </div>
               <div className={cx('wrapper-social')}>
                  <div className={cx('container-social')}>
                     <div>
                        <div className={cx('title')}>
                           OTSV TRÊN CÁC <span>NỀN TẢNG</span> MẠNG XÃ HỘI
                        </div>
                        <div className={cx('description')}>
                           Nơi chia sẻ kiến thức, kỹ năng bổ ích dành cho sinh viên
                        </div>
                        <div className={cx('wrapper-item')}>
                           <div className={cx('box-item')}>
                              <div className={cx('item-social')}>
                                 <div className={cx('image-social')}>
                                    <img
                                       src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fyoutube.png&w=1920&q=75"
                                       alt="Youtube"
                                    ></img>
                                    <div className={cx('number-social')}>
                                       <svg
                                          className={cx('eye-icon')}
                                          focusable="false"
                                          aria-hidden="true"
                                          viewBox="0 0 24 24"
                                          data-testid="RemoveRedEyeIcon"
                                       >
                                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                       </svg>
                                       <span>2.772.063 </span>
                                    </div>
                                    <a href="https://www.youtube.com/c/%C3%94nthiSinhvi%C3%AAn">
                                       <div className={cx('subscriber')}>
                                          <div className={cx('subscriber-text')}>subscriber</div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className={cx('box-item')}>
                              <div className={cx('item-social')}>
                                 <div className={cx('image-social')}>
                                    <img
                                       src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Ftiktok.png&w=1920&q=75"
                                       alt="Youtube"
                                    ></img>
                                    <div className={cx('number-social')}>
                                       <svg
                                          className={cx('eye-icon')}
                                          focusable="false"
                                          aria-hidden="true"
                                          viewBox="0 0 24 24"
                                          data-testid="RemoveRedEyeIcon"
                                       >
                                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                       </svg>
                                       <span>2.772.063 </span>
                                    </div>
                                    <a href="https://www.tiktok.com/@onthisinhvien">
                                       <div className={cx('subscriber')}>
                                          <div className={cx('subscriber-text')}>follow</div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={cx('mission')}>
                  <div className={cx('wrapper-mission')}>
                     <div className={cx('name')}>
                        <h2>Hệ thống Ôn thi sinh viên</h2>
                     </div>
                     <LabTabs />
                  </div>
               </div>
               <div className={cx('wrapper-activity')}>
                  <div className={cx('container-activity')}>
                     <div className={cx('title-activity')}>
                        <h2>Hoạt động tiêu biểu</h2>
                        <p>Đây là những sự kiện, hoạt động ghi dấu ấn của OTSV trong năm</p>
                        <div className={cx('list-activity')}>
                           <div className={cx('item-activity')}>
                              <div className={cx('image-activity')}>
                                 <img
                                    className={cx('image')}
                                    src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F136923477-1638332088547-neuyouthfestival2021.jpg&w=1920&q=75"
                                 ></img>
                              </div>
                              <div className={cx('info-activity')}>
                                 <div className={cx('name-activity')}>
                                    Ôn thi sinh viên HL - NEU YOUTH FESTIVAL 2021
                                 </div>
                                 <div className={cx('date-activity')}>Ngày 01/12/2021</div>
                              </div>
                           </div>
                           <div className={cx('item-activity')}>
                              <div className={cx('image-activity')}>
                                 <img
                                    className={cx('image')}
                                    src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F74392169-1655117994323-06.jpg&w=1920&q=75"
                                 ></img>
                              </div>
                              <div className={cx('info-activity')}>
                                 <div className={cx('name-activity')}>
                                    NHỮNG ĐIỀU CẦN PHẢI BIẾT TRƯỚC KHI VÀO TDTU CỦA CÁC TÂN SINH VIÊN
                                 </div>
                                 <div className={cx('date-activity')}>Ngày 13/06/2022</div>
                              </div>
                           </div>
                           <div className={cx('item-activity')}>
                              <div className={cx('image-activity')}>
                                 <img
                                    className={cx('image')}
                                    src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F686543180-1652239498046-chinhphuca.png&w=1920&q=75"
                                 ></img>
                              </div>
                              <div className={cx('info-activity')}>
                                 <div className={cx('name-activity')}>
                                    Học bổng HL dành cho sinh viên giỏi các trường đại học
                                 </div>
                                 <div className={cx('date-activity')}>Ngày 11/05/2022</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={cx('show-more')}>
                        <button>
                           Xem thêm
                           <BiChevronRight className={cx('icon-chev')} />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
