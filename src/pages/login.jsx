import React, { Fragment } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {Button,Layout,Card,Input} from 'antd'
import './login.less'
const {Header,Footer,Sider,Content } = Layout;
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           userid:0,
           username:'',
           password:''
        }
    }
    handleUsername=(e)=>{
        // console.log(this.state)
        let username = e.target.value
        this.setState({username})
    }
    handlePassword=(e)=>{
        // console.log(this.state)
        let password = e.target.value
        this.setState({password})
    }
    submit=()=>{
        // console.log(this.state)
        axios.get('http://www.lszjx.com:8081/learn/User/17611490596')
        .then(res=>{
            // console.log(res)
            if(res.data.uname === '李硕'){
                alert("登陆成功")
                // window.localStorage.setItem('user',{userid:res.data.userid})
                this.props.history.push("/Home")
                // console.log( this.props)
            }else{
                alert("登陆失败")
                // console.log("yyy")
            }
        })
    }
    render() {
        return (
            <Layout >
                <Header></Header>
                <Content>
                    <div className="main">
                        <div className="card_m">
                        <Card title="登陆" extra={<a href="#">More</a>} >
                            <Input size="large" placeholder="帐号" onChange={this.handleUsername}/>
                            <br/>
                            <br/>
                            <Input size="large" type="password" placeholder="密码" onChange={this.handlePassword}/>
                            <br/>
                            <br/>
                            <Button onClick={this.submit}>submit</Button>
                        </Card>
                        </div>
                    </div>
                </Content>
                <Footer></Footer>
            </Layout>
            //   <div>denglu </div>
        )
    }
}
