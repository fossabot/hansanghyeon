import React from 'react';
import styled from 'styled-components';
import { Row as _Row, Col as _Col } from 'styled-bootstrap-grid';
import { readableColor } from 'polished';

export const Wrap = styled.div`
  display: flex;
`;

export const ProfilePhoto = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    svg {
      margin-right: 8px;
    }
    a {
      color: currentColor;
    }
    h3 {
      margin-top: 0;
    }
  }
`;

export const DimSpan = styled.span`
  color: #9b9a97;
`;

export const StackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 8px;
  }
`;

const isLightnessColor = (color: string): string =>
  readableColor(color) === '#000' ? '#3D4041' : '#EDEDEB';
export const Code = styled.span<{ color?: string }>`
  display: inline-block;
  padding: 0.2em 0.4em;
  background-color: ${({ color }) =>
    color ? isLightnessColor(color) : '#EDEDEB'};
  color: ${({ color }) => color || '#9b9a97'};
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  line-height: 1;
  font-family: 'D2Coding';
  font-style: normal;
  font-weight: 400;
`;

const RowStyled = styled(_Row)`
  margin-bottom: 16px;
`;
const Row = (props: any) => <RowStyled {...props}>{props?.children}</RowStyled>;

const ColStyled = styled(_Col)``;
const Col = (props: any) => <ColStyled {...props}>{props?.children}</ColStyled>;

export { Row, Col };
