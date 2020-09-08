import React from 'react'
import {Row,Col,Button} from 'antd'
import './components/style/common.less'
import Header from './components/header'


class Common extends React.Component{

    constructor(props) {
        super(props)

        console.log(this.props);
    }

    render() {
        return (
             <div className="container">
                 <Row className="container">
                     <Header />
                 </Row>
                 <Row>
                     {this.props.children}
                 </Row>
             </div>
        )
    }
}

export default Common
