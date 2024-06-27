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
import SchoolIcon from '../../assets/images/icons/nam.svg';
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
            <div className={cx('slogan')}>FASHION SHOES - Bước Đi Sang Trọng, Phong Cách Đỉnh Cao!</div>
            <div className={cx('static-wrapper')}>
               <ListItemCount iconSrc={YearIcon} number={9} numAfter="+" text="Năm" />
               <ListItemCount iconSrc={SchoolIcon} number={20} numAfter="+" text="Cơ sở" />
               <ListItemCount iconSrc={CourseIcon} number={1000} numAfter="+" text="Sản phẩm" />
               <ListItemCount iconSrc={StdIcon} number={200} numAfter="k+" text="Khách hàng" />
               <ListItemCount iconSrc={RateIcon} number={25} numAfter="k" text="Đánh giá" />
               <ListItemCount iconSrc={PassIcon} number={99} numAfter="%" text="Hài Lòng" />
            </div>
         </div>
         <div className={cx('block-category')}>
            <div className={cx('school-wrap')}>
               <p className={cx('title-block-category')}>Sản phẩm mới</p>
               {/* <p className={cx('description-block-category')}>
                  <b>400+</b> khóa luyện chi tiết theo từng trường <b>Đại học, </b>giúp ôn thi hiệu quả
               </p>
               <div className={cx('form-search')}>
                  <input className={cx('input-search')} placeholder="Tìm kiếm tên trường..."></input>
                  <button className={cx('button-search')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div> */}
               <div className={cx('view')}>
                  <p className={cx('category-home')}>Giày thể thao nam nữ</p>
                  <button className={cx('btn-view-more')}>Xem thêm</button>
               </div>
               <div className={cx('list-card-school')}>
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
               </div>
               <div className={cx('view')}>
                  <p className={cx('category-home')}>Giày thể thao nam nữ</p>
                  <button className={cx('btn-view-more')}>Xem thêm</button>
               </div>
               <div className={cx('list-card-school')}>
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
               </div>
               <div className={cx('view')}>
                  <p className={cx('category-home')}>Giày thể thao nam nữ</p>
                  <button className={cx('btn-view-more')}>Xem thêm</button>
               </div>
               <div className={cx('list-card-school')}>
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
                  <SchoolCard
                     img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDKGyk6RBMSQ6EpMFWkQq7gY9NBJz6Mo68vIj6BFipc2dsrDiYeBLDfn3WVucHKMspXdsiRj3idHVGfND9oWIrIgtNv-CzDO7puCEs5c&usqp=CAc"
                     shortname="Limited Edition"
                     fullname="Vintas Public 2000s - Low Top"
                     course="100.000 VND"
                  />
               </div>
               <div className={cx('why-choose')}>
                  <div className={cx('why-choose-container')}>
                     <div className={cx('sub-title')}>
                        <h2>Vì sao hơn 200,000 bạn chọn</h2>
                        <h5>FASHION SHOES</h5>
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
                           <h3>Thương hiệu nổi tiếng</h3>
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
                           <h3>Sản phẩm chất lượng</h3>
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
                           <h3>Giá thành cạnh tranh</h3>
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
                        src="https://www.youtube.com/embed/YaeDt0EDjWI?si=wn2Jn1kOUQz_0JA4"
                        title="HỌC ĐẠI HỌC - GẮNG LÀ CÓ - A+ KHÔNG KHÓ |👥 ONTHISINHVIEN"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                     ></iframe>
                  </div>
               </div>
               <div className={cx('panel-feedback')}>
                  <div className={cx('feedback-container')}>
                     <h3>Phản hồi của khách hàng</h3>
                  </div>
                  <div className={cx('slide-feedback')}>
                     <SwiperFeedBack />
                  </div>
               </div>
               {/* <div className={cx('wrapper-social')}>
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
               </div> */}
               <div className={cx('mission')}>
                  <div className={cx('wrapper-mission')}>
                     <div className={cx('name')}>
                        <h2>Hệ thống cửa hàng của Fashion Shoes</h2>
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
