import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
import {} from '../../redux/action'
import { connect } from 'react-redux'

class Header extends React.Component{
    componentWillMount() {
        this.setState({
            userName:'河畔一角'
        })

        setInterval(()=>{
            let setTime = Util.formatDate(new Date().getTime())
            this.setState({
                setTime
            })
        })
    }

    getWeatherAPIData() {
        axios.jsonp({
            url:'http://www.baidu.com'
        }).then(()=>{
            console.log('天气')
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        {this.props.menuName}
                    </Col>
                    <Col span="20" className="weather">
                        <span className="data">{this.state.setTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state=>{ //更新redux里面的menuName
    return {
        menuName:state.menuName
    }
}

export default connect(mapStateToProps)(Header)
