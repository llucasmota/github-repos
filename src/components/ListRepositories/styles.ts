import styled from 'styled-components';
import { shade } from 'polished';

export const ItemList = styled.li`
  display: flex;
  height: 70px;
  margin: 15px 0 5px 0;
  vertical-align: center;
  border-top: 1px solid #eee;
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.1, '#B0B0B0')};
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  a {
    flex: 1;
    margin-left: 10px;
    text-decoration: none;
    transition: background-color 0.2s;
    &:hover {
      strong {
        color: ${shade(0.2, '#7159c1')};
      }
    }
    strong {
      color: #202020;
    }
  }
`;
