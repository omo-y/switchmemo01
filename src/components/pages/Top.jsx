import styled from "styled-components";
import { SecondaryBotton } from "../atoms/button/SecondaryBotton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/Users");
  };
  const onClickgeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/Users");
  };
  return (
    <Scontainar>
      <h2>ＴＯＰページ</h2>
      <SecondaryBotton onClick={onClickAdmin}>管理者ユーザー</SecondaryBotton>
      <br />
      <br />
      <SecondaryBotton onClick={onClickgeneral}>一般ユーザー</SecondaryBotton>
    </Scontainar>
  );
};

const Scontainar = styled.div`
  text-align: center;
`;
