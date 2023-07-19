import '../../Css/HomeCss.css'
import React from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';
import { FacebookOutlined, YoutubeOutlined, TwitterOutlined } from '@ant-design/icons';

const Spiderman1 = "https://cdn.neowin.com/news/images/uploaded/2022/08/1660227400_marvels-spider-man-keyart-01-en-10jun22.jpg";
const Spiderman2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1817190/ss_971beba92204ad268878b23aa5288cc4f2118788.1920x1080.jpg?t=1672784176";
const TLOU = "https://cdn.wallpapersafari.com/33/29/eywhRb.jpg";
const RE4 = "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/10/21143516/RE4-2.jpg";
const DS = "https://s.yimg.com/uu/api/res/1.2/1krKB7Fmm5zERVPu4WqWvg--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/918e3fd0-9d1b-11ed-bbfb-3c1d442192f8.cf.jpg";

const contentStyle = {
    margin: 0,
    height: '900px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Imgstyle = {
    padding: '10px'
};

const Home = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle} className='slide'><img src={Spiderman1} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle} className='slide'><img src={Spiderman2} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle} className='slide'><img src={TLOU} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle} className='slide'><img src={RE4} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle} className='slide'><img src={DS} /></h3>
                </div>
            </Carousel>
            <div className='game-played-the-most'>
                <h1>Played the most</h1>

                <Image
                    style={Imgstyle}
                    height={406}
                    width={300}
                    src="https://cdn.cdkeys.com/500x706/media/catalog/product/5/d/5de6658946177c5f23698932_19_.jpg"
                />

                <Image
                    style={Imgstyle}
                    height={406}
                    width={300}
                    src="https://cdn.cdkeys.com/500x706/media/catalog/product/s/g/sgvsvsfv.jpg"
                />

                <Image
                    style={Imgstyle}
                    height={406}
                    width={300}
                    src="https://cdn.cdkeys.com/500x706/media/catalog/product/f/a/fadad.jpg"
                />

                <Image
                    style={Imgstyle}
                    height={406}
                    width={300}
                    src="https://cdn.cdkeys.com/500x706/media/catalog/product/e/g/egs_wildhearts_koeitecmogamescoltd_s2_1200x1600-398fdb8dbc918051f99347ebe0335973_3_.jpg"
                />

            </div>
            <div className='Update'>
                <h1>Update</h1>

                <Image
                    style={Imgstyle}
                    height={406}
                    width={300}
                    src="https://cdn.cdkeys.com/500x706/media/catalog/product/c/a/call-of-duty-modern-warfare-pc-cd-keys-discount_1.jpg"
                />

                <Image
                    style={Imgstyle}
                    height={406}
                    width={300}
                    src="https://cdn.cdkeys.com/500x706/media/catalog/product/o/u/outlast-2.jpg"
                />
                <Image
                    style={Imgstyle}
                    height={406}
                    width={300}
                    src="https://cdn.cdkeys.com/500x706/media/catalog/product/u/n/uno_pc_cover.jpg"

                />

                <Image
                    style={Imgstyle}
                    height={406}
                    width={300}
                    src="https://cdn.cdkeys.com/500x706/media/catalog/product/z/h/zhtghzj_1_1_1.jpg"

                />

            </div>
            <div class='footer'>
                <div class='icon'>
                    <icon style={{ width: '100%', color: 'white', padding: '10px', mode: "horizontal" }}>
                        <FacebookOutlined />
                    </icon>

                    <icon style={{ width: '100%', color: 'white', padding: '10px', mode: "horizontal" }}>
                        <YoutubeOutlined />
                    </icon>

                    <icon style={{ width: '100%', color: 'white', padding: '10px', mode: "horizontal" }}>
                        <TwitterOutlined />
                    </icon>
                </div>
                <div style={{ width: '500px' }}>
                    <h1>This is a website to rent and buy games for cheaper than Steam</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;