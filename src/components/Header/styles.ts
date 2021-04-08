import { inherits } from 'node:util';
import styled from 'styled-components';

interface theme {
  theme: boolean;
}


export const Header = styled.header<theme>`
background-color: ${(props) => props.theme === true ? 'black' : '#FFF'};
  display: flex;
  flex-direction: row;
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
  }
  svg {
    margin-right: 1px;
  }
`;
