
const fs = require('fs');
const { generatePiDigits } = require('./spigot'); // main algo to calculate pi, replaceable with other algo as and when needed
const { parse, stringify } = require('envfile');
const pathToenvFile = "./pi.config";

async function addPiPrecision() {
    let latestPiValue = "";
    let it = generatePiDigits();

    var decimals = await getDecimalValue();

    // append digit to pi
    for (let i = 0; i <= decimals; i++){
        latestPiValue += it.next().value;
    }

    // write new config variable values
    await setConfigValue("PI", latestPiValue);
    await setConfigValue("DECIMAL", decimals + 1);

    console.table("DEBUG: Latest PI value set to " + format(latestPiValue));
    return latestPiValue;
}

async function getPiValue() {
    var PI = await getConfigValue("PI");
    if (isNaN(PI)) {
        PI = 3
    }
    return PI; 
}

async function getDecimalValue() {
    var DECIMAL = await getConfigValue("DECIMAL");
    return (Number(DECIMAL)); 
}

function getConfigValue(configKey = "PI") {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToenvFile, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            var result = parse(data);
            var configValue = result[configKey].toString();
            //console.log(configKey + ":" + configValue);

            if (configKey === "PI") {
                resolve(configValue.length === 1 ? configValue : format(configValue)); 
            }
            else
            {
                resolve(Number(configValue));
            }
        });
    });
}

function setConfigValue(key, value) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToenvFile, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var result = parse(data);
            result[key] = value;
            //console.table("DEBUG:" + JSON.stringify(result));
            fs.writeFile(pathToenvFile, stringify(result), function (err) {
                if (err) {
                    return console.log(err);
                }
                //console.log("File Saved");
                resolve();
            })

        });
    });
}

async function computeSunCircumference(radius) {
    const PI = await getPiValue();
    //console.log(PI);
    return 2 * Number(PI) * radius;
}

// format pi with decimal value
function format(str) {
    return str.substring(0, 1) + "." + str.substring(1, str.length);
}

module.exports = {
    addPiPrecision,
    getPiValue,
    computeSunCircumference,
    format
}