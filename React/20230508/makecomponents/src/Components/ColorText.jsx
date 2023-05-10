// function ColorText(props) {
//   return (
//     <div>
//       <h1 style={{color: props.color}}>색이 바뀌어요!</h1>
//     </div>
//   )
// }

/// 구조분해할당
export default function ColorText({color}) {
  return (
    <div>
      <h1 style={{color: color}}>색이 바뀌어요!</h1>
    </div>
  )
}

