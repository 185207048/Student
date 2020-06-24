import React, { Component } from 'react';
import { Carousel,message } from 'antd';
import API_PREFIX,{ postService, getService} from "../myFetch";
import {Link} from 'react-router-dom'
import "./home.less";
export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			TagList:[],
			hotList:[]
		};
	}

	componentDidMount() {
		// 得到tag标签
		this.getTag();
		// 得到最热
		this.getHot();
	}

    getTag=()=>{
		getService(API_PREFIX + `learn/CourseByTag`, data => {
		     this.setState({TagList:data})
        });
	}

	getHot=()=>{
		getService(API_PREFIX + `learn/Hot`, data => {
			this.setState({hotList:data})
	   });
	}
	getHistory=(id)=>{
		console.log(id)
	}

	render() {
		const {TagList,hotList}=this.state;
		return (
			<div className="test">
				<div class="viewList">
					<div className="carousel">
						<Carousel autoplay>
							<div>
								<img src={require('../assets/1.jpg')} />
							</div>
							<div>
								<img src={require('../assets/2.jpg')} />
							</div>						
						</Carousel>
					</div>
					<div className="videoList">
						<ul>
							{
							hotList.length&&hotList.map((item,index)=>{
							return(
								<li>
									<Link to={
										{
											pathname:`/Course`,
											state:item.c_id
										}
									}>
										<img src={item.c_image} />
										<span>{item.c_name}</span>
									</Link>
								</li>
)
							})	
							}
							
							
							<div className="clearfix"></div>
						</ul>
					</div>
				</div>


				<div className="load">
					<p className="title">
						系统化学习路径<span>网易云课堂六大课程体系，让学习有章有序</span>
					</p>
					<div className="boxContent">
						<div className="box boxone">
							<p>职场通用技能</p>
							<p>课程体系</p>
						</div>
						<div className="box boxtwo">
							<p>编程与开发</p>
							<p>课程体系</p>
						</div>
						<div className="box boxthree">
							<p>AI与数据科学</p>
							<p>课程体系</p>
						</div>
						<div className="box boxfour">
							<p>产品与运营</p>
							<p>课程体系</p>
						</div>
						<div className="box boxfive">
							<p>设计创意</p>
							<p>课程体系</p>
						</div>
						<div className="box boxsix">
							<p>电商运营</p>
							<p>课程体系</p>
						</div>
					</div>
				</div>

				<div className="project">
					<div className="guide">
						<span>课堂预约</span>
						<span>
							<a>更多</a>
						</span>
					</div>
					<div className="list">
						<ul>
							{TagList.length&&TagList.map((item,index)=>{
                               return  (<li>
								<div className="videotitle">{item.tName}</div>
								<div className="videoLeft">
								{
									item.courses.map((i,index)=>{
										console.log(i)
										return (			
										<Link to={
											{
												pathname:"/Course",
												state:i.cId
											}
										}>
											<div className="videoimg"><img src={i.cImage}/></div>										
										</Link>
										)
									})
								}
								<div className="clearfix"></div>
								</div>
							</li>	)

							})}
											
							<div className="clearfix"></div>
						</ul>
					</div>
				</div>

			</div>
		);
	}
}
