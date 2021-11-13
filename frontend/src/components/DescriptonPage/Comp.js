import styled from "styled-components";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Comp() {
  const { event, token } = useContext(AuthContext);

  return (
    <CompStyled>
      <div className="box">
        <div className="one">
          <div>{event.data.dateAndTime}</div>
          <div style={{ fontWeight: "bold" }}>
            {event.data.groupDetail.groupName}
          </div>
        </div>
        <div className="two">FREE</div>
        <button className="three">Share</button>
        <button className="four">
          <Link to={token === "" && "/login"}>Attend</Link>
        </button>
      </div>
    </CompStyled>
  );
}

const CompStyled = styled.div`
  /* border: 1px solid black; */
  .box {
    width: 65%;
    margin: auto;
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: 55% 10% 10% 10%;
    grid-column-gap: 5%;
    padding: 1%;
    .one {
      /* border: 1px solid black; */
    }
    .two {
      /* border: 1px solid black; */
      margin-top: 12px;
      font-weight: bold;
    }
    .three {
      /* border: 1px solid black; */
      height: 50px;
      color: #00a2c7;
      font-weight: bold;
      border-radius: 5px;
      :hover {
        background-color: #00a2c7;
        color: white;
      }
    }
    .four {
      /* border: 1px solid black; */
      height: 50px;
      font-weight: bold;
      background-color: #c63d2d;
      color: white;
      border-radius: 5px;
    }
  }
`;

export default Comp;
