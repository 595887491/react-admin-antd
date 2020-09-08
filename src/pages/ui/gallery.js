import React from 'react'
import { Card,Row,Col,Modal } from 'antd'



export default class Gallery extends React.Component {

    state = {
        visible:false,
        currentImg:''
    }


    handle = (item)=>{
        console.log(item);

        this.setState({
            visible:true,
            currentImg:"/gallery/"+item
         })
    }


    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

        render() {

            const imgList = [
                ['1.png', '2.png', '3.png', '4.png', '5.png'],
                ['6.png', '7.png', '8.png', '9.png', '10.png'],
                ['11.png', '12.png', '13.png', '14.png', '15.png'],
                ['16.png', '17.png', '18.png', '19.png', '20.png'],
                ['21.png', '22.png', '23.png', '24.png', '25.png'],
            ]


            let imgUrl =
                imgList.map((item,index)=>
                    <Col md={
                        index !== imgList.length-1 ? 5:4
                    }>
                        {
                            item.map(i=>
                                <Card cover={<img src={"/gallery/"+i}/>} onClick={()=>this.handle(i)}>
                                    <Card.Meta
                                        title="Ract-admin"
                                        description="I love Imooc"
                                    />
                                </Card>
                            )
                        }
                     </Col>
                )



            return (
               <div>
                   <Row>
                       {imgUrl}
                   </Row>

                   <Modal
                       width={400}
                       heigth={500}
                       padding={0}
                       title="图片墙"
                       visible={this.state.visible}
                       onCancel={this.handleCancel}
                       footer={null}
                   >
                      <div style={{width:'100%'}}>
                          <img src={this.state.currentImg} alt="" style={{width:'100%'}}/>
                      </div>
                   </Modal>
               </div>
            );
        }
}
