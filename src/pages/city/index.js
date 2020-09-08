import React from 'react'
import {Row,Col,Select,Button,Table,Modal,Pagination,Form, Input } from 'antd'
import './index.less'

const { Option } = Select
export default class City extends React.Component{

    state={
        citydefaultValue:'jack',
        ycdefaultValue:'jack',
        yydefaultValue:'模式1',
        sqdefaultValue:'模式1',
        visible:false
    }


    handleChange=(type,value)=>{
        this.setState({
            [type]:value
        })
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'id',
                render: text => <a>{text}</a>,
            },
            {
                title: '城市名称',
                className: 'cityName',
                dataIndex: 'cityName',
                align: 'center',
            },
            {
                title: '用车模式',
                dataIndex: 'mode',
            },
            {
                title: '营运模式',
                dataIndex: 'yy',
            },
            {
                title: '授权加盟商',
                dataIndex: 'jm',
            },
            {
                title: '城市管理员',
                dataIndex: 'cityAdmin',
            },
            {
                title: '城市开通时间',
                dataIndex: 'openTime',
            },
            {
                title: '操作时间',
                dataIndex: 'operatorTime',
            },
            {
                title: '操作人',
                dataIndex: 'operator',
            },

        ];

        const data = [
            {
                id: '1',
                cityName: '广州',
                mode: '停车点',
                yy: '加盟',
                jm: '松果自营',
                cityAdmin: '马洋',
                openTime: '2004-4-1',
                operatorTime: '2004-4-1',
                operator: '邓英',
            },
            {
                id: '1',
                cityName: '广州',
                mode: '停车点',
                yy: '加盟',
                jm: '松果自营',
                cityAdmin: '马洋，问问，热热热翁',
                openTime: '2004-4-1',
                operatorTime: '2004-4-1',
                operator: '邓英',
            },
            {
                id: '1',
                cityName: '广州',
                mode: '停车点',
                yy: '加盟',
                jm: '松果自营',
                cityAdmin: '马洋',
                openTime: '2004-4-1',
                operatorTime: '2004-4-1',
                operator: '邓英',
            },
        ];



        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };


        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };


        return(
            <div className="city">
                <Row className="city-search-box">
                    <Col>
                        城市：
                        <Select defaultValue={this.state.citydefaultValue} style={{ width: 120 }} onChange={this.handleChange.bind(null,'citydefaultValue')}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                    <Col>
                        用车模式：
                        <Select defaultValue={this.state.ycdefaultValue} style={{ width: 120 }} onChange={this.handleChange.bind(null,'ycdefaultValue')}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                    <Col>
                        运营模式：
                        <Select defaultValue={this.state.yydefaultValue} style={{ width: 120 }} onChange={this.handleChange.bind(null,'yydefaultValue')}>
                            <Option value="1">模式1</Option>
                            <Option value="2">模式2</Option>
                            <Option value="3">模式3</Option>
                        </Select>
                    </Col>
                    <Col>
                        加盟商授权状态：
                        <Select defaultValue={this.state.sqdefaultValue} style={{ width: 120 }} onChange={this.handleChange.bind(null,'sqdefaultValue')}>
                            <Option value="1">模式1</Option>
                            <Option value="2">模式2</Option>
                            <Option value="3">模式3</Option>
                        </Select>
                    </Col>

                    <Col>
                        <Button type="primary">查询</Button>
                        <Button>重置</Button>
                    </Col>
                </Row>

                <div className="city-table-box">
                    <Button type="primary" className="open-city-bot" onClick={()=>this.setState({visible:true})}>开通城市</Button>

                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        scroll={{y:120}}
                        sticky
                        pagination={false}
                        summary={(currentData)=>console.log(currentData) }
                    />,
                </div>

                <Pagination
                    size="small"
                    total={50}
                    disabled
                    showSizeChanger
                    showQuickJumper />

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

            </div>
        );
    }
}
