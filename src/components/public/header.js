import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { message, Modal, Input, Select } from 'antd';
import API_PREFIX, { postService, getService } from "../../myFetch";
import './publicStyle.less';
import './header.less'
const { Search } = Input;
const { Option } = Select;
class Header extends Component {
	constructor() {
		super();
		this.state = {
			current: 1,
			Visible: false,
			TagList: []
		};
	}
	componentDidMount() { }

	getSearch = (value) => {
		getService(API_PREFIX + `learn/Course/searchCourse/${value}`, data => {
			this.setState({ TagList: data,Visible:true })
		});
	}

	render() {
		const fuli = require('../../assets/images/fuli.png');
		const download = require('../../assets/images/download.png')
		const huiyuan = require('../../assets/images/huiyuan.png')
		const shipin = require('../../assets/images/shipin.png')

		const { current, Visible, TagList } = this.state;
		const selectBefore = (
			<div>
				<Select defaultValue="课程" className="select-before" >
					<Option value="课程">课程</Option>
					<Option value="学习">学习</Option>
				</Select>
			</div>
		);
		return (
			<div>
				<Modal
					title='搜索内容'
					visible={Visible}
					afterClose={() => this.setState({ Visible: false })}
					footer={null}
					destroyOnClose={true}
					onCancel={() => this.setState({ Visible: false })}
					width={600}
				>
					{TagList.length && TagList.map((item, index) => {
						return (<div>
							<p>{index+1}、课程名称:{item.cname}</p>
						</div>)
					})}

				</Modal>
				<div className="top">
					<div className="logo">
						<div className="title">
							<h1>飞鱼教育</h1>
							<h5>专注线上IT教育</h5>
						</div>
						<Link className="login" onClick={() => { this.setState({ current: 2 }) }} className={current === 2 ? 'active' : ''} to="/Login">登录</Link>
						<Link className="register" onClick={() => { this.setState({ current: 2 }) }} className={current === 2 ? 'active' : ''} to="/Register">注册</Link>
						<div className="InputTop">
							<Search
								addonBefore={selectBefore}
								placeholder="行家专业亲授"
								enterButton="搜索"
								size="large"
								onSearch={(value) => {
									this.getSearch(value);
								}}
							/>
						</div>
						{/*  <div className="ButtonGroup">
							<div className="myStudy">
                 <Link to="/"> 我的学习</Link>
              </div>
					</div> */}
					</div>
				</div>
				<div className="marginDis">
					<div className="left">	<Link onClick={() => { this.setState({ current: 1 }) }} to="/Home" className={current === 1 ? 'active' : ''}>首页</Link>
						<Link onClick={() => { this.setState({ current: 2 }) }} className={current === 2 ? 'active' : ''} to="/History">历史记录页</Link></div>
				</div>
				<iframe src="http://www.mbshwj.cn/jqueryChat/index.html" className="contact" ></iframe>
			</div>
		);
	}
}
export default Header;
