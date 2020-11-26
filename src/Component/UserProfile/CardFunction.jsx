import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import styled from "styled-components"
import { DataContext } from "../../DataContextProvider/DataContextProvider"

const Card=styled.div`
width:375px;
height468px;
box-shadow: 0 5px 0px 1px rgba(0,0,0,.09);
`


const PositionCarouselDemo = () => {
  const [dotPosition] = React.useState('top');
  
  
  return (
    <DataContext.Consumer>
     {({presentUser})=>(<Card >
      <Carousel dotPosition={dotPosition}>
        <div>
          <img style={{width:"375px",height:"468px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}} alt="example" src={presentUser.imgSrc} />
        </div>
      </Carousel>
      </Card>)}
      </DataContext.Consumer>
  );
};

export {PositionCarouselDemo}