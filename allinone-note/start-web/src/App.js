import './App.css';
import MainPageComponent from "./main/index.js"
import {Switch, Route, Link, useHistory} from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";


function App() {
  var history=useHistory();
  return (
    <div>
      <a href="#main" id="skip-nav">본문 바로가기</a>
      <header>
        <article className="top_header">
          <div className="inner">
            <h1 className="logo">
              <Link to="/">
                <img src="/img/main/header_logo.jpg" alt="파스쿠찌 로고"/>
              </Link>
            </h1>
            <div className="sns_list clear">
              <button className="new-button" type="button" onClick={function() {
                history.push("/upload")
              }}>
                상품 업로드
              </button>
            </div>
            <form className="H_Search">
              <label for="Search">통합검색</label>
              <div>
                <input type="search" id="Search" />
                <a href="#"><i className="fas fa-search"></i></a>
              </div>
            </form>
          </div>
        </article>
        <article className="gnb">
          <div className="inner">
            <button><i className="fas fa-bars"></i></button>
            <nav>
              <a href="sub01.html">CAFFE PASCUCCI</a>
              <a href="sub02.html">MENU</a>
              <a href="sub03.html">EVENT&amp;TALK</a>
              <a href="sub04.html">STORE</a>
              <a href="sub05.html">CUSTOMER</a>
              <a className="red" href="sub06.html">FRANCHISH</a>
            </nav>
          </div>
        </article>
      </header>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent/>
        </Route>
        <Route exact={true} path="/product/:id">
          <ProductPage></ProductPage>
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage></UploadPage>
        </Route>
      </Switch>
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
            <p>COPYRIGHT 2019 THE CAFFEE PASCUCCI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
