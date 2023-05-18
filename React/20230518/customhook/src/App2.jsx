import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import useScrollBottom from './hooks/useScrollBottom';


function App() {
  // const images = [{"id":"0","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5000/3333"},{"id":"1","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/LNRyGwIJr5c","download_url":"https://picsum.photos/id/1/5000/3333"},{"id":"2","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/N7XodRrbzS0","download_url":"https://picsum.photos/id/2/5000/3333"},{"id":"3","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/Dl6jeyfihLk","download_url":"https://picsum.photos/id/3/5000/3333"},{"id":"4","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/y83Je1OC6Wc","download_url":"https://picsum.photos/id/4/5000/3333"}];

  const [imageList, setImageList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  console.log('로딩중인가?', isLoading );


  const isBottom = useScrollBottom();

  useEffect(() => {
    fetchImages();
  }, [fetchPage]);

  useEffect(() => {
    if(isBottom) {
      setFetchPage((prevPage) => {
        return prevPage + 1
      })
    }
  }, [isBottom]);

  async function fetchImages() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`);
      if(!response.ok) {
        throw new Error('네트워크에 문제가 있습니다.');
      }
      const data = await response.json();
      setImageList((prevImages) => {      
        return [...prevImages, ...data]
      });
      setIsLoading(false);
      console.log(data);

    } catch (error) {
      console.log("데이터를 가져오는데 문제가 생겼습니다." + error);
      setIsLoading(true);
    }
  }

  return (
    <div>
      hello world
      {/* <ImageList imageList={images} /> */}
      <ImageList imageList={imageList} />
      {isLoading && <Loading />}
    </div>
  );
}
export default App;