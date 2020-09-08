import React from 'react'
import {Card,Button,Spin,Alert} from  'antd'
import {
    LoadingOutlined
} from '@ant-design/icons';

export default class Loadings extends React.Component{

    render() {
        const icon = <LoadingOutlined style={{fontSize:'50px'}}/>
        return (
            <div>
                <Card title="Spin用法">
                    <Spin size="small"/>
                    <Spin/>
                    <Spin size="large"/>
                    <Spin indicator={icon}/>
                </Card>

                <Card>
                    <Spin tip="加载中。。。">
                    <Alert
                        message="React"
                        description="欢迎来到React高级实战课程"
                        type="info"
                    />
                    </Spin>
                </Card>
            </div>
        )
    }
}
