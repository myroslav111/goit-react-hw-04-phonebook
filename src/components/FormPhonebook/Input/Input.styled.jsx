import styled from '@emotion/styled';

export const InputWrap = styled.label`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: 'The Nautigal', cursive;
  font-size: 25px;
`;
export const InputBook = styled.input`
  border: none;
  border-radius: 8px;
  display: flex;
  flex: 0 1 50vw;
  height: 30px;
  margin: 12px 0;
  position: relative;
  transition: background linear 0.27s, box-shadow linear 0ms 0.27s;
  white-space: nowrap;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
  opacity: 1;
  visibility: visible;
  flex-basis: auto;
  flex-grow: 1;
  padding-left: 10px;
  &:focus-visible {
    outline: none;
  }
`;
