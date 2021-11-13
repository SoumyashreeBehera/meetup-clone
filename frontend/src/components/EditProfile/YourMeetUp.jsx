import React from "react";
import styled from "styled-components";
export default function YourMeetUp() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;

    margin: 20px auto;
    border: 1px solid rgb(220, 220, 220);
    background-color: white;
    padding-bottom: 20px;
    & > div {
      text-align: left;
      border-bottom: 1px solid rgb(220, 220, 220);

      & > div {
        margin-left: 20px;
      }
    }
    & h2 {
      font-size: 28px;
      line-height: 1.25;
    }
    & a {
      text-decoration: none;
      font-weight: 800;
      font-size: 16px;
      color: rgb(255, 169, 48);

      text-align: left;
      margin-top: 20px;
      margin-left: 20px;
    }
    & a:hover {
      text-decoration: underline;
      text-decoration-color: blue;
    }
  `;

  return (
    <Container>
      <div>
        <div>
          <h2>Your Meetup Account</h2>
        </div>
      </div>

      <a hrf="#">Deactivate your account</a>
    </Container>
  );
}
