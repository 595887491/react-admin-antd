import React from 'react'
import {Card,Button} from 'antd'
import './ui.less'
import { DownloadOutlined ,SearchOutlined } from '@ant-design/icons';

export default class Buttons extends React.Component {

    render() {
        return (
            <div>
                <Card titile="卡片">
                    <Button type="primary">IMooc</Button>
                    <Button type="dashed">IMooc</Button>
                    <Button disabled>IMooc</Button>
                    <Button icon="plus">IMooc</Button>
                    <Button type="primary" shape="round" icon={<DownloadOutlined />}>
                        Download
                    </Button>
                    <Button shape="primary" icon={<SearchOutlined />}>IMooc</Button>
                </Card>
            </div>
        );
    }
}
