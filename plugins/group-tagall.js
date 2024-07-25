let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }
    let pesan = args.join` `
    let oi = `* ⇢Mensaje: ${pesan}`
    let teks = `*⺀𝙸 𝙽 𝚅 𝙾 𝙲 𝙰 𝙽 𝙳 𝙾 - 𝙶 𝚁 𝚄 𝙿 𝙾⺀*
     ${oi}\n\n🥷 *@ff.edu7z:*\n`
    for (let mem of participants) {
    teks += `🥷 @${mem.id.split('@')[0]}\n`}
    teks += `𝐞𝐝𝐮𝟕 𝐛𝐨𝐭`
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
    }
    handler.help = ['tagall <mesaje>','invocar <mesaje>']
    handler.tags = ['group']
    handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
    handler.admin = true
    handler.group = true
    export default handler