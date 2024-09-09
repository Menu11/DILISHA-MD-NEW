const {cmd , commands} = require('../command')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me a url or tittle")
const search = await yts(q)
const data = search.videos[0];
const url  = data.url

let desc = ` 
⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕
___________________________________________
⚡⚡⚡⚡⚡SONG DOWNLOADER⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡
> tittle: ${data.tittle}
> despcription: ${data.description}
> time: ${data.time}
> ago: ${data.ago}
> views: ${data.views}

MADE BY ⚡DILISHA⚡ ☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯
____________________________________________
⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕
`

await conn.sendmessage(from,{image:{url: data. thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

// send audio + document message
await conn.sendmessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendmessage(from,{document: {url:downloadUrl}, mimetype:"audio/mpeg",fileName:data.tittle + ".mp3",caption:"MADE IN ⭕ DILISHA ⭕"},{quoted:mek})



}catch(e){
console.log(e)
reply('${e}')
}
})
