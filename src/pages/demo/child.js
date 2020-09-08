import React from 'react'
import './child.less'
import { Button } from "antd";

export default class Child extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }

    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('did mount');
    }

    componentWillReceiveProps(newProps) { //接受父组件传的值
        console.log(newProps);
    }

    shouldComponentUpdate() { //是否更新
        console.log('should update');
        return true
    }

    componentWillUpdate() { //即将更新
        console.log('will update');
    }

    componentDidUpdate() { //更新完毕
        console.log('did update');
    }

    // {name: 1}
    // should update
    // should update
    // will update
    // did update
    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <p className="ff">这是子组件测试生命周期</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
