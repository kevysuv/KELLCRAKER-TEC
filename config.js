const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZkeU9KejZqR25UMEhhZE9Kb3NIb0t6NVFWcndPSEg2Z3NvQWlLL3lFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDF0cWNYanpKZjd3bnM0NmhvWVlaRHZpeWUzZWpRc3U0WkxwL3FRVmNuWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQWRrV0EwMDNZNmNhakxDSVhQVDJNWk1GL1VTSnNLYzhxWWZibkhneVdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJZXpTSEJmU291Y1M4dGgvbzgrZnRETzRNT3ArQThMaktKYThmYVZPMkNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHbjVNZzhib2VEZnlBaUdGQktxSXY2dEd5Qmdwck5uWW1jTnN5K1RQV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ0UTBVbHVFU2JlMVFSNWcwclIwL1l1NXFuUmtkNDFpdndGaUJqUk02bVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJDVmgwbFBDOTM0dDdMWlN4ZFhhSkgxZDdpQjg5L0FXYlIva2R2bW5sUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzJsWGcxdWtENUhRVlRtKzY2TWdzTjI4c01EWlVlRmUxb0tVRTJkZDFDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ0anN2endlQ05BSlZjWUdLaUNiNkFsdzBMZlQveElPWlEzdG9tUXAwTGgzbGZlVkFEaWhsOE5RbFdvZnh3L09OTk4rSWx1SXJTMEZ1MEF0OUtyZ2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJqQVFhc0J5eDFPYVE1Mk1DbDEyZUZDV1BWclBxQldQaEl1aitwdXFKZjVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc0MzEyOTk1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENTA0MUY3ODlGRDQyQzY2OTI1NzI2N0QwMTkxODhGNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0OTE4MTgxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI3RDVMUjI2QyIsIm1lIjp7ImlkIjoiMjU1NzQzMTI5OTU5OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyODA3NjY3OTM2NzQ5NjA6NkBsaWQiLCJuYW1lIjoia2VsdmluIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK3psNDRERUp2YTU4UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzV0NkL1ViWkR0MXMzZURxRldTOFdYVmEreTlZajNtNmVSblptelA5aFFjPSIsImFjY291bnRTaWduYXR1cmUiOiJCOXFiVEtrdHFXWnl6bWk2Ym5XS1JwKzAxeE95TUR5M2RTMU56Z1lIdzM2RlRlT0U4RFFmaVk1ZDRMSGFISmxBMy9Bc2hNQXlFYTdocDZqTmM5T1FDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZkdZTmhIT0xweTU0akU3dDM2YWUxN3BrUm1tVEEzcjFodWQ2NDkwNUJHcHdQa3RhVm5MMHJVVndyWjJ0VXQ4YmxqNmp5V2JnWkszMXBOK29HaXR3alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NDMxMjk5NTk6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiRmduZjFHMlE3ZGJOM2c2aFZrdkZsMVd2c3ZXSTk1dW5rWjJac3ovWVVIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ5MTgxNzcsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzQvIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY  KELLCRAKER-TEC🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ai2w76.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KELLCRAKER-TEC",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KELLCRAKER-TEC",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "255748129959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*KelvinMM Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ KelvinMM Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ai2w76.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "255748129959",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
