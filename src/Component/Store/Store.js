import '../../Css/StoreCss.css'
import React from 'react';
import { Input } from 'antd';
import { useState, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Store = () => {
  const { TextArea } = Input;
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
      setData(result.slice(10, 30))
      console.log(result.slice(10, 30));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div class='search-bar'>
        <Input placeholder="Search" allowClear onChange={onChange} />
      </div>

      <div class='game'>
        <div class='card'>
          <div class='card-1'>
            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/340/thumbnail.jpg" />}
            >
              <Meta title="Game Of Thrones Winter Is Coming"/>
            </Card>

            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/347/thumbnail.jpg" />}
            >
              <Meta title="Elvenar"/>
            </Card>
          </div>

          <div class='card-1'>
            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/11/thumbnail.jpg" />}
            >
              <Meta title="Neverwinter"/>
            </Card>

            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/380/thumbnail.jpg" />}
            >
              <Meta title="Dark Orbit Reloaded"/>
            </Card>
          </div>
           
          <div class='card-1'>
            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/515/thumbnail.jpg" />}
            >
              <Meta title="Halo Infinite"/>
            </Card>

            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/455/thumbnail.jpg" />}
            >
              <Meta title="Eternal Fury"/>
            </Card>
          </div>

          <div class='card-1'>
            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/522/thumbnail.jpg" />}
            >
              <Meta title="Flyff Universe"/>
            </Card>

            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/511/thumbnail.jpg" />}
            >
             <Meta title="Phantasy Star Online 2 New Genesis"/>
            </Card>
          </div>

          <div class='card-1'>
          <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/5/thumbnail.jpg" />}
            >
              <Meta title="Crossout"/>
            </Card>

            <Card
              hoverable
              style={{
                width: 240,
                height: 350,
              }}
              cover={<img alt="example" src="https://www.freetogame.com/g/9/thumbnail.jpg" />}
            >
              <Meta title="World of Warships"/>
            </Card>
          </div>

          <div class='card-1'>

          </div>

          <div class='card-1'>

          </div>
        </div>

        <div class='games'>
          {
            data?.length > 0 ? data.map((item) => {
              return (
                <div class='content'>
                  {item.title}
                </div>
              )
            }) : ''
          }
        </div>
      </div>
    </div>
  );
};

export default Store;