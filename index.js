const cheerio = require('cheerio');
const request = require('request-promise');
const TelegramBot = require('node-telegram-bot-api');


const token = '1496652101:AAHNgdmdai4gdUwBYkX59aZHlKCJUDGjGXs';
const bot = new TelegramBot(token, {polling: true});

async function getIp() {
    const $ = await request({
        uri: 'https://www.cual-es-mi-ip.net/',
        transform: body => cheerio.load(body)
    })
    const ip = $('#ip-col > span').html();
    return ip
}

bot.onText(/^\/ip/, async function(msg){
    const ip = await getIp()
    var chatId = msg.chat.id;    
    bot.sendMessage(chatId, `Ip: ${ip}`);
});

