import React, { useEffect, useState } from 'react'
import Nav from "../../Component/Nav/index"
import Footer from "../../Component/Footer/index"
import Detail from "../../Component/Detail/index"
import { get_people_detail , get_movies_credits } from '../../Helper/server'
import { useParams } from 'react-router-dom'

function People_detail() {
  let { name } = useParams();
  let [data , setData] = useState([]);
  let [credit , setCredit] = useState([]);
  
  useEffect(() => {
   get_people_detail(name).then((res) =>{
     setData(res);
   })
   get_movies_credits(name).then((res) => {
     setCredit(res);
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