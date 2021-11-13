import React from "react";
import styled from "styled-components";
export default function YourInterests({ categories }) {
  const Container = styled.div`
    width: 800px;
    margin: 20px auto;
    border: 1px solid rgb(220, 220, 220);
    background-color: white;

    & > div {
      border-bottom: 1px solid rgb(220, 220, 220);
      text-align: left;

      & h2 {
        margin-left: 20px;
        font-size: 34px;
        line-height: 1.25;
        font-weight: 500;
      }
    }
    & > .bg-change {
      background: transparent;
      border: none;
      & > p {
        margin-left: 20px;
        font-size: 18px;
      }
    }
    & h3 {
      font-size: 28px;
      line-height: 1.25;
      font-weight: 500;
      margin-left: 10px;
    }
    & > .bg-change > div {
      background-color: rgb(250, 250, 250);
      width: 96%;
      margin: auto;
    }
    & > .bg-change > div > .add-interests {
      border-bottom: 1px solid white;
    }
    & > .bg-change > div > .search-cat {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      font-size: 18px;
      & p {
        margin-left: 10px;
      }
    }
    & input {
      font-family: "Graphik Meetup", helvetica, arial, sans-serif;
      display: block;
      line-height: 1.45;
      padding: 4px;
      font-size: 16px;
      height: 30px;
      margin-bottom: 10px;
      color: rgba(0, 0, 0, 0.87);
      border: 1 px solid rgba(0, 0, 0, 0.12);
      border-radius: 3px;
      background-color: #fafafa;
      width: 220px;
      margin: auto;
      margin-right: 20px;
      padding-left: 30px;
      background-image: url("https://secure.meetupstatic.com/img/1/magnify.png");
      background-position: 6px center;
      background-repeat: no-repeat;
      border: 1px solid rgb(220, 220, 220);
    }
    & input:focus {
      outline: 1px solid blue;
    }
  `;
  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    row-gap: 10px;

    padding: 20px;

    font-size: 18px;
    & > div {
      width: 220px;
      height: 30px;
      background: white;
      text-align: left;
      padding-left: 5px;
    }
  `;
  return (
    <Container>
      <div>
        <div>
          <h2>Your interests</h2>
        </div>
      </div>
      <div className="bg-change">
        <p>Add intersts so we can recommend the best Meetups for you. </p>
        <div>
          <div className="add-interests">
            <h3>Add interests</h3>
          </div>
          <div className="search-cat">
            <p>Categories</p>
            <input placeholder="Search for an interest"></input>
          </div>
          <GridContainer>
            {categories.map((e) => (
              <div>{e}</div>
            ))}
          </GridContainer>
        </div>
        <p>
          We'll notify you about other Meetups within 5 mi that match your
          interests.
        </p>
      </div>
    </Container>
  );
}
