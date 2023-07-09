import '../../Css/StoreCss.css'
import React from 'react';
import { Input } from 'antd';
import { useState, useEffect } from 'react';
import { Card, FloatButton } from 'antd';
import { useHistory } from 'react-router-dom'

const { Meta } = Card;

const Store = () => {

  const history = useHistory()

  const { Search } = Input;

  const onChange = (e) => {
    console.log(e);
  };

  const [data, setData] = useState()
  useEffect(() => {
    request()
  }, [])

  const request = async () => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ce2234ad95msh9d8c5043404fc84p1913a6jsn5df080088056',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.slice(0, 40))
      console.log(result.slice(0, 40));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '50px 0' }}>
        <Search
          placeholder="input search name game"
          onSearch={request}
          style={{
            width: 300,
          }}
        />
      </div>

      <div class='games'>
        <div class='content'>
          {
            data?.length > 0 ? data.map((item) => {
              return (
                <Card
                  hoverable
                  style={{
                    width: 320,
                    height: 390,
                    paddingBottom: 10,
                    marginBottom: 20
                  }}
                  cover={
                    <img alt={item?.thumbnail} src={item?.thumbnail} />
                  }
                  actions={[
                    <span style={{ fontWeight: '500', color: 'black' }}>Price: {(item?.id * 23).toLocaleString()}$</span>,
                  ]}
                >
                  <div onClick={() => history.push(`/game/${item?.id}`)}>
                    <Meta
                      title={item?.title}
                    />
                    <div className="card-description"
                      style={{
                        height: '70px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                      }}>
                      {item?.short_description}
                    </div>
                  </div>
                </Card>
              )
            }) : ''
          }
        </div>
      </div>
      <FloatButton.BackTop visibilityHeight={100} />
    </div>
  );
};

export default Store;