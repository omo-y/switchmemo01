import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 2px gray;
  font-weight: bold;
  padding-left: 2px;
`;
