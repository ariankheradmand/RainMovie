import React from 'react'
import styled from 'styled-components'

let Footer = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;

   font-weight:bold;
   margin-top:24px;

   width:100%;
   height:28px;
   background-color:#3BABFD;
`;

let Footer_instagram = styled.a`
    width:50%   



`;

let Footer_GithubBox = styled.div`
  width:50%;
  text-align:end;

  

`;

let FooterGithub = styled.a`
   width:50%  
 

   font-weight:bold;
   text-decoration:none;
   padding-left:4px;
   color:white;
`;
function index() {
  return (
    <Footer>
    <div className='flex-row-center half-size'>
    
    <Footer_instagram>
      hello
    </Footer_instagram>
    
    <Footer_GithubBox className='s50'>Designed & Developed by  
    <FooterGithub href=''>Arian Kheradmand 
    <img src=''></img>
    </FooterGithub>
    </Footer_GithubBox>
    

    

    </div>
     </Footer>
  )
}

export default index