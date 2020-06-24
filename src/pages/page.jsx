import React, { Component } from 'react';
import { Input, Pagination, Button, Collapse, Tabs,Modal,message } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import Head from "../components/public/Courseheader"
import userHead from "../assets/noface.gif"
import videoSource from "../assets/test.mp4"
import axios from 'axios'
// import {Input} from 'antd'
import "./Course.css"

import API_PREFIX,{ postService, getService} from "../myFetch";
import Axios from 'axios';
import { Link } from 'react-router-dom';
const { TextArea,Search } = Input;
const { Panel } = Collapse;
const { TabPane } = Tabs;
class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      acotnet:'',
      title:''
    }
  }
  componentDidMount(){
    console.log(this.props.location.state)
    let {acotnet} = this.props.location.state
    let {title} = this.props.location.state
    this.setState({acotnet,title})
    console.log(this.state)
  }
  render() {
    const {value,qvalue,avalue} =this.state;
    return (
      <div className="container">
        <Head />
        <div>
            {this.state.title}
          </div>
          <div>
            {this.state.acotnet}
        </div>
      </div>
    )
  }
}

export default Page;
