import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  color: darkviolet;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  & > header {
    display: flex;
    flex-direction: row;
  }
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

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    padding: 10px 15px;
    font-size: 16px;
    border-bottom: 2px solid lightgray;
    :focus {
      transition: color 0.3s;
      border-bottom: 2px solid darkviolet;
    }
  }
  button {
    width: 7rem;
    margin-left: 10px;
    border-radius: 5px;
    background: #7159c1;
    color: #f4ede8;
    transition: 0.2s;
    :hover {
      background: ${shade(0.2, '#6600ff')};
    }
  }
`;

export const ContainerList = styled.section`
  margin-top: 30px;
  & > ul {
    display: flex;
    flex-direction: column;
  }
`;
export const Lista = styled.li``;
