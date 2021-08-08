import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput type="text" placeholder={placeholder} />;
};
const SInput = styled.input`
  padding: 10px 20px;
  text-align: center;
  border: solid #ddd 1px;
  border-radius: 888px;
  outline: none;
`;
