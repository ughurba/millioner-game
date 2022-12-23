import { Bonus } from "components";
import { FC } from "react";
import { StyledMenu } from "./style";

interface Props {
  open: boolean;
}
export const Menu: FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Bonus isBurger={true} />
    </StyledMenu>
  );
};
