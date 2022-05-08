import {useParams} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState } from 'react';

function ProductPage() {

  const {id} = useParams();

  const [product, setProduct] = useState(null);

  useEffect(function() {
    axios.get(`https://018960e8-c59c-4deb-88a2-0569dcc6351f.mock.pstmn.io/products/${id}`)
    .then(function(result){
      setProduct(result.data)
      console.log(result);
    }).catch(function(error){
      console.error("에러 : ",error);
    });
  },[]);

  if (product === null) {
    return <h2>상품정보를 받고있습니다.</h2>
  }

  return (
  <div>
    <div id="image-box">
      <img className="" src={"/"+product.imgUrl} />
    </div>
    <div id="title-box">
      <p>{product.name}</p>
      <p className="sub_text">{product.description}</p>
      <p className="sub_price">{product.price}원</p>
      <p><span>{product.tag}</span></p>
    </div>
  </div>
  );
}

export default ProductPage;