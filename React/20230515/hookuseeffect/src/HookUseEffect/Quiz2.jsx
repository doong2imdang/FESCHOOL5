import React, { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      setToday(today);
      setHour(today.getHours());
      setMin(today.getMinutes());
      setSec(today.getSeconds());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [today]);

  // useEffect를 쓰지 않아도 할 수 있는 방법이 있다. but, 문제가 생길수 있다. setTimeout이 쌓이게때문에..
  // setTimeout(() => {
  //   setToday(new Date());
  //   setHour(today.getHours());
  //   setMin(today.getMinutes());
  //   setSec(today.getSeconds());
  // }, 1000);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;