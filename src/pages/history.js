import React, {
  Component
} from 'react';
import "./history.less";
import API_PREFIX,{ postService, getService} from "../myFetch";
export default class History extends Component {
  constructor() {
    super();
    this.state = {
      HistoryList:[]
    };
  }
  componentDidMount() {
   this.getHistory()
    }
getHistory=()=>{
   getService(API_PREFIX + `learn/History?uId=2`, data => {
        this.setState({HistoryList:data}) 
     });   
}
  render() {
   const {HistoryList}=this.state;
    return (
       <div>
      <img src={require('../assets/newsBanner.png')} className="newsBanner"/>
      <div className="history-wrap load">
        <div className="newlist_info">
          <div className="b-head clearfix">
            <div className="b-head-c">
                 <i className="b-icon b-icon-history"></i>
                 <span className="b-head-t">播放历史</span>
            </div>
            <div className="history-btn">
                 <a href="#" className="btn">暂停记录历史</a>
                 <a href="#" className="btn cleanhsbtn">清空历史</a>
            </div>
          </div>
        </div>

        <div style={{display: "none"}}>
          <div className="warn">
            <p className="txt">历史功能暂停中，就算看不可描述的视频也不会被记录下来了</p>
            <a href="#" className="btn">继续记录历史</a>
          </div>
        </div>

        <div className="list-contain" style={{position:"relative"}}>
            <div className="label-contain">
                <div className="time-label todaylabel active" style={{display:"none",position:"absolute",top:"inherit"}}> 今天 </div>
                <div className="time-label lastdaylabel active" style={{position:"absolute",top:"18px",bottom:"inherit"}}> 昨天 </div>
                <div className="time-label lastweeklabel" style={{display:"none"}}> 近1周 </div>
                <div className="time-label lastmonthlabel" style={{display:"none"}}> 1周前 </div>
                <div className="time-label lastthreemonthlabel" style={{display:"none"}}> 1个月前 </div>
            </div>

            <ul className="history-list" id="history_list">
              {
            HistoryList.length&&HistoryList.map((item,_index)=>{
              return item.courses.map((i,index)=>{
                return(
                  <li className="history-record lastdayitem">
                  <div className="l-info">
                      <div className="lastplay-time">
                          <i className="history-red-round"></i>
                          <span className="lastplay-t">23:49</span>
                      </div>
                  </div>
                  <div className="r-info clearfix">
                     <div className="cover-contain">
                        <p className="label" style={{display:"none"}}></p>
                        <a className="preview">
                            <div className="lazy-img">
                                <img alt="" src={i.cImage}/>
                            </div>
                        </ a>
                     </div>
               
                     <div className="r-txt">
               <a className="title">{i.cName}</ a>
                         <p className="subtitle">
                              <span></span>
                         </p>
                         <div className="w-info">
                            <div className="time-wrap">
                               <i className="device-i pc"></i>
                               <span className="pro-txt">看到&nbsp;&nbsp;01:15</span>
                            </div>
                            <span>
                               <a>
                                  <div className="lazy-img userpic">
                                      <img alt="" src={[require("../assets/images/phototwo.png")]}/>
                                  </div>
                                  <span className="username">新大便势力</span>
                               </ a>
                               <span className="name">日常</span>
                            </span>
                         </div>
                        {/*  <i className="history-delete"></i> */}
                     </div>
                  </div></li>
                )
              })
            }) 
          }               
           {/*  <li>
               <img src={[require("../assets/images/end.png")]} alt="" className="endpic"/>
            </li> */}
            </ul>
        </div>

        <div className="dlg-contain" style={{display:"none"}}>
           <div className="hsmask"></div>
           <div className="history-dlg">
                <p className="dlg-txt">清空之后就什么都没有了哦~</p>
                <div className="hsbtn clearfix">
                   <a href="#" className="sure">确定清空</a>
                   <a href="#" className="cancel">取消</a>
                </div>
           </div>
        </div>

      </div>
   </div> )
  }
}