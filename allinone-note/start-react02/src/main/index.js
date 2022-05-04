import React from "react";
import "./css/common.css";
import "./css/reset.css";
import "./css/sub02.css";
import axios from "axios";
import {Link} from 'react-router-dom'

function MainPage() {
  const [products, setProducts]= React.useState([]); /* 상품이기때문에 빈배열을 기본값으로 넣음 */


  React.useEffect(function() {
    axios.get("https://018960e8-c59c-4deb-88a2-0569dcc6351f.mock.pstmn.io/products")
    .then(function(result){
      const products = result.data.products;
      setProducts(products);
    }).catch(function(error){
      console.error("에러 : ",error);
    });
  },[])
    
    


  return (
    <div>
      <header>
        <div className="top_header">
          <div className="inner">
            <h1 className="logo">
              <a href="index.html">
                <img src="" alt="로고"/>
              </a>
            </h1>
          </div>
        </div>
      </header>
      <main id="main">
        <section id="visual">
          <div className="inner">
            <div className="visual_text">
              <p className="R_49">menu</p>
              <p className="N_20">이탈리아 에스프레소 커피전문점</p>
            </div>
          </div>
        </section>
        <section id="scene04">
          <div className="inner_s">
            <p>판매상품</p>
            <div className="product-list">
              {
                products.map(function(product, index) {
                  return (
                  <div className="product-card">
                    <Link className="product-link" to={`/products/${index}`} >
                      <img className="product-img" src={product.imgUrl} alt="" />
                      <p className="title">{product.name}</p>
                      <p className="sub_text">{product.description}</p>
                      <p className="sub_price">{product.price}</p>
                      <p><span>{product.tag}</span></p>
                    </Link>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;