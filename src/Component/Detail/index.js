import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Actor_movies from "./actor_movies";
import {get_movies_credits} from "../../Helper/server"
let Containers_1 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 120px;
  width: 35%;
`;
const People_data = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding-top: 8px;
  font-size: 1em;
`;
let Containers_2 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  width: 65%;
  margin-top: 120px;

`;
let Img_Box = styled.img`
  max-height: 500px;
  box-shadow: 5px 0px 10px 1px black;
  width: 60%;
  border-radius: 7px;
`;

function Index(props) {
  let { name } = useParams();
  let [credit , setCredit] = useState([]);
  
  useEffect(() => {
    get_movies_credits(name).then((res) => {
      setCredit(res);
    })
   }, [])

  let render = props.list;
  if (!props.list) return null;
  if (render.gender == "1") return (render.gender = "Female");
  if (render.gender == "2") return (render.gender = "Male");

  return (
    <div className="flex-coulmn-center">
      <div className="flex-row half-size">
        <Containers_1>
          <Img_Box
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${render.profile_path}`}
          />
          <h2>Personal Info</h2>
          <People_data>
            <h3>Known For</h3>
            <b>{render.known_for_department}</b>
          </People_data>
          <People_data>
            <h3>Gender</h3>
            <b>{render.gender}</b>
          </People_data>
          <People_data>
            <h3>Birthday</h3>
            <b>{render.birthday}</b>
          </People_data>
          <People_data>
            <h3>Place of Birth</h3>
            <b>{render.place_of_birth}</b>
          </People_data>
        </Containers_1>
        <Containers_2>
          <h1>{render.name}</h1>
          <People_data>
            <h3>Biography</h3>
            <b>{render.biography}</b>
          </People_data>
          <h2>Known For</h2>
          <Actor_movies list={credit}/>
        </Containers_2>
      </div>
    </div>
  );
}

export default Index;
