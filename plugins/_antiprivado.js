export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] ʜᴏʟᴀ @${m.sender.split`@`[0]}, 𝙃𝙊𝙇𝘼 𝙎𝙊𝙔 𝙔𝙄𝙍𝙊 𝘽𝙊𝙏 𝙔 𝙈𝙀 𝙍𝙀𝙎𝙀𝙍𝙑𝙊 𝙎𝙊𝙇𝙊 𝘼𝙇 𝙐𝙎𝙊 𝙀𝙉 𝙂𝙍𝙐𝙋𝙊𝙎, 𝙋𝙊𝙍 𝙌𝙐𝙀 𝙎𝙄 𝙂𝙐𝙎𝙏𝘼𝙎 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 𝙈𝙄𝙎 𝙎𝙀𝙍𝙑𝙄𝘾𝙄𝙊𝙎 𝙏𝙀 𝙄𝙉𝙑𝙄𝙏𝙊 𝘼 𝙈𝙄 𝙂𝙍𝙐 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙔 𝘼𝙇𝙂Ú𝙉 𝘿𝙄𝙎𝙏𝙍𝙄𝘽𝙐𝙄𝘿𝙊𝙍 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝙊 𝙋𝙐𝙀𝘿𝘼 𝘼𝙏𝙀𝙉𝘿𝙀𝙍𝙏𝙀 \n https://chat.whatsapp.com/KRnesA7HbidIa3va6X8un8 .*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}


