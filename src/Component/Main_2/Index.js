import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Modal_detail, Modal_img, Modal_title } from "../Main/Modal";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
      display:flex;
    }

`;
const Point_box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  position: absolute;
  color: white;
  top: -28px;
  right: 49px;
`;
const Background_box = styled.div`
  position: absolute;
  width: 50px;
  height: 30px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #224b8b;
  top: -30px;
  right: 46px;
  box-shadow: 5px 0px 10px 1px black;
`;
const Box_cnt = styled.div`
  width: 80%;
  height: 350px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: start;
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
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

function Index(props) {
  return (
    <Movies_cnt className="flex-column-center full-size">
      <h1>Popular Movies</h1>
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
                              {(item.title + item.name).replace(
                                "undefined",
                                ""
                              )}{" "}
                            </h3>
                            <h4>
                              Date :{" "}
                              {(
                                item.first_air_date + item.release_date
                              ).replace("undefined", "")}
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
                    <Background_box />
                    <Point_box>
                      <CircularProgressbar
                        value={item.vote_average * 10}
                        text={item.vote_average * 10 + "%"}
                        styles={buildStyles({
                          rotation: 1,
                          strokeLinecap: "butt",
                          textSize: "32px",
                          pathTransitionDuration: 1,
                          pathColor: `white`,
                          textColor: "white",
                          trailColor: "black",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                    </Point_box>
                  </Img_box>
                </Link>
                <Movies_txt>{item.original_title}</Movies_txt>
              </div>
            </div>
          );
        })}
      </Box_cnt>
    </Movies_cnt>
  );
}

export default Index;
