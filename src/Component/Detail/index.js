import React from 'react'
import styled from 'styled-components'

let Containers_1 = styled.div`
  display:flex;
  flex-direction:column;
  align-content:center;
  justify-content:space-around;
  flex-wrap:wrap;

  width:35%;
  height:150px;
  background-color:black;
`;
let Containers_2 = styled.div`
  display:flex;
  flex-direction:column;
  align-content:center;
  justify-content:center;
  width:65%;
  height:150px;
  background-color:red;
`;
let Img_Box = styled.div`
   background-color:yellow;
   width:90%;
   height:200px ;
`;


function index(props) {
  console.log(props);
  return<div className="flex-row-center"> {props.list.map((item) => {
      return <div>{item.biography}</div>



  })}
      
    
    
     


</div>
    
  
}

export default index