import React from 'react';
import styled from 'styled-components/macro';

const StyledFooter = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  text-align: center;
  p {
    font-size: 12px;
    color: white;
  }
`;

const Status = ({status}) => {
    return (
        <StyledFooter>
            <p>Server status</p>
            <p>{status}</p>
        </StyledFooter>
      )
    }

export default Status;