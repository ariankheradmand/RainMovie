import React, { useEffect, useState } from 'react'
import Nav from "../../Component/Nav/index"
import Footer from "../../Component/Footer/index"
import Detail from "../../Component/Detail/index"
import { get_people_detail } from '../../Helper/server'
import { useParams } from 'react-router-dom'


function People_detail() {
  let { name } = useParams();
  let [data , setData] = useState([]);
  
  useEffect(() => {
   get_people_detail(name).then((res) =>{
     setData(res);
    
   })
  }, [])
  

  return (
    <div>
          <Nav />

          <Detail list={data}/>

          <Footer />
    </div>
  )
}

export default People_detail