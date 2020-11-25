import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Link, Redirect } from 'react-router-dom';

const contentStyle = {
  height: '400px',
  color: '#fff',
  textAlign: 'center',
  background: 'black',
  borderRadius: 10
};

export const SlideShow = ({currentData, onClick, history}) => {
    const [dotPosition] = React.useState('top');

    const data = currentData
  
    const handleClick = () => {
        history.push('/app/recs/profile')
    }   

  if(data){
      console.log(data)
    return (
        <div >
          <Carousel dotPosition={dotPosition} style = {{width: 300, margin: "0px 0px 0px 800px"}} >
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[0]})`, height: "400px", width: "300px", borderRadius: 10}} >
                        <div style ={{padding: "320px 00px 0px 10px", color: "white", textAlign: "left", display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}} > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                            <h3 style = {{color: "white", fontWeight: 400, paddingRight: 190}} > {data.location} </h3>
                            <button style = {{color: "white", fontWeight: 400}} onClick = {handleClick} >AA</button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[1]})`, height: "400px", width: "300px", borderRadius: 10}} >
                        <div style ={{padding: "320px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                            <h3 style = {{color: "white", fontWeight: 400, paddingRight: 190}} > {data.location} </h3>
                            <button style = {{color: "white", fontWeight: 400}} onClick = {onClick} >AA</button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[2]})`, height: "400px", width: "300px", borderRadius: 10}} >
                        <div style ={{padding: "320px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                            <h3 style = {{color: "white", fontWeight: 400, paddingRight: 190}} > {data.location} </h3>
                            <button style = {{color: "white", fontWeight: 400}} onClick = {onClick} >AA</button>
                        </div>
                    </div>
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

