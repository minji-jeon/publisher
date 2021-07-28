import './index.css';
import React, { useState } from 'react';

function UploadPage() {

    const [inputs, setInputs] = useState({
      "name" : null,
      "description" : null,
      "tag" : null,
      "imgUrl" : null, 
      "price" : null
    });
    const onChangeImg = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        "imgUrl": value // name 키를 가진 값을 value 로 설정
      });
    };
    const onChangeName = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        "name": value // name 키를 가진 값을 value 로 설정
      });
    };
    const onChangeDesc = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        "description": value // name 키를 가진 값을 value 로 설정
      });
    };
    const onChangeTag = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        "tag": value // name 키를 가진 값을 value 로 설정
      });
    };
  
    const onChangePrice = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        "price": value // name 키를 가진 값을 value 로 설정
      });
    };
  
  return (
    <div className="upload">
      <form name="상품 업로드" >
        <div name="upload">
          {/* <div id="upload-img">
            <img  src="/img/main/foot_logo.jpg"/>
            <span>이미지를 업로드 해주세요.</span>
          </div> */}
          {/* <label name="img-url">이미지
            <input type="file" accept="image/png, image/jpeg">
          </label> */}
          <label  name="img-url">이미지
            <input type="file" className="img-input" accept="image/png, image/jpeg" onChange={onChangeImg}/>
          </label>
        </div>
        <hr/>
        <div>
          <label name="name">음료 이름을
            <input className="name-input" placeholder="이름을 입력하세요." onChange={onChangeName} />
          </label>
        </div>
        <hr/>
        <div>
          <label name="description">음료 설명
            <textarea className="description-input" onChange={onChangeDesc} ></textarea>
          </label>
        </div>
        <hr/>
        <div>
          <label name="tag">태그
            <input className="tag-input" placeholder="태그를 입력하세요."  onChange={onChangeTag}/>
          </label>
        </div>
        <hr/>
        <div>
          <label name="price">가격
            <input className="price-input" placeholder="가격을 입력하세요."  onChange={onChangePrice}/>
          </label>
        </div>
        <input type="submit" onClick={function(e) {
          e.preventDefault();
          console.log(inputs);
        }}등록하기/>
      </form>
    </div>
  )
}

export default UploadPage;