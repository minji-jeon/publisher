import "./product.css"
import {useParams} from "react-router-dom"
import axios from "axios";
import { useEffect , useState } from "react";

function ProductPage() {
  let {id} = useParams();
  let [product, setProduct] = useState(null);
  useEffect(function() {
    axios.get(
      "https://75badeb7-18af-4b19-9798-6fdea4ac0ec8.mock.pstmn.io/products/"+id
    ).then(function(result) {
      setProduct(result.data);
      console.log(result);
    }).catch(function(error) {
      console.log("애러 발생 : " ,error);
    });
  },[]);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다......</h1>
  }
  return (
    <div className="product-se">
      <div id="image-box">
        <img src={product.imgUrl} />
      </div>
      <p className="title">{product.name}</p>
      <p className="sub_text">
        {product.description}
      </p>
      <p><span>{product.tag}</span></p>
      <p className="price">{product.price}</p>
    </div>
  )
}

export default ProductPage;