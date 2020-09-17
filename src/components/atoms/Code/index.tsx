import styled from 'styled-components';
import { readableColor } from 'polished';

const isLightnessColor = (color: string): boolean =>
  readableColor(color) === '#000';
const Code = styled.span<{ color?: string }>`
  display: inline-block;
  padding: 0.2em 0.4em;
  background-color: ${({ color, theme }) =>
    color
      ? isLightnessColor(color)
        ? theme.color.grayscales.dark[0]
        : theme.color.grayscales.light[0]
      : '#EDEDEB'};
  color: ${({ color, theme }) => color || theme.dimSpan};
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  line-height: 1;
  font-family: 'D2Coding';
  font-style: normal;
  font-weight: 400;
`;

export default Code;
