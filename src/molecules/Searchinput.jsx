import { Input } from "../components/atoms/button/input/Input";
import { SecondaryBotton } from "../components/atoms/button/SecondaryBotton";
import styled from "styled-components";
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <Sbuttonwrapper>
      <Input placeholder="検索条件" />
      <Haba>
        <SecondaryBotton>検索</SecondaryBotton>
      </Haba>
    </Sbuttonwrapper>
  );
});

const Sbuttonwrapper = styled.div`
margin-left:0px auto;
display:flex;
align-items:center;
ali
`;
const Haba = styled.span`
  padding-left: 8px;
`;
