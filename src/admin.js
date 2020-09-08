import React from 'react'
import {Row,Col,Button} from 'antd'
import './components/style/common.less'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import NavLeft from './components/navLeft'

class Admin extends React.Component{

    constructor(props) {
        super(props)

        console.log(this.props);
    }

    render() {
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="20" className="main">
                    <Header />
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }
}

export default Admin
