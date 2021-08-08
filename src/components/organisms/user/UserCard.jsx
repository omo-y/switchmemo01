import { memo } from "react";
import styled from "styled-components";
import { UsericonWithinName } from "../../../molecules/UserIconWithinName";
import { Card } from "../../atoms/card/Card";
export const UserCard = memo((props) => {
  console.log("Usercard");
  const { user } = props;
  return (
    <Card>
      <UsericonWithinName image={user.image} name={user.name} />
      <SDL>
        <p>{user.name}</p>
        <dl>
          <dt>email</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>web add</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDL>
    </Card>
  );
});
const SDL = styled.dl`
text-align:left;
dt {
 float: left;
}
dd{
  padding-left: 50px;
  padding-bottom 8px;
  overflow-wrap:break-word;
}
`;
