import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.scss';
import {Product} from "./interfaces/product";

// const dummyList = [];

function App() {
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('http://localhost:5000/api/products');
      setList(data);
      console.log(data);
    };
    fetchData();

    // fetch('http://localhost:5000/api/products')
    //     .then(response => response.json())
    //     .then(data => {
    //       setList(data);
    //       console.log(data);
    //     });

  }, []);

  return (
    <div className="App">
      <h1>HI</h1>
        <ul>
        {list.map((item) => (<li key={item.id}>{item.name}</li>))}

        </ul>
    </div>
  );
}

export default App;
