import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () => (
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series in 2022 </h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
          describe={val.description}
        />
      );
    })}
    ;
  </>
);

export default App;
