import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom'

const Library = ({ user }) => {
    const [dataCart, setDataCart] = useState()
  const history = useHistory()

    const { Meta } = Card
    useEffect(() => {
        const inCart = localStorage.getItem(`carts${user?.uid}`)
        if (inCart) {
            setDataCart(JSON.parse(inCart))
        }
    }, []);
    return (
        <div>
            <div className='games'>
                <div className='content'>
                    {
                        dataCart?.length > 0 ? dataCart?.map((item) => {
                            return (
                                <Card
                                onClick={() => history.push(`/game/${item?.id}`)}
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
                                    ]}
                                >

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

                                </Card>
                            )
                        }) : 'Cart is empty'
                    }
                </div>
            </div>
        </div>
    );
};

export default Library;