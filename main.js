require('dotenv').config();
const telegram = require('telegram');
const session = require('telegram/sessions');
const input = require('input');
const fs = require('fs');
const { NewMessage } = require('telegram/events');

const sessionId = fs.existsSync('.session') ? fs.readFileSync('.session').toString() : '';
const stringSession = new session.StringSession(sessionId);

let usernamesContent = fs.readFileSync('usernames.allowed').toString();
let usernames = usernamesContent.split('\n').map(c => c.trim());

async function eventPrint(event) {
    const userName  = event.message._sender ? event.message._sender.username : null;
    const text = event.message.message;
    if (usernames.includes(userName)) {
        console.log(`@${userName} [${phone}]: ${text}`);
    }
}

(async () => {
    const client = new telegram.TelegramClient(stringSession, 
        parseInt(process.env.API_ID),
        process.env.API_HASH, 
        {connectionRetries: 5});

    await client.start({
        phoneNumber: async () => await input.text("Please enter your number: "),
        phoneCode: async () => await input.text("Please enter the code you received: "),
        onError: (err) => console.log(err),
    });

    fs.writeFileSync('.session', client.session.save());
    client.addEventHandler(eventPrint, new NewMessage({}));
})();
