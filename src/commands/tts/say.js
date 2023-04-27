const { SlashCommandBuilder } = require('discord.js');
const { createAudioPlayer, createAudioResource, getVoiceConnection } = require('@discordjs/voice');
const fetch = require('node-fetch');
const url = require('node:url');
const { writeFile } = require('fs').promises;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Pronounces written text.')
        .addStringOption(option => option.setName('text').setDescription('The text to say').setRequired(true)),

    async execute(interaction) {
        const voiceChannel = interaction.member.voice.channel;
        if (!voiceChannel) {
            return await interaction.reply({ content: 'You must be in a voice channel to use this command!', ephemeral: true });
        };

        const phrase = interaction.options.getString('text');
        if (!phrase || phrase.length > 200) {
            return await interaction.reply({ content: 'Please provide a valid text (maximum 200 characters).', ephemeral: true });
        };

        const params = new url.URLSearchParams(
            {
                text: phrase,
                lang: 'ru-RU',
                voice: 'filipp'
            }
        );
        try {
            const response = await fetch('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize', {
                method: 'post',
                body: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Api-Key ' + process.env.YANDEX_API_KEY,
                },
            });
            const buffer = await response.buffer();
            await writeFile('words.ogg', buffer);

            const player = createAudioPlayer();
            const resource = createAudioResource(process.env.LINK);
            const connection = getVoiceConnection(interaction.channel.guild.id);
            player.play(resource);
            connection.subscribe(player);

            await interaction.reply({ content: 'Saying', ephemeral: true });
            await interaction.deleteReply();
        } catch (error) {
            console.log(error);
            await interaction.reply({ content: 'An error occurred while processing your request. Please try again later.', ephemeral: true });
        }
    },
};
