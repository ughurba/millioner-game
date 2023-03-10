import bonusMoney from "data/bonus.json";
import { FC, useEffect, useMemo, useState } from "react";
import { useAppSelector } from "store/hooks";
import { StyledBonus, Wrapper, Title } from "./style";
import cloneDeep from "lodash.clonedeep";
interface Props {
  isBurger?: boolean;
}
export const Bonus: FC<Props> = ({ isBurger = false }) => {
  const { count } = useAppSelector((state) => state.count);
  const [money, setMoney] = useState<MoneyProps[]>([]);

  useEffect(() => {
    const copyMoney: MoneyProps[] = cloneDeep(money);
    const bonus = copyMoney.find((x, i) => x.id === count);
    if (bonus) {
      bonus.isActive = true;
      setMoney(copyMoney);
    }
  }, [count]);

  useMemo(() => {
    if (!count) {
      const copyArr = cloneDeep(bonusMoney);
      setMoney(copyArr.reverse());
    }
  }, [count]);

  return (
    <Wrapper isBurger={isBurger}>
      <Title>Bonuslar</Title>
      {money.map((x) => (
        <StyledBonus isActive={x.isActive} key={x.id}>
          {x.money}
        </StyledBonus>
      ))}
    </Wrapper>
  );
};
