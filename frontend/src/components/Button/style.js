import styled from "styled-components"

export const Container = styled.div`
  background-color: #222;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 0.2s background;
  text-align: center;
  
  &:hover {
    background-color: #444;
    cursor: pointer;
  }

` 