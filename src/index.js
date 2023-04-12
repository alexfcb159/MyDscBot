require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, //a Guild is a server in DS
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`👌${c.user.tag} is online`);
});

client.on('messageCreate', (message) => {
    if(message.author.bot) {
        return;
    }

    if(message.content === 'hello') {
        message.reply('Hey!');
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('hey!');
    };

    if (interaction.commandName === 'ping') {
        interaction.reply('pong!');
    };
});

client.login(process.env.TOKEN);