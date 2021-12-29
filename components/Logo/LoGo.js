import React from 'react'

export const LoGo = () => {
    const styles= { body:"0222", width:"82px",
    height: "130px",
    position: "absolute",
    top: "50",
    left: "50",
   transform :" translate(-50% , -50) rotate(-45deg)}} "}

   const styless ={width: "30px",position:"absolute",
    height: "80px",
    background: "#F2994A",
    borderradius: "10px 0 0"}

    const styles1 ={
        width: "100px",
        height: "30px",
        background: "#F2994A",
        borderradius: "10px 0 5px"
    }
    
    const styles2 ={
        width: "100px",
        height: "30px",
        background: "#2d9cdb",
        borderradius: "0 0 10px",
        bottom: "0px",
        right: "0px"
    }
    const styles3= {
        width: "30px",
    height: "80px",
    background: "#2d9cdb",
    borderradius: "5 0 10px",
    bottom: "0",
    right: "0"
    }
    return (
        <div style ={styles}>
           <span style={styless}></span>
            <span style={styles1}></span>
            <span style={styles2}></span>
            <span style={styles3}></span>
    
            
        </div>
    )
}
  