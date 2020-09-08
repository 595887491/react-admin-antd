import React,{useState,useEffect} from 'react'
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import 'moment/locale/zh-cn';
import {Row,Col,Select,Button,Table,Modal,Pagination,Form, Input,Checkbox,Radio,DatePicker } from 'antd'
import './index.less'
import moment from 'moment';
import BaseForm from '../../components/baseForm/baseForm'


const { Option } = Select
 const City =()=> {
        const [ visible,setVisible ] = useState(false)
        const [ checkNick,setCheckNick ] = useState(false)

        const [form] = Form.useForm();

       useEffect(()=>{

       })


         const handleOk = e => {
             console.log(e);
             setVisible(false);
         };

         const handleCancel = e => {
             console.log(e);
             setVisible(false);
         };
         //去详情
         const goDetail=()=>{
             window.open(`localhost:3000/#/common/details/${14}`,'_blank')
         }


        const { RangePicker } = DatePicker;
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

        const onFinish1 = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };




        const formList = [
            {
                type:'INPUT',
                label:'姓名',
                name:'username',
                rules:[],
                initialValue:33,
                placeholder:'请输入项目',
                width:80,
                list: []
            },

            {
                type:'INPUT',
                label:'昵称',
                name:'nikename',
                rules:[],
                initialValue:'333',
                placeholder:'请输入昵称',
                width:80,
                list: []
            },
            {
                type:'DATE',
                label:'查询时间',
                name:'time',
                placeholder:'',
                initialValue:[moment('2015-01-01', 'YYYY-MM-DD'), moment('2015-04-01', 'YYYY-MM-DD')],
                width:250,
                list: []
            },
            {
                type:'SELECT',
                label:'模式',
                name:'model',
                rules:[],
                placeholder:'请选择模式',
                initialValue:2,
                width:120,
                list: [{id:1,name:'模式一'},{id:2,name:'模式二'},{id:3,name:'模式三'}]
            },
        ]


        //提交
         const onsubmit = (params)=>{
            console.log('params',params)
         }

        return(
            <div className="city">
                <BaseForm formList={formList}  submitInfo={onsubmit}/>

                <div className="city-table-box">
                    <Button type="primary" className="open-city-bot" onClick={()=>{setVisible(true)}}>开通城市</Button>

                    <Button type="primary" className="" onClick={goDetail}>去详情</Button>
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
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
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
export default City
