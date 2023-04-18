const { SlashCommandBuilder } = require('discord.js');
const { createAudioPlayer, createAudioResource, getVoiceConnection} = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Pronounces written text.'),
    async execute(interaction) {
        const player = createAudioPlayer();
        const resource = createAudioResource(process.env.link);
        const connection = getVoiceConnection(interaction.channel.guild.id);
        player.play(resource);
        connection.subscribe(player);
        await interaction.reply({ content: 'Playing', ephemeral: true });
        await interaction.deleteReply();
    },
};