const {cmd , commands} = require('../command')
const fg =  require('api-dylux')
const gls = require('sinhalasub.lk')


cmd({
    pattern: "movie",
    desc: "download movie",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me a url or tittle")
const search = await gls(q)
const data = search.videos[0];
const url  = data.url

let desc = ` 
      SRILANKA NO1 WHATSAPP MUSIC GROUP 🇱🇰 
                HAPPY LIFE YOU 🥸
____________________________________________
⭕ tittle: ${data.tittle}
⭕ despcription: ${data.description}
⭕ time: ${data.time}
⭕ ago: ${data.ago}
⭕ imdb: ${data.views}
⭕ genres:${data.genres}
____________________________________________

        A RESPONCE BY FAMILY MUSIC
                   POWER BY ⭕DILISHA⭕
                       ⚡BAD LOVING MUSIC⚡
`


await conn.sendMessage(from,{image:{url: data. thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.glv(url)
let downloadUrl = down.dl_url

// send video + document message
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY DILISHA"},{quoted:mek})


}catch(e){
console.log(e)
reply('${e}')
}
})
