import React, { Fragment } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            val: '',
            title: ''
        }
    }
    componentDidMount() {
        // console.log(this.props)
        let {cId} = this.props
        axios.get(`http://www.lszjx.com:8081/learn/WorkParams?CId=${cId}}`)
            .then(response => {
                if (response.data) {
                    // console.log(response.data)
                    this.setState({ users: response.data })
                    this.setState({ title: response.data[0].cName })
                }
            })
    }
    handleChange(e) {
        this.setState({
            val: e.target.value
        })
    }
    submit() {
        let {cId} = this.props
        // axios.post(`http://www.lszjx.com:8081/learn/Work?CId=${this.props.match.params.cid}&WContect=${this.state.val}&WName=${this.state.users[0].works[0].wname}`)
        axios.post(`http://www.lszjx.com:8081/learn/Work?CId=${cId}&WContect=${this.state.val}`)
            .then(data => {
                console.log(data)
                alert('提交成功！')
                window.location.replace('/')
            })
        // 提交作业
        // console.log(this.state.val)
        // console.log(this.state.users)
    }
    render() {
        let header = {
            height: '60px',
            lineHeight: '60px',
            background: '#360002',
            color: '#fff',
            textAlign: 'right'
        }
        let cr1 = {
            color: '#f90'
        }
        let con = {
            width: '1200px',
            margin: '0 auto'
        }
        let banner = {
            color: '#000',
            height: '353px',
            lineHeight: '353px',
            fontSize: '4em',
            textAlign: 'center',
            background: '#fff',
            textShadow: '2px 2px 1px #333',
            border: '1px solid #333'
        }
        let content = {
            background: '#eff1e3',
            textAlign: 'right'
        }
        let course = {
            display: 'flex',
            justifyContent: 'space-between',
            padding: ' 40px 40px 0 40px',
            background: '#fff'
        }
        let left = {
            textAlign: 'left',
            flex: '0 0 20%'
        }
        let menu = {
            display: 'block',
            padding: '10px',
            fontWeight: 'bold',
            color: '#000',
            fontSize: '20px',
            background: '#f3f3f3',
            textDecoration: 'none'
        }
        let borderLeft = {
            padding:'10px 30px',
            borderTop: '1px solid #ccc',
            borderRight: '1px solid #ccc',
            borderCollapse: 'collapse'
        }
        let borderRight = {
            padding:'10px 30px',
            borderTop: '1px solid #ccc',
            borderCollapse: 'collapse'
        }
        let table = {
            width: '100%',
            color: '#4c4c4c',
            textAlign: 'left',
        }
        let show = {
            textAlign: 'left',
            paddingBottom: '40px',
            flex: '0 0 70%'
        }
        let td = {
            padding: ' 20px 10px 20px 30px'
        }
        return (
            <Fragment>
                <div style={header}>
                    <div style={con}>
                        李硕 <a style={cr1} href="">进入</a> | <span id="close">退出</span>
                    </div>
                </div>
                <div style={banner}>课程名</div>
                <div style={content}>
                    <div style={con}>
                        <div style={course}>
                            <div style={left}>
                                <span style={menu} >
                                    课程作业
                                </span>
                            </div>
                            <div style={show}>
                                <h3>&gt;&gt; 查看作业任务</h3>
                                <table style={table}>
                                    <tbody>
                                        <tr>
                                            <td style={borderLeft}>标题</td>
                                            <td style={borderRight}>{this.state.title}</td>
                                        </tr>
                                        <tr>
                                            <td style={borderLeft}>发布时间</td>
                                            <td style={borderRight}>2020年5月23日</td>
                                        </tr>
                                        <tr>
                                            <td style={borderLeft}>截止时间</td>
                                            <td style={borderRight}>2020年5月31日</td>
                                        </tr>
                                        <tr>
                                            <td style={borderLeft}>评分方式:</td>
                                            <td style={borderRight}>打分制:10.0分</td>
                                        </tr>
                                        <tr>
                                            <td style={borderRight}>提交课上完成的流即可</td>
                                            <td style={{ padding: '0', borderColor: 'transparent' }}>
                                                <textarea id='work' value={this.state.val} onChange={this.handleChange.bind(this)} style={{ width: '100%', height: '100px' }} type="text" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={borderRight}>
                                    <button onClick={this.submit.bind(this)}>提交作业</button>
                                    <Link to='/'>
                                        <button>返回</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}