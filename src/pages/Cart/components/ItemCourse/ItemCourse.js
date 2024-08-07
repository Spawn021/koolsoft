import React, { useState } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ItemCourse.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { MdSell, MdFormatListNumbered, MdOutlineGTranslate } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart as addToCartAction, selectCartItems } from '~/cart/CartSlice';

const cx = classNames.bind(styles);

function ItemCourse({ id, imgSrc, courseName, description, reviewCount, price }) {
   const [showModal, setShowModal] = useState(false);
   const openModal = () => {
      setShowModal(true);
   };
   const closeModal = () => {
      setShowModal(false);
   };

   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const handleAddToCart = () => {
      dispatch(addToCartAction({ id, imgSrc, courseName, description, price }));
      toast.success('Thêm vào giỏ hàng thành công', {
         position: 'top-center',
         autoClose: 5000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'light',
         closeButton: false,
      });
   };

   const isInCart = cartItems.some((item) => item.id === id);

   return (
      <div className={cx('item-course-wrapper')}>
         <div className={cx('item-course')}>
            <div className={cx('hover-course')}>
               <button className={cx('btn-view')} onClick={openModal}>
                  Xem nhanh
               </button>
               <button className={cx('btn-buy')}>Mua Ngay</button>
            </div>
            <div>
               <div className={cx('image-course')}>
                  <img src={imgSrc} alt={courseName} />
               </div>
               <div className={cx('info-course')}>
                  <div className={cx('name-course')}>{courseName}</div>
                  <div className={cx('description-course')}>{description}</div>
                  <div className={cx('card-footer-course')}>
                     <div className={cx('member-number')}>
                        <BsFillPeopleFill className={cx('icon-people')} />
                        <span>{reviewCount} Đánh giá</span>
                     </div>
                     <div className={cx('price-course')}>
                        <button className={cx('btn-price')}>{price}</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer />
         {showModal && (
            <div className={cx('modal')} onClick={closeModal}>
               <div className={cx('modal-overlay')}></div>
               <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                  <div className={cx('modal-inner')}>
                     <div className={cx('modal-title')}>
                        <div>Giày Asics Court MZ ‘Cream Black Gum’</div>
                        <AiOutlineClose className={cx('close')} onClick={closeModal} />
                     </div>
                     <div className={cx('modal-body')}>
                        <div className={cx('modal-header')}>
                           <div className={cx('modal-image-wrapper')}>
                              <img
                                 className={cx('modal-image')}
                                 src="https://cdn.vortexs.io/api/images/f271fe4f-533b-4573-a098-5a4920515800/375/w/giay-asics-court-mz-cream-black-gum-white-brown-1203a127-752.jpeg"
                                 alt="Triết học Mác-LeNin"
                              ></img>
                           </div>
                           <div className={cx('modal-info-course')}>
                              <div className={cx('list-info-course')}>
                                 <div className={cx('modal-item-course')}>
                                    <MdSell className={cx('icon-tag')} />
                                    <span className={cx('modal-price')}>40,000 VND</span>
                                 </div>
                                 <div className={cx('modal-item-course')}>
                                    <MdFormatListNumbered className={cx('icon-count')} />
                                    {/* <span className={cx('count-course')}>Số bài học: 7</span> */}
                                 </div>
                                 <div className={cx('modal-item-course')}>
                                    <MdOutlineGTranslate className={cx('icon-translate')} />
                                    {/* <span className={cx('language-course')}>Ngôn ngữ: Tiếng việt</span> */}
                                 </div>
                                 <div className={cx('modal-item-course')}>
                                    <span className={cx('detail-course')}>Xem chi tiết</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={cx('description')}>
                           <h1>
                              <strong>Giày Asics Court MZ ‘Cream Black Gum’</strong>
                           </h1>
                           {/* <div className={cx('text')}>
                              Hey, chào bạn, mình là Admin của&nbsp;
                              <strong>OTSV Team</strong>. Mình sẽ là người đồng hành cùng bạn trong "
                              <strong>NEU Ebook Plus Triết học Mác Lênin</strong>
                              <strong>"</strong>
                              &nbsp;lần này.
                              <br></br>
                              <strong>NEU Ebook Plus Triết học Mác Lênin có gì?</strong>
                              <ul>
                                 <li>
                                    <strong>Full lý thuyết và&nbsp;câu hỏi trắc nghiệm và tự luận</strong>&nbsp;của mỗi
                                    chương trong giáo trình học trên trường
                                 </li>
                                 <li>
                                    Lý thuyết và bài tập vận dụng<strong>&nbsp;</strong>Triết học Mác Lênin&nbsp;
                                    <strong>Chương 1: Triết học và vai trò của Triết học trong đời sống</strong>
                                 </li>
                                 <li>
                                    Lý thuyết và bài tập vận dụng<strong>&nbsp;</strong>Triết học Mác Lênin&nbsp;
                                    <strong>Chương 2: Chủ nghĩa duy vật biện chứng</strong>
                                 </li>
                                 <li>
                                    Lý thuyết và bài tập vận dụng<strong>&nbsp;</strong>Triết học Mác Lênin&nbsp;
                                    <strong>Chương 3: Chủ nghĩa duy vật lịch sử</strong>
                                 </li>
                                 <li>
                                    <strong>Phân dạng bài tập theo từng phần</strong>&nbsp;=&gt; dễ học hơn, dễ nắm bắt
                                    được kiến thức hơn, biết được phần này sẽ học những dạng bài nào, cách giải chúng nó
                                    ra sao.&nbsp;<strong>Mất gốc cũng học được!</strong>
                                 </li>
                                 <li>
                                    Mỗi dạng&nbsp;<strong>bài tập</strong>&nbsp;luôn được&nbsp;
                                    <strong>giải chi tiết</strong>&nbsp;và mang văn phong "hướng dẫn" =&gt;&nbsp;
                                    <strong>Giải thích cho bạn hiểu tại sao lại ra đáp án này</strong>, tại sao lại dùng
                                    công thức này. Điều này sẽ giúp bạn "trơn tru" trong quá trình học tập, không sợ
                                    không hiểu tại sao bài này làm kiểu gì nữa.&nbsp;
                                    <strong>Mất gốc cũng học được!&nbsp;</strong>
                                 </li>
                                 <li>
                                    <b>
                                       12 đề thi trắc nghiệm tham khảo, 3 đề thi trắc nghiệm mô phỏng đề thi cuối kỳ
                                       theo form đề thi thật, 8 đề tự luận (tham khảo cho các bài tiểu luận)&nbsp;và các
                                       câu hỏi luyện tập theo từng chương&nbsp;
                                    </b>
                                    (có đáp án giải thích chi tiết)&nbsp;
                                 </li>
                              </ul>
                           </div>
                           <h3>
                              <strong>Mua cái này như nào?&nbsp;</strong>
                           </h3>
                           <div className={cx('text')}>
                              <strong>
                                 <font color="#ff0000">Cách 1 (MOMO &amp; VNPay):&nbsp;</font>
                              </strong>
                              <font color="#000000">Bấm vào nút&nbsp;</font>"<strong>Mua ngay</strong>"
                              <font color="#000000">&nbsp;Phía bên cạnh và chọn thanh toán qua&nbsp;</font>
                              <strong>MoMo</strong>
                              <font color="#000000">&nbsp;hoặc&nbsp;</font>
                              <strong>VNPay</strong>
                              <font color="#000000">&nbsp;nếu bạn có.</font>
                              <br></br>
                              <strong>
                                 Cách 2 (Chuyển khoản):&nbsp;<br></br>
                                 ⭐Bước 1:
                              </strong>
                              &nbsp;Chuyển khoản đến
                              <ul>
                                 <li>Ngân hàng Quốc tế VIB</li>
                                 <li>Số tài khoản:&nbsp;109298899</li>
                                 <li>Chủ Tài khoản: DO VAN HUNG</li>
                                 <li>
                                    Nội dung chuyển khoản ghi rõ:&nbsp;<em>"Tên + sdt + neuebookplustriet"</em>
                                 </li>
                              </ul>
                              ví dụ:&nbsp;
                              <em>Linh 0345899842 neuebookplustriet</em>
                              <br></br>
                              <strong>NẾU BẠN GHI SAI, CHÚNG TÔI SẼ KHÔNG THỂ KIỂM TRA ĐƯỢC GIAO DỊCH.</strong>
                              <br></br>
                              <br></br>
                              <strong>⭐Bước 2:</strong>
                              &nbsp;Nhắn tin qua fanpage&nbsp;
                              <a href="http://m.me/onthisinhvienHL.NEU" target="_blank">
                                 Ôn thi sinh viên HL - Đại học Kinh tế Quốc dân
                              </a>
                              <strong>&nbsp;</strong>
                              kèm ảnh chụp màn hình chuyển khoản.
                              <br></br>
                              &nbsp;Giao dịch của bạn sẽ được cấp mã code trong vòng 24h kể từ lúc nhận được phản hồi
                              (trừ ngày lễ và chủ nhật)
                           </div>
                           <h3>
                              <br></br>
                              ://-
                           </h3>
                           <div className={cx('text')} style={{ margin: '14px 0' }}>
                              <p>Hết rùi, chúc bạn thành công, và hẹn bạn trong khoá học nhé.</p>
                           </div> */}
                        </div>
                     </div>
                     <div className={cx('modal-footer')}>
                        <div className={cx('btn-container')}>
                           {isInCart ? (
                              <Link to="/course" style={{ textDecoration: 'none' }}>
                                 <button className={cx('btn-add-cart')}>Xem giỏ hàng</button>
                              </Link>
                           ) : (
                              <button className={cx('btn-add-cart')} onClick={handleAddToCart}>
                                 Thêm vào giỏ hàng
                              </button>
                           )}
                        </div>
                        <button className={cx('btn-buy-now')}>Mua ngay</button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

ItemCourse.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   courseName: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   reviewCount: PropTypes.number.isRequired,
   price: PropTypes.string.isRequired,
};

export default ItemCourse;
