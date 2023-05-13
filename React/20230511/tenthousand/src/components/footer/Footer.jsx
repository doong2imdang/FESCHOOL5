import React from 'react'
import './Footer.css'
import weniv from '../../images/weniv.png'

export default function Footer() {
  return (
    <footer>
      <img src={weniv} alt="위니브" />
      <p>&#8251; 본 서비스 내 이미지 몇 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다. <br />
      수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
    </footer>
  )
}
