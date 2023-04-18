const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Leaves active voice channel.'),
    async execute(interaction) {
        const connection = getVoiceConnection(interaction.channel.guild.id);
        connection.destroy();
        await interaction.reply({ content: 'Bot left', ephemeral: true });
        await interaction.deleteReply();
    },
};
