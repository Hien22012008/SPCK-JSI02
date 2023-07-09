import React from 'react';
import { Carousel } from 'antd';
import { useState, useEffect } from 'react'


const contentStyle = {
  height: '360px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const ContainerStyle = {
  width: '560px',
};

const Detail = ({ match }) => {

  const urlDetail = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${match?.match?.params?.id}`;

  const [data, setData] = useState()
  useEffect(() => {
    request()
  }, [])

  const request = async () => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ce2234ad95msh9d8c5043404fc84p1913a6jsn5df080088056',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(urlDetail, options);
      const result = await response.json();
      setData(result)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div style={ContainerStyle}>
        <Carousel autoplay>
          {
            data?.screenshots?.map((item) => {
              console.log("🚀 ~ file: Detail.js:52 ~ data?.screenshot?.map ~ data:", data)
              return (
                <div style={{ width: '100%' }}>
                  <img src= {item?.image} />
                </div>
              )
            })
          }
        </Carousel>
        {data?.short_description}
        
    </div>
  );
};

export default Detail;