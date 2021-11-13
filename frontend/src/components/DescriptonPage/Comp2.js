import styled from "styled-components";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";

function Comp2() {
  const { event } = useContext(AuthContext);

  return (
    <Comp2Styled>
      <div className="left">
        <div className="heading">Details</div>
        {event.data.details.map((el) => {
          return <div className="details">{el}</div>;
        })}
        <div className="heading1">Attendees (409)</div>
      </div>
      <div className="right">
        <div className="rightbox1">
          <img
            className="line1"
            alt="event pic"
            src="https://secure-content.meetupstatic.com/images/https%3A%2F%2Fsecure.meetupstatic.com%2Fphotos%2Fevent%2F5%2F9%2F7%2F1%2Fhighres_499462897.jpeg/56x56.jpg"
          />
          <div className="line2">
            <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              {event.data.groupDetail.groupName}
            </div>
            <div
              style={{ color: "#757575", fontSize: "0.9rem", marginTop: "5px" }}
            >
              {event.data.groupDetail.groupPrivate}
            </div>
          </div>
        </div>
        <div className="rightbox2">
          <div style={{ fontSize: "0.9rem" }} className="one">
            {event.data.dateAndTime}
          </div>
          <div
            style={{ fontSize: "0.9rem", color: " #757575" }}
            className="two"
          >
            New York
          </div>
        </div>
      </div>
    </Comp2Styled>
  );
}

const Comp2Styled = styled.div`
  width: 65%;
  margin: auto;
  margin-top: 40px;
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: 65% 30%;
  grid-column-gap: 7%;
  .left {
    /* border: 1px solid red; */
    .heading {
      font-size: 1.3rem;
      font-weight: bold;
    }
    .details {
      margin-top: 18px;
    }
    .heading1 {
      font-size: 1.3rem;
      font-weight: bold;
      margin-top: 20px;
    }
  }
  .right {
    /* border: 1px solid red; */
    position: fixed;
    left: 62%;
    width: 20.5%;
    .rightbox1 {
      /* border: 1px solid black; */
      display: grid;
      padding: 3%;
      grid-template-columns: 30% 69%;

      .line1 {
        /* border: 1px solid black; */
        height: 50px;
        border-radius: 5px;
      }
      .line2 {
        /* border:1px solid black; */
      }
    }
    .rightbox2 {
      margin-top: 30px;
    }
  }
`;

export default Comp2;
