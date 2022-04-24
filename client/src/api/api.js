import axios from "axios";
const api = () => {
    let obj = axios.create({
        baseURL: process.env.REACT_APP_SERVER_URL,
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
        resetPi: () => {
            return new Promise(async (resolve, reject) => {
                const { data } = await obj.get(`/api/pi/reset`);
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