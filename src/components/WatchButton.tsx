import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";
import React from 'react';


export interface WatchButtonProps {
  Title?: string;
}

export const initialProps: WatchButtonProps = {
  Title: "Watch Now",
};


const BtnWatch = styled.div`
  margin-left: -1083.5px;
  height: 43.35908508300781px;
  margin-top: 49px;
  display: flex;
  align-items: flex-start;
  min-width: 155.5006103515625px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const WatchContainer = styled.div`
  height: 44px;
  margin-top: -0.35px;
  display: flex;
  padding: 8.2px 19.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 151px;
  gap: 6px;
  background-color: var(--color-background-bold);
  border-radius: 40.07px;
  border: 0.9541445374488831px solid;
  border-color: var(--color-primary);
`;

const BtnWatch1 = styled.img`
  width: 12px;
  height: 12px;
  align-self: center;
  margin-bottom: 1.31px;
`;

const WatchNow = styled.div`
  ${ValignTextMiddle}
  height: 26px;
  font-family: var(--font-text);
  font-weight: 300;
  color: var(--color-primary);
  font-size: var(--font-size-xl2);
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;


const WatchButton =({ Title }: WatchButtonProps) => {
  return (
    <BtnWatch>
      <WatchContainer>
        <BtnWatch1 src={btnWatch} alt="btn-watch" />
        <WatchNow>{Title}</WatchNow>
      </WatchContainer>
    </BtnWatch>
  );
}

export default WatchButton;