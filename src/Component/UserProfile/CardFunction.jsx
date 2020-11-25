import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import styled from "styled-components"

const Card=styled.div`
width:375px;
height468px;
box-shadow: 0 5px 0px 1px rgba(0,0,0,.09);
`


const PositionCarouselDemo = () => {
  const [dotPosition] = React.useState('top');

  
  return (
      <Card >
      <Carousel dotPosition={dotPosition}>
        <div>
          <img style={{width:"375px",height:"468px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}} alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNKgXW2THxibFMAyXyzJTzyq-cneT6kaKkg&usqp=CAU" />
        </div>
        <div>
          <img style={{width:"375px",height:"468px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}} alt="example" src="https://data.whicdn.com/images/326169996/original.png" />
        </div>
        <div>
         <img style={{width:"375px",height:"468px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}} alt="example" src="https://data.whicdn.com/images/344519498/original.jpg" />
        </div>
        <div>
         <img style={{width:"375px",height:"468px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}} alt="example" src="https://www.yourtango.com/sites/default/files/styles/body_image_default/public/2018/friends14.jpg" />
        </div>
        <div>
         <img style={{width:"375px",height:"468px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}} alt="example" src="https://www.yourtango.com/sites/default/files/styles/body_image_default/public/2018/friends2.jpg" />
        </div>
      </Carousel>
      </Card>
  );
};

export {PositionCarouselDemo}