const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG ||"https://telegra.ph/file/cad7038fe82e47f79c609.jpg",
ALIVE_MSG: process.env.ALIVE_IMG ||"⭕NAME - DILISHA-MD-NEW 🇱🇰
⭕SERVER - javascript 🐵
⭕DEVELOPER - DILISHA ❤
⭕DETAILE - ALLOW ACCESS
⭕SRILANKAN NO1 WHATSAPP BOT",
};
