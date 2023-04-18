const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel, generateDependencyReport } = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Joins active voice channel.'),
    async execute(interaction) {
        // console.log(generateDependencyReport());
        await joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.channel.guild.voiceAdapterCreator,
        });
        await interaction.reply({ content: 'Bot joined', ephemeral: true });
        await interaction.deleteReply();
    },
};