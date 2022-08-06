import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-start;
  width: 80%;
  position: relative;
`;
const Background_image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 30%;
  position: absolute;
  top:50px;
  z-index: 0;
`;
let Containers_1 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 120px;
  width: 35%;
  position: relative;
`;
let Containers_2 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  width: 65%;
  margin-top: 120px;
  position: relative;
`;
let Img_Box = styled.img`
  max-height: 500px;
  box-shadow: 5px 0px 10px 1px black;
  width: 60%;
  border-radius: 7px;
`;

function movie_detail(props) {
  let render = props.list;
  let genres = render.genres
  
  
  return (
    <div className=".full-size flex-row-center">
      <Background>
        <Background_image
          src={`https://image.tmdb.org/t/p/original/${render.backdrop_path}`}
        />
        <Containers_1>
          <Img_Box
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${render.poster_path}`}
          />
        </Containers_1>
        <Containers_2>
          <h1>{render.title}</h1>
        </Containers_2>
         
      </Background>
    </div>
  );
}

export default movie_detail;
