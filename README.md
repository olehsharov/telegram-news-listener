
# Prerequisites
\
You will need to get apiId and apiHash from https://my.telegram.org
Login your using phone number.
Rename `.env.example` to .env\
Save `apiId` and `apiHash` to .env

# Installation
\
Install dependencies\
\
`npm run i`\
\
Run the thing\
\
`node main.js`\
\
Type you phone number that you used to get apiId and apiHash,\
you will receive a login code that you type next.\
This is asked only once, when starting an app.\
Than it will write session string to file and read it on app start.
channels.txt - contains usernames to listen messages from
