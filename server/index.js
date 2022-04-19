const express = require("express");
const cors = require('cors');
const app = express();
const port = 9000;

start();

// app entry point
async function start() {
    app.use(express.json());
    app.use(cors());
    app.use(
        express.urlencoded({
            extended: true,
        })
    );

    // server checkhealth status
    app.get('/', (req, res) => {
        res.json({
            message: 'Server checkhealth status OK',
            pid: process.pid
        });
    });

    // indicates that the api is version 1
    app.use("/api", require("./src/routes/index"));

    app.listen(port, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Process ${process.pid} listening at port: ` + port);
        }
    });
};

process.on("UnhandledException", async (error) => {
    console.log("UnhandledException", error);
});