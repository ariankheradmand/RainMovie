import styled from "styled-components";

const Modal = styled.div`
   display:flex;
   
   flex-direction: row;
   align-content:center;
   justify-content:center;
   width:400px;
   height:290px;
   background-color :rgba(0 , 0, 0 , 0.8);
   border-radius: 7px;
   position:absolute;
   z-index: 9999;
   top: 0;
   left:0;
`;
const Modal_img = styled.div`
  width:250px;
  height:290px;
  border-radius: 7px;
  border : 1px solid white;
`;
const Modal_title = styled.div`
  width:250px;
  height:145px;
  border-radius: 7px;
  color:white;
  text-align:center;
  h3 {
    text-shadow: 0px 0px 5px white;
    margin:5px;
  }
  h4 {
    margin:15px;
  }
`
const Modal_detail = styled.div`
  width: 250px;
  height: 145px;

  color:white;
  text-align:center;
  overflow:auto;
  padding: 0px 8px;
  border-top: 3px dashed white;
`;

export {Modal , Modal_detail , Modal_img , Modal_title};