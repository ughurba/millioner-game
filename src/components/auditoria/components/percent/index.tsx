import {
  Height,
  Percent,
  PercentNumber,
  PercentNumberWrapper,
  WrapperPercent,
} from "./style";
import { AuditoriaProps } from "components/auditoria/type";
import { Flex } from "components/flex";
import { useGenerateRandomInteger } from "hooks/useGenerateRandomInteger";
import { useIncPercent } from "hooks/useIncPercent";
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import varinats from "data/variants.json";

export const Percents = () => {
  const { count } = useAppSelector((state) => state.count);
  const { auditoriaObj } = useGenerateRandomInteger();
  const { percents, runIncrementPercent } = useIncPercent({
    ...(auditoriaObj as AuditoriaProps),
  });
  let filteredValues: number[] = [];
  let maxValue: number = 0;
  useEffect(() => {
    runIncrementPercent();
  }, []);

  const values = Object.values(percents);
  maxValue = Math.max(...values);
  filteredValues = [...values];
  const index = values.indexOf(maxValue);
  filteredValues.splice(index, 1);

  return (
    <Flex JsContent="space-between">
      <WrapperPercent>
        {varinats[count].map((item, i) => (
          <div key={item.variant}>
            <Percent>{item.variant}</Percent>
            <Height
              percent={
                item.isCorrectAnswer
                  ? maxValue
                  : filteredValues[i] === undefined
                  ? filteredValues[i - 1]
                  : filteredValues[i]
              }
            />
            <PercentNumberWrapper>
              <PercentNumber>
                {item.isCorrectAnswer
                  ? `${maxValue}%`
                  : `${
                      filteredValues[i] === undefined
                        ? filteredValues[i - 1]
                        : filteredValues[i]
                    }%`}
              </PercentNumber>
            </PercentNumberWrapper>
          </div>
        ))}
      </WrapperPercent>
    </Flex>
  );
};
