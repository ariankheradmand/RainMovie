import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Modal_detail, Modal_img, Modal_title } from "./Modal";
import {Link} from "react-router-dom"
const Img_box = styled.div`
  width: 140px;
  height: 220px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  box-shadow: 5px 0px 10px 1px black;
  margin: 15px 0px;
  :hover {
    .hover {
      display: flex;
    }
  }
`;
const Point_box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  position: absolute;
  color: white;
  top: 10px;
  right: 10px;
`;
const Box_cnt = styled.div`
  width: 80%;
  height: 350px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`;
const Movies_cnt = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Movies_txt = styled.div`
  height: 35px;
  color: white;
`;
const Circle = styled.circle`
  width: 150px;
  height: 150px;
  fill: none;
  stroke-width: 2;
  stroke: #000;
  transform: translate(5px, 5px);
  stroke-dasharray: 315;
  stroke-dashoffset: 315;

  :nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #f3f3f3;
  }

  :nth-child(2) {
    stroke-dashoffset: calc(365 - (365 * 30) / 100);
    stroke: red;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

function Index(props) {
  return (
    <Movies_cnt className="flex-column-center full-size">
      <Box_cnt>
        {" "}
        {props.list.map((item) => {
          return (
            <div className="flex-row-center">
              <div className="flex-column-center small-rl-pad ">
              <Link to={`/Movie/${item.id}`}>
                <Img_box>
                  <div className="hover">
                    <Modal>
                      <Modal_img>
                        <Img
                          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}`}
                        />
                      </Modal_img>
                      <div className="flex-coulmn-center">
                        <Modal_title>
                          <h3>
                            {(item.title + item.name).replace("undefined", "")}{" "}
                          </h3>
                          <h4>
                            Date :{" "}
                            {(item.first_air_date + item.release_date).replace(
                              "undefined",
                              ""
                            )}
                          </h4>
                          <h4>Vote Average : {item.vote_average}</h4>
                        </Modal_title>
                        <Modal_detail>
                          {" "}
                          <h5> {item.overview} </h5>{" "}
                        </Modal_detail>
                      </div>
                    </Modal>
                  </div>

                  <Img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  />

                  <Point_box>
                    <div className="box">
                      <div className="percent">
                        <svg>
                          <Circle cx="70" cy="70" r="15"></Circle>
                          <Circle cx="70" cy="70" r="15"></Circle>
                        </svg>
                        <div className="number">
                          <h5>
                            {item.vote_average * 10}
                            <span>%</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Point_box>
                </Img_box>
                </Link>
                <Movies_txt>
                  {" "}
                  {(item.title + item.name).replace("undefined", "")}
                </Movies_txt>
              </div>
            </div>
          );
        })}
      </Box_cnt>
    </Movies_cnt>
  );
}

export default Index;
