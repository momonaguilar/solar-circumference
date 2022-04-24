# solar-circumference server
This project aims to calculate solar circumference as precise as possible by allowing value of PI to be used in calculating as expandable as possible.

## setup
1. Clone repository
2. Run the server application

[SERVER]

```sh
cd server
npm install
npm start
```

Backend IP : localhost:9000
Server app is also hosted in [Heroku](https://solar-circumference-server.herokuapp.com/)

## endpoints
1. ```GET `/api/circumference/sun` ``` - returns calculated sun circumference 
2. ```PUT `/api/pi/addPrecision` ``` - updates the PI precision by adding next digit
3. ```GET `/api/pi/getValue` ``` - returns the PI value
4. ```GET `/api/pi/reset` ``` - resets the PI value to 3

## server short-falls

1. Due to javascript limitation, the PI digits that are treated as numbers are limited. Although PI precisions are calculated until infinity, the Number datatype can only hold upto a finite number of bits representing the digits. Example: The PI value that can be used to calculate sun circumference is 3.141592653589793, which generates a sun circumference of 4,375,233.256801433. Even if server can continue to calculate the next PI digit, the sun circumference calculation eventually stops.

![Unable to calculate after 15 decimals of PI](https://github.com/momonaguilar/solar-circumference/blob/main/assets/known-issue.png?raw=true)


2. No load testing performed to assess how many request can the server cater per unit time. The server uses file to save the PI and DECIMAL values changed everytime there is request to add PI precision. Hence, if there are multiple request to add precision from client A, B, C at exactly same time, and client D gets the PI value, the server app might not able to return the correct PI precision.

## opportunities moving forward

1. Use a database to save sun circumference that cannot be handled (i.e, too many digits of PI to use in calculating).
2. Use a server application that can handle big integer (perhaps Golang is a good candiate?) Initially this server app is designed to be implemented in that. A great opportunity to do it in Go, using the initial `server_go` setup.
3. Expand the application to not only measure the circumference of the sun, but to also other heavenly bodies.
4. Introduce load testing using forever, artillery.
5. Automate deployments