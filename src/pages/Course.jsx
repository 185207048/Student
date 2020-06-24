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
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      TagList:[],
      workList:[],
      homeList:[],
      questionList:[],
      value:'',
      avalue:'',
      qvalue:'',
      visible:false,
      id:'',
      url:'',
      sname:'',
      c_id:0,
      cou:'',
    }
  }

  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>上一页</a>;
    }
    if (type === 'next') {
      return <a>下一页</a>;
    }
    return originalElement;
  }
  componentWillMount(){
    console.log("jinru")
    // let cou = this.props.location.
    this.getVideo(this.props.location.state);
    this.setState({
      c_id:this.props.location.state
    })

  }

  componentDidMount(){
    // console.log(this.props.location.state)
    // console.log(this.props.location)
    this.getData();
    this.getWorkData();
    this.getHomeData();
    console.log(this)
    this.getHistory(this.props.location.state)
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  getWorkData=()=>{
    getService(API_PREFIX + `learn/SectionFindCourse/${this.state.c_id}`, data => {
      this.setState({workList:data})
       });       
  }
  getHomeData=()=>{
    getService(API_PREFIX + `learn/WorkParams?Cid`, data => {
      this.setState({homeList:data})
       });       
  }
  getData=()=>{
    getService(API_PREFIX + `learn/Article?CId=${this.state.c_id}`, data => {
      this.setState({TagList:data})
       });       
  }
  gettextCont=(e)=>{
     this.setState({value:e.target.value})
  }
  getansCont=(e)=>{
    this.setState({avalue:e.target.value})
 }
 getqueCont=(e)=>{
  this.setState({qvalue:e.target.value})
}
  // 提问
  getquestion=()=>{
    getService(API_PREFIX + `learn/question?CId=1&QContent=${this.state.qvalue}&Qtype=0&UId=1`,data => {
      if(data="true"){
        message.success("提问成功")
      }
      });
  }
  // 评论
  getdiscuss=()=>{
    getService(API_PREFIX + `learn/question?CId=1&QContent=${this.state.value}&Qtype=1&UId=1`,data => {
      if(data="true"){
        message.success("评论成功")
      }
      });
  }
  // 回答
  getanswer=()=>{
    getService(API_PREFIX + `learn/answer?QId=1&AContent=${this.state.avalue}&UId=1`,data => {
      if(data="true"){
        message.success("回答成功")
      }
      });
  }
  clickAns=()=>{
    this.setState({visible:true})
  }
  handleOk = () => {
    this.getanswer();
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  getHistory=(id)=>{
    // console.log(id)
    axios.post(`http://www.lszjx.com:8081/learn/History?cId=${id}`).then(res=>{
      // console.log(res)
    })
  };
  getVideo=(id)=>{
    console.log("xxx:"+id)
    // <iframe src="//player.bilibili.com/player.html?aid=456098516&bvid=BV1R5411W7Re&cid=202944971&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    axios.get(`http://www.lszjx.com:8081/learn/SectionFindCourse/${id}`).then(res=>{
      console.log("res:")
      console.log(res)
      let url = res.data[0].sip
      let sname = res.data[0].sname
      this.setState({url,sname})
    })
  }
  render() {
    const {value,qvalue,avalue} =this.state;
    return (
      <div className="container">
        <Head />
        <div className="main">
          <div className="leftPan">
            <div className="videoDetail">
              <div className="title">{this.state.sname}</div>
              <div className="cate">
                <div className="bread"><span>科技</span>&gt;<span>科学科普</span></div>
                <div className="time">2020-06-01 21:05:57</div>
                <div className="rank">最高全站日排行22名</div>
              </div>
              <div className="extInfo">
                <div className="playedNum">141.2万播放</div>
                <div className="popNum">7628弹幕</div>
                <div className="note"><StopOutlined />未经作者授权，禁止转载</div>
              </div>
              <div className="videoBox">
                
                <video src={this.state.url} controls></video>
                <svg width="64" height="64" viewBox="0 0 64 64"
                  fill="#fff" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M52.352 13.5c4.837 0 8.707 4.32 8.647 9.72v21.06C61 49.62 57.128 54 52.29 54h-2.479c0 1.681-1.452 3-3.206 3S43.4 55.62 43.4 54H20.841c0 1.681-1.452 3-3.204 3-1.756 0-3.206-1.38-3.206-3h-2.722C6.87 54 3 49.68 3 44.28V23.22c0-5.4 3.87-9.72 8.709-9.72h11.25l-4.78-4.44c-.725-.661-.725-1.8 0-2.52.424-.36.908-.54 1.391-.54.546 0 1.029.18 1.392.54l7.5 6.96h7.318l7.5-6.96c.422-.36.907-.54 1.39-.54.544 0 1.029.18 1.392.54.725.659.725 1.8 0 2.52l-4.78 4.44h11.07zM26.527 45.54l17.418-10.08c1.45-.901 1.45-2.221 0-3.122L26.527 22.2c-1.452-.84-2.662-.12-2.662 1.56v20.22c0 1.74 1.21 2.4 2.662 1.561z" id="pid-1-svgo-b"></path><path d="M26.527 45.541c-1.452.84-2.662.18-2.662-1.56V23.76c0-1.68 1.21-2.4 2.662-1.56L43.945 32.34c1.45.9 1.45 2.22 0 3.121L26.527 45.541z" fill="#000" opacity=".06"></path>
                </svg>
              </div>
              <Tabs defaultActiveKey="1" >
                <TabPane tab="评论" key="1">
                  <div className="commonBox">

                    <div className="commonSend">
                      <div className="userHead">
                        <img src={userHead} alt="" />
                      </div>
                      <div className="inputArea">
                        <div className="baffle">请先<a href="">登录</a>后发表评论 (・ω・)</div>
                      </div>
                      <div className="btnBox" >
                        <Button type="primary" disabled>发表评论</Button>
                      </div>
                    </div>
                    <div className="commentList">
                      <div className="commonItem">
                        <div className="userHead">
                          <img src={userHead} alt="" />
                        </div>
                        <div className="content">
                          <div className="userName">横行無忌</div>
                          <div className="cont">我希望有更多的具有专业知识的朋友能像龙女一样为大家普及知识，而不是一味地让b站充斥着各种蹭热度，刷流量的低质量视频。也能让更多孩子在娱乐的同时学到一些知识。</div>
                          <div className='info'>
                            <span className="time">
                              2020-06-02 01:11
                        </span>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="discussCont">
                    <TextArea rows={4} onChange={this.gettextCont}  value={value}/>
                    <Button type="primary" onClick={this.getdiscuss} style={{float:'right',marginTop:'15px'}}>发表评论</Button>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="问答" key="2">
                  <div className="commonBox">
                    <div className="commonSend">
                      <div className="userHead">
                        <img src={userHead} alt="" />
                      </div>
                      <div className="inputArea">
                        <div className="baffle">请先<a href="">登录</a>后发表评论 (・ω・)</div>
                      </div>
                      <div className="btnBox" >
                        <Button type="primary" >发表评论</Button>
                        {/* <Input type="text"></Input> */}
                      </div>
                    </div>
                    <div className="commentList">
                      <div className="commonItem">
                        <div className="userHead">
                          <img src={userHead} alt="" />
                        </div>
                        <div className="content">
                          <div className="userName">横行無忌</div>
                          <div className="cont">我希望有更多的具有专业知识的朋友能像龙女一样为大家普及知识，而不是一味地让b站充斥着各种蹭热度，刷流量的低质量视频。也能让更多孩子在娱乐的同时学到一些知识。</div>
                          <div className='info' style={{display:'flex',justifyContent: 'space-between'}}>
                            <span className="time">
                              2020-06-02 01:11
                        </span>
                        <Button type="primary" onClick={this.clickAns} style={{float:'right',marginTop:'15px'}}>回答</Button>
                       
                          </div>
                          <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
 <TextArea rows={4} onChange={this.getansCont}  value={avalue}/>
        </Modal>
                        </div>
                      </div>
                    </div>
                    <div className="discussCont">
                    <TextArea rows={4} onChange={this.getqueCont}  value={qvalue}/>
                    <Button type="primary" onClick={this.getquestion} style={{float:'right',marginTop:'15px'}}>我要提问</Button>
  
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="rightPan">
            <div className="head">
              <div className="headImg">
                <img src={userHead} alt="" />
              </div>
              <div className="userInfo">
                <div className="userName">龙女之声</div>
                <div className="desc .mult-ell">大家能在快乐中学知识 我就满足了</div>
                <Button type="primary" className="attBtn">+ 关注 73.6万</Button>
              </div>
            </div>
            <Collapse >
              <Panel header="作业列表" key="1">
              {
                  this.state.homeList.length>0&&this.state.homeList.map((item,index)=>{
                    console.log(item)
                    return(
                    <Link to={
                      {
                        pathname:"/Homework",
                        state:item.cId
                      }
                    }>
                      <div className="articleList">
                        <div>{item.cName}</div>
                      </div>
                      </Link>
                    )
                  })
                }
              </Panel>
              <Panel header="文章列表" key="2">
              {
                  this.state.TagList.length>0&&this.state.TagList.map((item,index)=>{
                    console.log(item)
                    return(
                      <Link to={
                        {
                          pathname:'/Page',
                          state:{acotnet:item.acentont,title:item.aname}
                        }
                      }>
                        <div className="articleList">
                          <div>{item.aname}</div>
                      </div>
                    </Link>
                    )
                  })
                }
              </Panel>
              <Panel header="章节列表" key="3">
              {
                  this.state.workList.length>0&&this.state.workList.map((item,index)=>{
                    console.log(item.sid)
                    return(
                      <Link to={
                        {
                          pathname:"/Course",
                          state:item.sid
                        }
                      }>
                        <div className="articleList">
                          <div>{item.sname}</div>
                {/*     <div>{item.acentont}</div> */}
                        </div>
                      </Link>
                    )
                  })
                }
              </Panel>

            </Collapse>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
