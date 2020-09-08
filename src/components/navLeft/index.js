import React from 'react'
import MenuList from '../../config/menuConfig'
import { Menu } from 'antd';
import  MenuConfig from '../../config/menuConfig'
import './index.less'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import  { switchMenu } from '../../redux/action'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;




class NavLeft extends React.Component{
    state={
        currentKey:''
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        let currentKey = window.location.hash.replace(/^#|\?.*$/g,'')
        this.setState({
            currentKey,
            menuTreeNode
        })
    }

    //菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }


     handleClick = ({item})=> {
        const { dispatch } = this.props //获取派发事件方法
         dispatch(switchMenu(item.props.title)) //执行redux action 里面的 方法
        this.setState({
            currentKey:item.props.eventKey
        })
         
         console.log('click', item.props.eventKey);
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark" onClick={this.handleClick} mode="vertical" selectedKeys={this.state.currentKey}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft) //redux管理这个组件
