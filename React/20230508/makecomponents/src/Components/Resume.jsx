import React, { useState }  from "react";

function Resume(props) {
  const [like, setLike] = useState("");
  // let like = 0;
  const [txt, settxt] = useState('hello');
  function clickLike() {
      // setLike(like + 1);
      if(like === "") {
        setLike("Like");
      } else {
        setLike("");
      }
      console.log(like);
  }
  return (
    <div style={{border: "solid 1px", width : "500px"}}>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미 : </dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색 : </dt>
        <dd>{props.color}</dd>
      </dl>
      <button onClick={clickLike}>like</button> <span>{like}</span>
    </div>
  )
}

/// 구조분해할당
// function Resume({hello, name, hobby, food, color}) {
//   return (
//     <div style={{border: "solid 1px", width : "500px"}}>
//       <h2>{name} 자기소개서</h2>
//       <strong>{hello}</strong>
//       <dl>
//         <dt>취미 : </dt>
//         <dd>{hobby}</dd>
//         <dt>좋아하는 음식 : </dt>
//         <dd>{food}</dd>
//         <dt>좋아하는 색 : </dt>
//         <dd><span>{props.color}</span></dd>
//       </dl>
//     </div>
//   )
// }

export default Resume;