import styled from "styled-components";
import { Basebotton } from "./Basebotton.jsx";
export const PrimaryBotton = (props) => {
  const { children } = props;
  return (
    <div className="App">
      <Sbutton>{children}</Sbutton>
    </div>
  );
};
const Sbutton = styled(Basebotton)`
  background-color: #40514e;
`;
