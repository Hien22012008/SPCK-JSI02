import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const Library = ({ user }) => {
    const [dataCart, setDataCart] = useState()
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
                        }) : 'No data'
                    }
                </div>
            </div>
        </div>
    );
};

export default Library;