import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
export const UsericonWithinName = (props) => {
  console.log("UserIconWithinName");
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <Scont>
      <Simg height={160} width={160} src={image} alt={name} />
      <Sname>{name}</Sname>
      {isAdmin && <SEdit>編集</SEdit>}
    </Scont>
  );
};
const Scont = styled.div`
  text-align: center;
`;
const Simg = styled.img`
  border-radius: 50%;
`;
const Sname = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
  padding-top: 4px;
`;
