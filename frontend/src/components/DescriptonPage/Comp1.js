import styled from "styled-components";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";

function Comp1() {
  const { event } = useContext(AuthContext);

  return (
    <Comp1Styled>
      <div className="line1">{event.data.dateAndTime}</div>
      <div className="line2">{event.data.title}</div>
      <div className="line3">
        <img
          className="line4"
          alt="profile pic"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <div className="line5">
          <div className="line6">Hosted by</div>
          <div className="line7">Gary L.</div>
        </div>
      </div>
    </Comp1Styled>
  );
}
const Comp1Styled = styled.div`
  width: 65%;
  /* border: 1px solid black; */
  margin: auto;
  .line1 {
    font-size: 1rem;
    color: #757575;
  }
  .line2 {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .line3 {
    /* border:1px solid black; */
    margin-top: 5px;
    display: grid;
    width: 20%;
    height: 60px;
    grid-template-columns: 40% 60%;
    .line4 {
      /* border: 1px solid red; */
      border-radius: 50%;
      width: 70%;
      height: 50px;
      margin-top: 5px;
    }
    .line5 {
      .line7 {
        font-weight: bold;
      }
    }
  }
`;
export default Comp1;
