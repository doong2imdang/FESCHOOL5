let book = {
  책이름: "JavaScript",
  책가격: 1000,
  저자: "홍길동",
  출판일: "2023.04.12"
}

let newBook = {}

// form에서 입력 받았습니다. 
newBook['책이름'] = "JavaScript"
newBook['책가격'] = 100000
newBook['저자'] = "홍길동"
newBook['출판일'] = "2023.04.12"

newBook // {책이름: 'JavaScript', 책가격: 100000, 저자: '홍길동', 출판일: '2023.04.12'}

function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
}

let newBook2 = Book("JavaScript", 100000, "홍길동", "2023.04.12") // undefined why? return값이 없어서!
newBook2

let newBook3 = new Book("JavaScript", 100000, "홍길동", "2023.04.12")
newBook3  // {책이름: 'JavaScript', 책가격: 100000, 저자: '홍길동', 출판일: '2023.04.12'}


///////////////

// new 키워드를 사용했을 떄 일어나는 일 - 주석부분을 대신? 담당한다.
function Book(책이름, 책가격, 저자, 출판일) {
  // this = {}
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
  // return this
}




// this 출력
let newBook4 = new Book("JavaSCript", 100000, "홍길동", "2023.04.12")

// new 키워드를 사용했을 때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일) {
    this.출력 = function (){
        console.log(this)
    }
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일    
    // return this
}