import React, { useEffect, useState } from "react";
import Nav from "../../Component/Nav/index";
import Footer from "../../Component/Footer/index";
import PeopleBoxs from "../../Component/People_Box/index";
import { get_people } from "../../Helper/server";
import styled from "styled-components";

const Button_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 75px;
  overflow: auto;
  margin-top: 25px;
`;
const Buttons = styled.button`
  min-width: 45px;
  height: 45px;
  background-color: white;
 
  margin: 0px 5px;
  border-radius: 18px;

  cursor: pointer;
  border:0px;
  font-weight:800;
  background-color:#224B8B;
  Color:White;
  transition:175ms ease-in-out;

  :hover {
    border: 2px solid white ;
    outline: 2px solid #224B8B;
    scale:1.1;
  }
`;

function People() {
  let page = [...Array(500).keys()];
  var removed = page.splice(1,500);
  console.log(removed);
  let are = [
    {
      first: page
    }];
  
  let [item, setItem] = useState([1]);
  let [data, setdata] = useState([]);

  useEffect(() => {
    get_people(item).then((response) => {
      setdata(response);
    });
  }, [item]);

  return (
    <div>
      <Nav />
      <PeopleBoxs list={data} />
      <div className="flex-row-center full-size">
        <Button_Container>
          {removed.map((item) => {
            return(
            <Buttons onClick={(() => {
              setItem(item);
            })}>{item}</Buttons>
            
              )
            
          })}
        </Button_Container>
      </div>
      <Footer />
    </div>
  );
}

export default People;
