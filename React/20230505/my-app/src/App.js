import './App.css';
import Menu from './components/menu/Menu'
import NewMenu from './components/newMenu/NewMenu'
import TripList from './components/tripList/TripList'


function App() {

  const name = "라이캣!!!!";
  const 변수 = 'value';
  function 함수() {
    console.log('함수 함수!');
  }
  const 값 = true;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      {`${[1, 2, 3]}`}
      {100 + 1}
      {'hello' + 'world'}
      {[1, 2, 3].map(x => x**2)}
      {함수()}
      {변수}
      {값?'one':'two'}

      <h1 style={{color:'red'}}>년 : {year}</h1>
      <h1>월/일 : {month}/{date}</h1>
      <h1>시간 : {hour}시 {min}분 {sec}초</h1>

      <NewMenu />
      <Menu />
      <h1 hello="hi" >안녕 {name}!!</h1>
      <h1 style={{}}>안녕 라이캣 2호!!</h1>

      <TripList />

    </div>
  );
}

export default App;
