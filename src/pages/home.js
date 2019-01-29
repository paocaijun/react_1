import React, { Component } from 'react';
import img1 from '@/layouts/2.jpg';
class Home extends Component {
    render() {
        return (
            <div>
                home页面
                <img src="../layouts/2.jpg" />
                <img src={img1} />
                <audio controls="controls">您的浏览器不支持 audio 标签。</audio>
            </div>
        );
    }
}
export default Home;
