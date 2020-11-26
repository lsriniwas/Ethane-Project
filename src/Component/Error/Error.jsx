import React, { Component } from 'react'

export class Error extends Component {
    render() {
        return (
            <div>
                <div
          style={{
            background: "linear-gradient(262deg, #ff7854, #fd267d)",
            height: "100vh",
            width: "100vw",
            display: "grid",
            placeItems:"center",
             
          }}
        > 

        <div style={{marginLeft:"200px"}}>
            <svg
            width="300px"
            height="300px"
            viewBox="0 0 519 123"
          >
            <g fill="none" fill-rule="evenodd">
              <title>Tinder</title>
              <path
              
                d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z"
                fill="#fff"
              ></path>
             
            </g>
          </svg> 
          <span style={{fontSize:"60px",color:"white",fontFamily:"bold"}}>404:Page Not Found</span>
        </div>
        </div>
            </div>
        )
    }
}
