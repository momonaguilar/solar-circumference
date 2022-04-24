import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUndo } from '@fortawesome/free-solid-svg-icons';

const StyledPi = styled.form`
  display: flex;
  margin-bottom: 10px;
  button {
    margin: 0;
    flex-basis: 0;
    flex-grow: 1;
    padding: 10px 15px;
    border: 0;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    transition: 0.5s;
    .fa-plus {
      color: grey;
      font-size: 20px;
    }
    .fa-undo {
        color: grey;
        font-size: 20px;
      }
  }
  input {
    transition: 0.5s;
    margin: 0;
    flex-basis: 0;
    flex-grow: 9;
    padding: 10px 15px;
    font-size: 16px;
    outline: none;
    border: 3px solid;
    border-radius: 4px 0 0 4px;
    &:focus {
      border: 3px solid ;
      & ~ button {
        background-color: white;
      }
    }
  }
`;


const Pi = ({addPrecision, resetPi, piValue}) => {
    return (
        <StyledPi
            onSubmit={(event) => {
                event.preventDefault();
                addPrecision();
            }}
            onReset={(event) => {
                event.preventDefault();
                resetPi();
            }}
            >
            <input
                type="text"
                value={piValue}
                onChange={() => {
                  }}
                placeholder="Pi value"
            />
            <button type="submit">
                <FontAwesomeIcon className="fa-plus" icon={faPlus} />
            </button>
            <button type="reset">
                <FontAwesomeIcon className="fa-undo" icon={faUndo} />
            </button>
        </StyledPi>

      )
    }

export default Pi;