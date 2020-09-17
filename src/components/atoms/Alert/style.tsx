import styled, { keyframes } from 'styled-components';

const AlertBox = styled.div`
  position: relative;
  padding: 0.55em 1.25em 0.57rem;
  padding-right: 4em;
  border-radius: 0.25em;
  border: 1px solid;
  display: flex;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    height: 1em;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    border-left: 1px solid;
    border-right: 2px solid;
    border-color: inherit;
    border-radius: 0 3px 3px 0;
  }
`;

export const AlertSuccess = styled(AlertBox)`
  border-color: #0ad406;
  color: #0ad406;
  display: inline-block;
`;

export const Title = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const WrapStyle = styled.div`
  height: 1em;
  line-height: 1;
  span {
    line-height: 1;
  }
`;
export const Wrap = {
  Root: styled.div`
    display: flex;
  `,
  Inner: styled(WrapStyle)`
    display: flex;
    align-items: center;
  `,
  Icon: styled(WrapStyle)`
    margin-right: 8px;
  `,
  Times: styled(WrapStyle)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.55em 1.25em 0.57rem;
    color: inherit;
    box-sizing: unset;
    cursor: pointer;
  `,
};

export const keyframesTada = keyframes`
  0% {
    transform: scale(1);
  }
  10%,
  20% {
    transform: scale(0.9) rotate(-8deg);
  }
  30%,
  50%,

  70% {
    transform: scale(1.3) rotate(8deg);
  }
  40%,
  60% {
    transform: scale(1.3) rotate(-8deg);
  }
  100%,
  80% {
    transform: scale(1) rotate(0);
  }
`;

export const Tada = styled.div`
  animation: ${keyframesTada} 2s linear infinite;
`;

const keyframesBlink = keyframes`
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
`;

export const Blink = styled.span`
  display: inline-block;
  animation: ${keyframesBlink} 2s infinite both;
`;
