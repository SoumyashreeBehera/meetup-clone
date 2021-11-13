import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";
import { Redirect } from "react-router";
import Comp from "./Comp";
import styled from "styled-components";
function DetailsPage() {
  const { event } = useContext(AuthContext);
  console.log(event);

  return event.data === undefined ? (
    <Redirect to="/groupAndEvnet" />
  ) : (
    <DetailsPageStyled>
      <Comp1 />
      <Comp2 />
      <Comp />
    </DetailsPageStyled>
  );
}
const DetailsPageStyled = styled.div``;
export default DetailsPage;
