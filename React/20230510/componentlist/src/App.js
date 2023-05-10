// import MyList from "./components/MyList";
import { useState } from "react";
import Counter from "./components/Counter";
// import Detail from "./components/Detail";
// import Question from "./components/Question";
// import Review from "./components/Review";

// const ContentsContainer = ({ listName }) => {
//   if (listName === "detail") {
//     return <Detail />;
//   } else if(listName === "qa") {
//     return <Question />
//   } else if(listName === "review") {
//     return <Review />
//   }
// };

// function NavBar() {
//   const [listName, setListName] = useState("detail");
//   const checkId = (e) => {
//     setListName(e.target.id);
//   };

//   return (
//     <>
//       <nav>
//         <ul>
//           <Li id="detail" style={listName === "detail" ? {color:"red"} : {color: "black"}}
//           onClick={checkId}
//         >
//           상세정보
//           </Li>
//           <li id="qa" onClick={checkId} style={listName === "qa" ? {color: "red"} : {color: "black"}}
//           >
//             QA
//           </li>
//           <li id="review" onClick={checkId} style={listName === "review" ? {color:"red"} : {color:"black"}}
//           >
//             Review
//           </li>
//         </ul>
//       </nav>
//       <ContentsContainer listName={listName} />
//     </>
//   )
// }

// export default NavBar;

function Hello(props) {
	const name = props.name;
  if(name){
    return <One name={name}/>
  } else {
    return <Two/>
  }
}

function One(props){
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

function Two(props){
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}

// function NoName(){
//   return(
//       <div>
//           <h1>이름을 입력하지 않았습니다.</h1>
//       </div>
//   )
// }


function App() {
  const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  // React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리합니다. 
  function handleClick(id) {
    // setDatas(datas.filter((item) => {
    //     return id !== item.id
    //   })
    // );

    // 이전버전의 버추얼 돔과 지금버전의 버추얼 돔을 비교해서 제대로 동작하게 해줌
    // 함수형 업데이트라고 표현합니다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장합니다. 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(버추얼 돔)을 비교하여 처리할 수 있습니다. 
    setDatas((prevDatas) => {
      return prevDatas.filter((item) => {
        return id !== item.id
      })
    });
  }

  return (
    <div> 
      <Hello name="gary"/>
      <Counter />
      {datas.map((item, index) => {
        return (
        <li key={item.id}>
          <h2>{index + 1} {item.title}</h2>
          <span>{item.price} 원 </span>

          {/* <button onClick={(event) => { event.target.closest('li').remove() }}>삭제</button> */}
          <button onClick={ () => {handleClick(item.id)} }>삭제</button>
        </li>
        )
      })}
    </div>
  );
}
export default App;
