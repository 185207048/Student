import React, { Component } from 'react';
import { Pagination, Button, Collapse, Tabs } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import Head from "../components/public/Courseheader"
import userHead from "../../assets/noface.gif"
import "./Coursedetail.css"
import API_PREFIX,{ postService, getService} from "../myFetch";
const { Panel } = Collapse;
const { TabPane } = Tabs;
class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      TagList:[],
      workList:[],
      homeList:[]
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

  componentDidMount(){
    this.getData();
    this.getWorkData();
    this.getHomeData();
  }
  getData=()=>{
    getService(API_PREFIX + `learn/Article?Cid`, data => {
      this.setState({TagList:data})
       });
  }
  getWorkData=()=>{
    getService(API_PREFIX + `learn/SectionFindCourse/1`, data => {
      this.setState({workList:data})
       });       
  }
  getHomeData=()=>{
    getService(API_PREFIX + `learn/WorkParams?Cid`, data => {
      this.setState({homeList:data})
       });       
  }
  render() {
    return (
      <div className="container">
        <Head />
        <div className="main">
          <div className="leftPan">
            <div className="articleDetail">
              <div className="title">这个王者明明超强却喜欢捡垃圾吃</div>
              <div className='info'>
                <div className="bread"><span>科技</span>&gt;<span>科学科普</span></div>
                <div >2020-06-01 21:05:57</div>
                <div >141.2万阅读</div>
                <div >7628点赞</div>
                <div >7628评论</div>
              </div>
              <div className="contentBox">
                文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此文章在此
              </div>


              <Tabs defaultActiveKey="1" >
                <TabPane tab="评论" key="1">
                  <div className="commonBox">
                    {/* <div className="title">2999 <span>评论</span></div> */}
                    <div className="commonHeader">
                      <div className="sort">
                        <div className="byHot active">按热度排序</div>
                        <div className="byTime">按时间排序</div>
                      </div>
                      <div className="pagination">
                        <Pagination size="small" total={500} showTotal={() => `共 ${this.state.total} 页`} itemRender={this.itemRender.bind(this)} />
                      </div>
                    </div>
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
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="问答" key="2">
                  <div className="commonBox">
                    {/* <div className="title">2999 <span>评论</span></div> */}
                    <div className="commonHeader">
                      <div className="sort">
                        <div className="byHot active">按热度排序</div>
                        <div className="byTime">按时间排序</div>
                      </div>
                      <div className="pagination">
                        <Pagination size="small" total={500} showTotal={() => `共 ${this.state.total} 页`} itemRender={this.itemRender.bind(this)} />
                      </div>
                    </div>
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
                      </div>
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
                    return(
                      <div className="articleList">
                    <div>{item.cName}</div>
                    <img src={item.cImage} />
                    </div>
                    )
                  })
                }
              </Panel>
              <Panel header="文章列表" key="2">
                {
                  this.state.TagList.length>0&&this.state.TagList.map((item,index)=>{
                    return(
                      <div className="articleList">
                    <div>{item.aname}</div>
                    <div>{item.acentont}</div>
                    </div>
                    )
                  })
                }
              </Panel>
              <Panel header="章节列表" key="3">
              {
                  this.state.workList.length>0&&this.state.workList.map((item,index)=>{
                    return(
                      <div className="articleList">
                    <div>{item.sname}</div>
                {/*     <div>{item.acentont}</div> */}
                    </div>
                    )
                  })
                }
              </Panel>

            </Collapse>
          </div>
        </div>
      </div >
    )
  }
}

export default Detail;
