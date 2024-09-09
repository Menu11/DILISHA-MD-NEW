const {cmd , commands} = require('../command')


cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me a url or tittle")
const search = await yts(q)
const data = search.videos[0];
const url  = data.url

let desc = ' 
⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕
___________________________________________
⚡⚡⚡⚡⚡VIDEO DOWNLOADER⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡
> tittle: ${data.tittle}
> despcription: ${data.description}
> time: ${data.time}
> ago: ${data.ago}
> views: ${data.views}

MADE BY ⚡DILISHA⚡ ☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯
____________________________________________
⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕
'

await conn.sendmessage(from,{image:{url: data. thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

// send video + document message
await conn.sendmessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"}quoted:mek})
await conn.sendmessage(from,{document: {url:downloadUrl}, mimetype:"video/mp4",fileName:data.tittle + ".mp4",caption:"MADE IN ⭕ DILISHA ⭕}quoted:mek})



}catch(e){
console.log(e)
reply('${e}')
}
})
