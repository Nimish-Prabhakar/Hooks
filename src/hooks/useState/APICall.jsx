import { useState } from 'react';
import axios from 'axios';

const APICall = () => {
  const [data, setData] = useState({});

  const clickHandler = (e) => {
    const fetchData = new Promise((resolve, reject) => {
      resolve(axios.get('https://jsonplaceholder.typicode.com/posts'));
      reject('API Failing');
    });

    fetchData
      .then((res) => {
        setData(res.data[Math.floor(Math.random() * 100)]);
      })
      .catch((err) => console.log('failed to call API :', err));
  };

  return (
    <>
      <button onClick={clickHandler}>GET</button>
      {data ? <p>{data.title}</p> : ''}
    </>
  );
};

export default APICall;
