import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  max-width: 80vw;
  max-height: 80vh;
  position: relative;
  background-color: white;
  padding: 40px;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`;

export const AlbumItem = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const AlbumDescription = styled.p`
  font-size: 18px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: transparent;
  top: 6px;
  right: 6px;
  padding: 4px;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: tomato;
  }
`;
