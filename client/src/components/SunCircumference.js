import React from 'react';
import styled from "styled-components";

const StyledView = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  h1 {
    font-size: 50px;
    color: white;
    text-align: center;
    padding: 10px;
    text-shadow: 2px 2px 4px #000000;
    margin-top: 0;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 20px;
    color: white;
    text-align: center;
    padding: 5px;
    text-shadow: 2px 2px 4px #000000;
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const SunCircumference = ({sunCircumference}) => {
    return (
        <StyledView>
            <h2>Sun circumference</h2>
            <h1>{`${sunCircumference}`}</h1>
          </StyledView>
      )
    }

export default SunCircumference;