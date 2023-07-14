import React from 'react';
import { Carousel, Button, Form, Input, message, Col, Row } from 'antd';
import { useState, useEffect } from 'react'
import '../../Css/DetailCss.css'

const Detail = ({ match }) => {

<<<<<<< HEAD
  const contentStyle = {
    height: '460px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    border: '10px solid'
  };

=======
>>>>>>> dabf6df53e86864407f61bf8624598f202754a65
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
<<<<<<< HEAD
    <div style={{ padding: '30px 30px' }}>
      <Row>
        <Col span={12} style={{ padding: '0 50px' }} >
          <Carousel autoplay>
            {
              data?.screenshots?.map((item) => {
                return (
                  <div style={contentStyle}>
                    <img style={{ width: '100%' }} src={item?.image} />
                  </div>
                )
              })
            }
          </Carousel>
        </Col>
        <Col span={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
          {data?.description}
          <div style={{padding: '20px'}}>
            <Button>ADD TO CART</Button>
            <Button>RENT THIS GAME WITH 0,05$ FOR 1 HOUR</Button>
          </div>
        </Col>
      </Row>
=======
    <div>
      <div class='slide'>
        <Carousel autoplay>
          {
            data?.screenshots?.map((item, index) => {
              console.log("🚀 ~ file: Detail.js:52 ~ data?.screenshot?.map ~ data:", data)
              return (
                <div key={index}>
                  <img src={item?.image} />
                </div>
              )
            })
          }
        </Carousel>
      </div>
      {data?.description}

>>>>>>> dabf6df53e86864407f61bf8624598f202754a65
    </div>

  );
};

export default Detail;