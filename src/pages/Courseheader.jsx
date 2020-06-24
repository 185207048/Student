import React, { Component } from 'react';
import { Input } from 'antd';
import "./Courseheader.css"

const { Search } = Input;
class Head extends Component {
  render() {
    return (
      <div className="headBar">
        <div className="logo">北城飞鸟教育</div>
        <Search placeholder="input search text"
          onSearch={value => console.log(value)} className='searchBox' />
        <div className="personal">
          <img src="//static.hdslb.com/images/akari.jpg" alt="" className="avatar" />
          <span >收藏</span>
          <span  >历史</span>
        </div>
      </div>
    )
  }
}

export default Head;
