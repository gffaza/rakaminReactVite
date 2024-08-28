// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Menubar from './components/Menubar.jsx';
import axios from "axios";

export default function App() {
  const[news, setNews] = useState([]);
  console.log('news: ', news);
  useEffect(() => {
    getNews();

  },[]);

  const getNews = async () => {
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e9449cfd584949c4aea3ca00b1a2fbaf');
      setNews( response.data.articles);
    } catch(error){
      console.error(error);
    }
  }



  return (
    <>

      <div className='bg-gray-100 min-h-screen'>
        <Navbar />
        <Menubar/>
          <div className='pt-5 pb-28'>
              <div className='bg-white p-4 rounded-lg mx-28'>
                {news.map((item, index) => (
                  <a key={index} href={item?.url} target='_blank'>
                  <div key={index} className="flex space-x-4 p-4 border-b border-gray-300">
                    <img src={item?.urlToImage} alt={item?.title} className="w-24 h-24 object-center rounder" />
                    <div>
                      <h2 className='font-semibold text-lg'>{item?.title}</h2>
                      <p className='text-md text-gray-600'>{item?.description}</p>
                    </div>
                  </div>
                  </a>
                ))}
              </div>
          </div>
      </div>
    </>
  )
}


