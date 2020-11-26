import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import ProfileDesc from './ProfileDesc'


const contentStyle = {
  height: '450px',
  color: '#fff',
  textAlign: 'center',
  background: 'black',
  borderRadius: 10
};

export const SlideShow = ({currentData, onClick, history,like, nope, superLike, feature, moreFeatures}) => {
    const [dotPosition] = React.useState('top');

    const data = currentData
  
    const handleClick = () => {
        feature()
        history.push('/app/recs/profile')
        
    }   

  if(!moreFeatures){
    if(data && !like && !nope && !superLike){
      console.log(data)
    return (
        <div >
          <Carousel dotPosition={dotPosition} style = {{width: 300, margin: "0px 0px 0px 800px"}} >
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[0]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style ={{padding: "350px 00px 0px 10px", color: "white", textAlign: "left", display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}} > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                            <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[1]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style ={{padding: "350px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                        <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[2]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style ={{padding: "350px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                        <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            
           
          </Carousel>
        </div>
      );
    }
    else if(data && like){
        return(
            <div >
          <Carousel dotPosition={dotPosition} style = {{width: 300, margin: "0px 0px 0px 800px"}} >
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[0]})`, height: "450px", width: "300px", borderRadius: 10, paddingTop: 50}} >
                        <div style = {{height: 50, width: 80, border: "4px solid #00FF7F", color: "#00FF7F", marginLeft: 30, fontSize: 25, transform: "rotate(-30deg)"}} > LIKE  </div>
                        <div style ={{padding: "350px 00px 0px 10px", color: "white", textAlign: "left", display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}} > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                            <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[1]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style = {{height: 50, width: 80, border: "4px solid #00FF7F", color: "#00FF7F", marginLeft: 30, fontSize: 25, transform: "rotate(-30deg)"}} > LIKE  </div>
                        <div style ={{padding: "350px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                        <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[2]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style = {{height: 50, width: 80, border: "4px solid #00FF7F", color: "#00FF7F", marginLeft: 30, fontSize: 25, transform: "rotate(-30deg)"}} > LIKE  </div>
                        <div style ={{padding: "350px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                        <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            
           
          </Carousel>
        </div>
        )
    }
    else if(data && nope){
        return(
            <div >
          <Carousel dotPosition={dotPosition} style = {{width: 300, margin: "0px 0px 0px 800px"}} >
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[0]})`, height: "450px", width: "300px", borderRadius: 10, paddingTop: 50}} >
                        <div style = {{height: 50, width: 80, border: "4px solid red", color: "red", marginLeft: 200, fontSize: 25, transform: "rotate(30deg)"}} > NOPE  </div>
                        <div style ={{padding: "350px 00px 0px 10px", color: "white", textAlign: "left", display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}} > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                            <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[1]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style = {{height: 50, width: 80, border: "4px solid red", color: "red", marginLeft: 200, fontSize: 25, transform: "rotate(30deg)"}} > NOPE  </div>
                        <div style ={{padding: "350px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                        <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[2]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style = {{height: 50, width: 80, border: "4px solid red", color: "red", marginLeft: 200, fontSize: 25, transform: "rotate(30deg)"}} > NOPE  </div>
                        <div style ={{padding: "350px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                        <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            
           
          </Carousel>
        </div>
        )
    }
    else if(data && superLike){
        return(
            <div >
          <Carousel dotPosition={dotPosition} style = {{width: 300, margin: "0px 0px 0px 800px"}} >
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[0]})`, height: "450px", width: "300px", borderRadius: 10, paddingTop: 200}} >
                        <div style = {{height: 90, width: 100, border: "4px solid #00BFFF", color: "#00BFFF", marginLeft: 100, fontSize: 25}} > SUPER LIKE  </div>
                        <div style ={{padding: "350px 00px 0px 10px", color: "white", textAlign: "left", display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}} > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                            <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[1]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style = {{height: 90, width: 100, border: "4px solid #00BFFF", color: "#00BFFF", marginLeft: 100, fontSize: 25}} > SUPER LIKE  </div>
                        <div style ={{padding: "350px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                        <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}> 
                    <div style = {{backgroundImage: `url(${data.imgSrc[2]})`, height: "450px", width: "300px", borderRadius: 10}} >
                        <div style = {{height: 90, width: 100, border: "4px solid #00BFFF", color: "#00BFFF", marginLeft: 100, fontSize: 25}} > SUPER LIKE  </div>
                        <div style ={{padding: "350px 0px 0px 10px", color: "white", textAlign: "left",  display: "flex"}} >
                            <h2 style = {{color: "white", fontWeight: 700, paddingRight: 20}} > {data.first_name} {data.last_name} </h2>
                            <h2 style = {{color: "white", fontWeight: 400}}  > 32 </h2>
                        </div>
                        <div style = {{display: "flex"}} >
                        <h3 style = {{color: "white", fontWeight: 400, paddingRight: 160, paddingLeft: 10}} > {data.location} </h3>
                            <button style = {{color: "white",fontSize: 15, fontWeight: 800, paddingRight: 10, borderRadius: 70, width:30, height: 30, color: "black", cursor:"pointer", backgroundColor: "white", outline: "none"}} onClick = {handleClick} > i </button>
                        </div>
                    </div>
              </div>
            </div>
            
           
          </Carousel>
        </div>
        )
    }
  else {
        return (
            <div></div>
        )
    }
 
  } 
  else {
    return (
      <ProfileDesc />
    )
  }
} 


