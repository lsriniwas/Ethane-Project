import React from 'react';
import '../Modals/node_modules/antd/dist/antd.css';
import { Carousel } from '../Modals/node_modules/antd';

const contentStyle = {
  height: '400px',
  color: '#fff',
  textAlign: 'center',
  background: 'black',
};

export const SlideShow = ({currentData}) => {
  const [dotPosition] = React.useState('top');

  const data = currentData
  
  if(data){
    return (
        <div >
          <Carousel dotPosition={dotPosition} style = {{width: 300, margin: "0px 0px 0px 800px"}} >
            <div>
              <div style={contentStyle}> 
                <div style = {{backgroundImage: `url(${data.src[0]})`, height: "400px", width: "300px"}} >
                    <div>
                        <p> {data.first_name} {data.last_name} </p>
                        <p> Lives in {data.location} </p>
                    </div>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> <div style = {{backgroundImage: `url(${data.src[1]})`, height: "400px", width: "300px"}} ></div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> <div style = {{backgroundImage: `url(${data.src[2]})`, height: "400px", width: "300px"}} ></div>
              </div>
            </div>
           
          </Carousel>
        </div>
      );
  }
  else {
        return (
            <div></div>
        )
    }
 
};

