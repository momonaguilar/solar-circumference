import { useEffect, useState, useCallback } from 'react';
import styled from "styled-components";
import SunCircumference from './components/SunCircumference';
import Pi from './components/Pi';
import Status from './components/Status';
import api from "./api/api";

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
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

function App() {

    const [circumference, setCircumference] = useState(0);
    const [piValue, setPiValue] = useState(0);
    const [status, setStatus] = useState(0);

    const checkHealth = useCallback(() => {
        api().checkHealth()
            .then(res => {
                console.log(res);
                setStatus(res.message);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const getSunCircumference = useCallback(() => {
        api().getSunCircumference()
            .then(res => {
                console.log(res);
                setCircumference(res.sunCircumference);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const getPiValue = useCallback(() => {
        console.log("test");
        api().getPiValue()
            .then(res => {
                console.log(res);
                setPiValue(res.pi);
                getSunCircumference();
            })
            .catch(err => {
                console.log(err);
            });
    }, [getSunCircumference]);

    const addPrecision = useCallback(() => {
        api().addPrecision()
            .then(res => {
                console.log(res);
                setPiValue(res.newPi);
                getSunCircumference();
            })
            .catch(err => {
                console.log(err);
            });
    }, [getSunCircumference]);

    useEffect(() => {getPiValue();
    }, [getPiValue]);

    return (
        <StyledView>
            <h1>solar-circumference.</h1>
            <h2>Current PI value:</h2>
            <Pi addPrecision={addPrecision} piValue={piValue} />
            <SunCircumference sunCircumference={circumference} />
            {/* <Status status={status} /> */}
        </StyledView>
    )
}

export default App;