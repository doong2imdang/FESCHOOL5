import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <main>
      <form className="main-cont">
        <p className="txt-tobe">나는 <input className="inp-tobe" type="text" required /> 전문가가 될 것이다.</p> 
        <p className="txt-training">그래서 앞으로 매일 하루에 <input class="inp-training" type="number" required /> 시간씩 훈련할 것이다.</p>
        <button className="btn-trainingHour" type="submit">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
      </form>
      <section>
        <p className="txt-expert">당신은 <strong>프로그래밍</strong> 전문가가 되기 위해서 <br />
        대략 <strong>1000</strong> 일 이상 훈련하셔야 합니다! :&#41;</p>
        <button className="btn-go" type="button">훈련하러 가기 GO!GO!</button>
        <button className="btn-share" type="button">공유하기</button>
      </section>
    </main>
  )
}
