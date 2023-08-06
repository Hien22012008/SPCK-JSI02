import '../../Css/StoreCss.css'
import React from 'react';
import { Input, Button } from 'antd';
import { useState, useEffect } from 'react';
import { Card, FloatButton, Pagination, TreeSelect } from 'antd';
import { useHistory } from 'react-router-dom'

const { Meta } = Card;

const Store = ({ user, openNotificationWithIcon, addToCart }) => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const history = useHistory()
  const [data, setData] = useState()
  const [valueSearch, setValueSearch] = useState();

  

  const { Search } = Input;
  const treeData = [
    {
      value: "shooter",
      title: "Shooter",
    },
    {
      value: "mmoarpg",
      title: "MMOARPG",
    },
    {
      value: "arpg",
      title: "Action Role-Playing Game",
    },
    {
      value: "strategy",
      title: "Strategy",
    },
    {
      value: "fighting",
      title: "Fighting",
    },
    {
      value: "racing",
      title: "Racing",
    },
    {
      value: "sports",
      title: "Sports",
    },
    {
      value: "cardgame",
      title: "Card Game",
    },
    {
      value: "moba",
      title: "MOBA",
    },
    {
      value: "fantasy",
      title: "Fantasy",
    },
  ];


  useEffect(() => {
    request()
  }, [valueSearch])

  const request = async (value) => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games${valueSearch ? '?category=' + valueSearch : ''}`;
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
      value ? setData(result.filter((item) => item?.title?.toLowerCase().includes(value.toLowerCase()))) : setData(result)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  const handlePageChange = (page, pageSize) => {
    const newOffset = (page - 1) * pageSize;
    setOffset(newOffset);
    setLimit(pageSize);
  };
  const onChange = (newValue) => {
    setValueSearch(newValue);
  };
  return (
    <div style={{ paddingBottom: 50 }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '50px 0', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <span style={{ color: 'white' }}>Search</span>
          <Search
            placeholder="input search name game"
            onSearch={request}
            style={{
              width: 300,
              marginLeft: 10
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: 'white' }}>Game genre</span>
          <TreeSelect
            showSearch
            treeIcon={true}
            style={{
              width: 300,
              marginLeft: 10
            }}
            value={valueSearch}
            dropdownStyle={{
              maxHeight: 400,
              overflow: 'auto',
            }}
            placeholder="Please select category game"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
            treeData={treeData}
          />
        </div>
      </div>

      <div className='games'>
        <div className='content'>
          {
            data?.length > 0 ? data.slice(offset, offset + limit).map((item, index) => {
              return (
                <Card
                  key={index}
                  hoverable
                  style={{
                    width: 320,
                    height: 390,
                    paddingBottom: 10,
                    marginBottom: 20,
                    marginRight: 20
                  }}
                  cover={
                    <img alt={item?.thumbnail} src={item?.thumbnail} />
                  }
                  actions={[
                    <span style={{ fontWeight: '500', color: 'black' }}>Price: {(item?.id * 23).toLocaleString()}$</span>,
                    <Button className='btn' onClick={() => addToCart(item)}>ADD TO CART</Button>
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
            }) : 'No data'
          }
        </div>
      </div>

      <FloatButton.BackTop visibilityHeight={100} />
      
      <div>
        {
          data?.length > 0 && (
            <Pagination
              current={Math.floor(offset / limit) + 1}
              pageSize={limit}
              total={data.length}
              onChange={handlePageChange}
              className='pagination'
            />
          )
        }
      </div>
    </div>
  );
};

export default Store;