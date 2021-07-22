import React from "react";
import './index.css';
import axios from "axios";
import {Link} from "react-router-dom";

function MainPage() {
  let [products, setProducts]= React.useState([]);
  React.useEffect(
    function() {
      axios.get(
        "https://75badeb7-18af-4b19-9798-6fdea4ac0ec8.mock.pstmn.io/products/"
      ).then(function(result) {
          let products = result.data.products;
          setProducts(products);
      }).catch(function(error) {
        console.log("애러 발생 : " ,error);
      });
    },[]
  )
  


  return (
    <div>
          <section id="visual">
      <div className="inner">
        <div className="visual_text">
          <p className="R_49">Pascucci menu</p>
          <p className="N_20">130년 정통 이탈리아 에스프레소 커피전문점</p>
        </div>
      </div>
    </section>
    {/* visual end */}

    <main id="main">
      {/* scene02 start */}
      <ul className="sub_menu clear">
        <li><a className="on" href="#">HOT</a></li>
        <li><a href="#">ICED</a></li>
        <li><a href="#">BEAN</a></li>
      </ul>
    </main>
    {/* scene02 end */}

    <section id="scene03">
      {/* scene03 start */}
      <div className="inner_s clear">
        <h2 className="N_17">따뜻한 커피</h2>
        <p>풍미 깊은 맛을 따뜻하게 만나는 커피</p>
      </div>
    </section>
    {/* scene03 end */}

    <section id="scene04">
      {/* scene04 start */}
      <ul className="inner_s prodduct-card">
        {
          products.map(function(product, index) {
            return (
              <li>
                <Link to={'/product/'+index}>
                  <img src={product.imgUrl} alt="" />
                  <p className="title">{product.name}</p>
                  <p className="sub_text">
                    {product.description}
                  </p>
                  <p><span>{product.tag}</span></p>
                </Link>
              </li>
            )
          })
        }
        {/* <li>
          <a href="#">
            <img src="img/manu/menu_img18.jpg" alt="" />
            <p className="title">제주 말차 샷 라떼</p>
            <p className="sub_text">
              100% 제주 녹차 파우더로 쌉싸름한 맛과<br />에스프레소의 향이
              더해진 부드러운 라떼
            </p>
            <p><span>&#35; 녹차 &#35; 원두</span></p></a>
        </li> */}
      </ul>
    </section>
    {/* scene04 end */}

    <footer id="footer">
      <div className="inner clear">
        <div className="logo"><img src="img/main/foot_logo.jpg" alt="" /></div>
        <div className="foot_content">
          <aside className="foot_link clear">
            <a href="#">해피포인트</a>
            <a className="red" href="#">개인정보 처리방침</a>
            <a href="#">영상정보처리기기운영 &#46; 관리방침</a>
            <a href="#">이용약관</a>
            <a href="#">윤리신고센터</a>
            <a href="#">거래희망사전등록</a>
          </aside>
          <p>
            서울시 서초구 양재동 <span>11-149</span>번지
            <span>FAX.0505-076-0210</span> 고객상담센터
            <span>080-731-2027</span>
          </p>
          <adrress>COPYRIGHT 2019 THE CAFFEE PASCUCCI</adrress>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default MainPage;