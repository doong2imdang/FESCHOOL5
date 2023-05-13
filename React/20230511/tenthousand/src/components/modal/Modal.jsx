import React from 'react'
import './Modal.css'
import licat from '../../images/licat.png'

export default function Modal() {
  return (
    <article>
      <p>화이팅!!♥♥♥<br />
      당신의 꿈을 응원합니다!</p>
      <img src={licat} alt="라이캣" />
      <button type="button">종료하고 진짜 훈련하러 가기 GO!GO!</button>
      <p>(그냥 닫기 버튼입니다.)</p>
    </article>
  )
}
