import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../Component/Nav/index";
import Footer from "../../Component/Footer/index";
import All_detail from "../../Component/Detail/movie_detail";
import Cast from "../../Component/Cast/index";
import { get_movie_detail, get_cast ,get_crew } from "../../Helper/server";
function Movie_detail() {
  let { name } = useParams();
  let [data, setData] = useState([]);
  let [cast, setCast] = useState([]);
  let [crew, setCrew] = useState([]);
  useEffect(() => {
    get_movie_detail(name).then((res) => {
      setData(res);
    });
    get_cast(name).then((res) => {
      setCast(res);
    });
    get_crew(name).then((res) => {
        setCrew(res);
      });
  }, []);

  return (
    <div>
      <Nav />
      <All_detail list={data} />
      <div className="flex-coulmn-center">
        <Cast list={cast} />
      </div>
      <div className="flex-coulmn-center">
        <Cast list={crew} />
      </div>

      <Footer />
    </div>
  );
}

export default Movie_detail;
