import React from 'react';
import { Carousel, Button, Form, Input, message, Col, Row } from 'antd';
import { useState, useEffect } from 'react'
import '../../Css/DetailCss.css'

const Detail = ({ match }) => {

  const contentStyle = {
    height: '460px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    border: '10px solid'
  };

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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ padding: '10px' }}>
              <Button>ADD TO CART</Button>
            </div>
            <div style={{ padding: '10px' }}>
              <Button>RENT THIS GAME WITH 0,05$ FOR 1 HOUR</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  );
};

export default Detail;