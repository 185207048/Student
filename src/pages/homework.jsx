import React, { Fragment } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Show from './homeworkput'

const icons = {
    icon1: require('../imgs/c_1.png'),
    icon2: require('../imgs/c_2.png')
}

export default class Course extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isShow: false
        }
    }
    componentDidMount() {
        console.log(this.props.location.state)
        let cid = this.props.location.state
        axios.get(`http://www.lszjx.com:8081/learn/WorkParams?CId=${cid}`)
            .then(response => {
                console.log(response.data);
                this.setState({ data: response.data })
            })
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
        let th = {
            borderTop: ' 1px solid #d9d9d9',
            borderBottom: ' 1px solid #d9d9d9',
            padding: '10px 0'
        }
        let right = {
            flex: '0 0 70%'
        }
        let table = {
            width: '100%',
            textAlign: 'center',
            color: '#4c4c4c'
        }
        let list
        if (this.state.data.length > 0) {
            list = this.state.data.map((ele, index) =>
                <Fragment key={index}>
                    <tr>
                        <td>{ele.cName}</td>
                        <td><img style={{ width: '50px', }} src={ele.cImage} alt="" /></td>
                        <td>
                            <img onClick={() => {
                                this.setState((prev) => {
                                    return {
                                        id: ele.cId,
                                        isShow: !prev.isShow
                                    }
                                })
                            }} src={icons.icon1} alt="" />
                        </td>
                        <td>{ele.cState}</td>
                    </tr>
                </Fragment>
            )
        } else {
            list = []
        }
        if(this.state.isShow){
            return <Show cId={this.state.id}></Show>
        }else {
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
                                <a style={menu} href="">课程作业</a>
                            </div>
                            <div style={right}>
                                <table style={table}>
                                    <thead>
                                        <tr>
                                            <th style={th} >标题</th>
                                            <th style={th} >发布人</th>
                                            <th style={th} >提交作业</th>
                                            <th style={th} >查看结果</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                </Fragment>
            )
        }
    }
}