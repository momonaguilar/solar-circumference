import axios from "axios";
const api = () => {
    let obj = axios.create({
        // baseURL: 'http://9000-aa786be3-fb51-4ce6-bd3a-9debcdfb1d87.cs-asia-southeast1-ajrg.cloudshell.dev',
        //baseURL: 'https://frozen-shore-55449.herokuapp.com',
        baseURL: 'http://localhost:9000',
        headers: {'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'},
    });

    return {
        checkHealth: () => {
            return new Promise(async (resolve, reject) => {
                const { data } = await obj.get(`/`);
                resolve(data);
            });
        },
        getPiValue: () => {
            return new Promise(async (resolve, reject) => {
                const { data } = await obj.get(`/api/pi/getValue`);
                resolve(data);
            });
        },
        addPrecision: () => {
            return new Promise(async (resolve, reject) => {
                const { data } = await obj.put(`/api/pi/addPrecision`);
                resolve(data);
            });
        },
        getSunCircumference: () => {
            return new Promise(async (resolve, reject) => {
                const { data } = await obj.get(`/api/circumference/sun`);
                resolve(data);
            });
        },
    };
};

export default api;