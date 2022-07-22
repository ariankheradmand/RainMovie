import React from 'react'
import {useEffect , useState} from "react"
import styled from "styled-components"
import Nav from "../../Component/Nav/index"
import Hero from '../../Component/Hero/index'
import Top_rated from "../../Component/Main/index"
import Popular from "../../Component/Main_2/Index"
import { get_top_rated_movies , get_popular_movies , get_top_rated_tv} from "../../Helper/server"

const Button = styled.button`
  width=90px;
  height= 45px;
  color=black;
  background-color=inherit;
`;
const SwitchButton = styled.button`
font-size: 1.25em;
cursor: pointer;
border-radius: 30px;
border: 0;
background-color:inherit;
:focus-visible {
  outline: -webkit-focus-ring-color auto 0px;
}
:focus {
    background-color:blue;
    transition: 0.2s ease-in-out;
}
`;
const SwitchCnt = styled.span`
width: fit-content;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: white;
border-radius: 30px;
`
const Main_text = styled.h1`
   padding-right: 15px;
`


function Home() {
  let [top_rated_movies, set_top_rated_movies] = useState([]);

  useEffect(() => {
    get_top_rated_movies().then((response) =>{
      set_top_rated_movies(response);
    });
  }, [])
  let [top_rated_tvs , set_top_rated_tv] = useState([]);
 
  useEffect(() => {
    get_top_rated_tv().then((response) =>{
      set_top_rated_tv(response);
    });
  }, [])
  

  let [popular_movies, set_popular_movies] = useState([]);

  useEffect(() => {
    get_popular_movies().then((response) =>{
      set_popular_movies(response);
    });
  }, [])


  let [change_top_reted , set_change] = useState([]);

  useEffect(() => {
    get_top_rated_movies().then((response) =>{
      set_change(response);
    });
  }, [])

  return (
    <div className='flex-coulmn-center full-size' >
      <Nav />
      
      <Hero />
      
      {/* <Button onClick={() => {
        set_change(top_rated);
      }}>Change</Button> */}
      <div className='flex-row-start half-size'>
      <Main_text >Top Rated Movies</Main_text>
      <SwitchCnt>
        <SwitchButton autoFocus onClick={() => {
          set_change(top_rated_movies);
        }}>
         Movies
        </SwitchButton>

        <SwitchButton onClick={() => {
          set_change(top_rated_tvs);
        }}>
         Tv
        </SwitchButton>
        </SwitchCnt>
      </div>
      <Top_rated  list = {change_top_reted} />
      
      <Popular list = {popular_movies} />
    </div>
  )
}

export default Home;