import React,{useState,useEffect } from 'react'

import {Form,Select,Button,Table,Modal,Pagination, Input,Checkbox,Radio,DatePicker} from 'antd'
import moment from "../../pages/order";

const { Option } = Select
const BaseForm =(props)=> {

    //[] 代表只执行一次  [val] 代表监听变化执行， 不加[]代表一直执行
    useEffect(()=>{
        initVal();
    },[])

    console.log(props);

    const [form] = Form.useForm();

    const { RangePicker } = DatePicker;

    const [ formList,setFormList]= useState(props.formList);
    const [ formAarry,setFormAarry]= useState([]);
    const [ initvals,setInitvals]= useState({});

    const optionList = (data)=>{
        if(data && data.length>0) {
            const optionWrap = []
            data.map(i=>{
                optionWrap.push(<Option value={i.id} key={i.id}>{i.name}</Option>)
            })
            return optionWrap
        }
        return []
    }


    formList.map((item,index)=>{
            let {name,label,rules,placeholder,width,initialValue,list} = item;
            switch (item.type) {
                case 'INPUT':
                    const INPUT =
                        <Form.Item
                            name={name}
                            label={label}
                            width={width}
                            rules={rules}
                            initialValue=""
                        >
                            <Input placeholder={placeholder} />
                        </Form.Item>
                    formAarry.push(INPUT)
                    break;
                case 'SELECT':
                    const SELECT =
                        <Form.Item
                            name={name}
                            label={label}
                            width={width}
                            rules={rules}
                            initialValue=""
                        >
                            <Select placeholder={placeholder} style={{width:width}}>
                                {
                                    // console.log(list)
                                    optionList(list)
                                }
                            </Select>
                        </Form.Item>
                    formAarry.push(SELECT)
                    break;
                case 'DATE':
                    const DATE =  <Form.Item
                        name={name}
                        label={label}
                        width={width}
                    >
                        <RangePicker format={'YYYY-MM-DD'}
                                     defaultValue=""/>
                    </Form.Item>
                    formAarry.push(DATE)
                    break;
                default:
                    break;
            }
        })

    const initVal =()=> {
        formList.forEach((item,index)=> {
            initvals[item.name] = item.initialValue || ''
            return initvals
        })
        setInitvals(initvals)
        setFieldsValue(initvals)
    }
    // initVal()


    //提交
    const onFinish = values => {
        console.log('Success:', values);
        props.submitInfo(values) //将提交的值通过submitInfo()传给父组件
    };

    const { setFieldsValue,resetFields } = form;

    //重置
    const fill = ()=>{
        resetFields();
        for(let i in initvals) { //清空默认数据
            initvals[i] = '';
        }
        // setInitvals(initvals)
        setFieldsValue(initvals) //重置表单默认数据
    }

    return (
        <Form name="dynamic_rule"
              className="city-search-box"
              layout="inline"
              onFinish={onFinish}
              form={form}
              initialValues ={initvals}
        >
            {formAarry}

            <Form.Item >
                <Button type="primary" htmlType="submit" >查询</Button>
                <Button type="primary" onClick={fill}>重置</Button>
            </Form.Item>
        </Form>
    )


}

export default BaseForm
