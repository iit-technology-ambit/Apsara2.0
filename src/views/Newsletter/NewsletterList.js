import React, { useState, useEffect } from "react";
import "./NewsletterList.scss";
import newsletters from "./NewslettersContent";
import Button from "../../components/CustomButtons/Button";
export default function NewsletterList(props) {
  // const [gDepArr, setGdepArr] = useState([]);
  const [latestArr, setLatestArr] = useState([]);
  const [sorBtnTitle, setSorBtnTitle] = useState("sort by oldest");
  useEffect(() => {
    // const gDepArr = newsletters.slice(0, 5);
    // setGdepArr(gDepArr);

    // const latestArr = newsletters.slice(5);
    // setLatestArr(latestArr);

    const latestArr = newsletters.reverse();
    setLatestArr(latestArr);

  }, []);

  function handleClick(href) {
    props.history.push(`/newsletter/${href}`);
  }

  function sortList() {
    // reverse the list
    const latestArrReversed = latestArr.reverse();
    setLatestArr(latestArrReversed);
    
    // change the button content
    if (sorBtnTitle === "sort by latest") 
      setSorBtnTitle("sort by oldest");
     else if (sorBtnTitle === "sort by oldest") 
      setSorBtnTitle("sort by latest");
    
  }

  return (
    <div>
      <div className="newsletter-list">
        <h1>Catch the Latest !</h1>
        <Button color="info" round onClick={() => sortList()}>
          {sorBtnTitle}
        </Button>
        {latestArr.map((item) => {
          return (
            <div className="indiv-card" onClick={() => handleClick(item.href)}>
              <div className="title-date">
                <h3 className="title">{item.title}</h3>
                <h3 className="date">{item.date}</h3>
              </div>
            </div>
          );
        })}
        <br />
        {/* <h1>Great Depression Again ?</h1>
        <Button color="info" round onClick={() => sortGDList()}>
          {sorBtnTitle}
        </Button>
        {gDepArr.map((item) => {
          return (
            <div className="indiv-card" onClick={() => handleClick(item.href)}>
              <div className="title-date">
                <h3 className="title">{item.title}</h3>
                <h3 className="date">{item.date}</h3>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
