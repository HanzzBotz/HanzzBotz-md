/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6281212083267']
global.premium = ['6281212083267']
global.packname = ''
global.author = ''
global.sessionName = 'Hanzz'
global.prefa = ['','!','.','🐦','🐤','🗿','#','/','$',',']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: '*[❗] Admin Group Only* \nPerintah ini Hanya Dapat Digunakan Oleh Admin Group',
    botAdmin: '*[❗] Bot Admin Only* \nPerintah ini Hanya Dapat Digunakan Saat Bot Menjadi Admin',
    owner: '*[❗] Owner Only* \nPerintah ini Hanya Dapat Digunakan Oleh Owner Bot',
    group: '*[❗] Group Only* \nPerintah ini Hanya Dapat Digunakan Di Group',
    private: '*[❗] Private Only* \nPerintah ini Hanya Dapat Digunakan Di Chat Pribadi',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.thumb = fs.readFileSync('./src/logo2.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
