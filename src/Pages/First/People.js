import React, { useEffect, useState } from 'react'
import Nav from "../../Component/Nav/index"
import Footer from "../../Component/Footer/index"
import PeopleBoxs from "../../Component/People_Box/index"
import {get_people} from "../../Helper/server"




function People() {
  let [data , setdata] = useState([]);
   
  useEffect(() => {
    get_people().then((response) =>{
      setdata(response);
      
    });
  }, [])

  return (
    <div>
      <Nav />
      <PeopleBoxs list={data} />
      <Footer />

    </div>
  )
}

export default People;