import styled from "styled-components";
import { Basebotton } from "./Basebotton.jsx";
export const SecondaryBotton = (props) => {
  const { children, onClick } = props;
  return (
    <div className="App">
      <Sbutton onClick={onClick}>{children}</Sbutton>
    </div>
  );
};
const Sbutton = styled(Basebotton)`
  background-color: #11999e;
`;
