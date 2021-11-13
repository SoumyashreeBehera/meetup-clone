import React from "react";
import styled from "styled-components";
export default function UserDetailSection({ data }) {
  const Container = styled.div`
    width: 800px;
    height: 700px;
    margin: 20px auto;
    border: 1px solid rgb(220, 220, 220);
    background-color: white;
    & div:nth-child(1) {
      border-bottom: 1px solid rgb(220, 220, 220);
    }
    & h1 {
      margin-left: 20px;
    }
    & > div {
      display: flex;
      flex-direction: row;

      & .data_container {
        height: 100%;
        width: 70%;
        margin-left: 20px;
        display: grid;
        font-size: 15px;
        line-height: 1.45;
        font-family: "Graphik Meetup", helvetica, arial, sans-serif;
        & div:nth-child(11) {
          border: none;
        }
        text-align: left;
        & > div {
          border-bottom: 1px solid rgb(220, 220, 220);
          display: flex;
          flex-direction: row;
          & p {
            margin-left: 20px;
          }
          & a {
            margin: auto 10px;
            color: blue;
            text-decoration: none;
          }
          & a:hover {
            text-decoration: underline;
          }
        }
      }
    }
  `;
  const AvaterContainer = styled.div`
    margin-top: 20px;
    min-width: 220px;
    text-align: center;
    & img {
      height: 80px;
      width: 80px;
      border-radius: 40px;
    }
    & a {
      text-decoration: none;
      color: blue;
    }
    & a:hover {
      text-decoration: underline;
    }
  `;
  const P1 = styled.p`
    font-weight: 700;
    width: 120px;
  `;

  return (
    <Container>
      <div className=".header">
        <h1>General</h1>
      </div>
      <div>
        <div className="data_container">
          <div>
            <P1>Name:</P1> <p>{data.Name} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>User ID:</P1> <p>{data.User_ID} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>Email address:</P1> <p>{data.Email_address} </p>{" "}
            <a href="#">Edit</a>
          </div>
          <div>
            <P1>Password:</P1> <p>{data.Password} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>Location:</P1> <p>{data.Location} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>Timezone:</P1> <p>{data.Timezone} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>Language:</P1> <p>{data.Language} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>Birthday:</P1> <p>{data.Birthday} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>Gender:</P1> <p>{data.Gender} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>Hometown:</P1> <p>{data.Hometown} </p> <a href="#">Edit</a>
          </div>
          <div>
            <P1>Bio:</P1> <p>{data.Bio} </p> <a href="#">Edit</a>
          </div>
        </div>
        <AvaterContainer>
          <img src={data.imageUrl} alt="avatar" />
          <br />
          <a>Change your photo</a>
          <hr />

          <a>photos 1</a>
        </AvaterContainer>
      </div>
    </Container>
  );
}
