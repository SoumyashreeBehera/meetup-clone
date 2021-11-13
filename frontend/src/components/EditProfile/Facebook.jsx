import React from "react";
import styled from "styled-components";
export default function Facebook() {
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
    & button {
      border: 1px solid rgb(220, 220, 220);
      text-align: center;
      border-radius: 3px;
      background: transparent;
      margin: auto;
      margin-top: 20px;
      height: 40px;
      width: 700px;
      font-weight: 600;
      font-size: 18px;
    }
    & button:hover {
      background-color: rgb(237, 237, 237);
    }
  `;

  return (
    <Container>
      <div>
        <div>
          <h2>Your Facebook Settings</h2>
        </div>
      </div>

      <button>Login with facebook</button>
    </Container>
  );
}
