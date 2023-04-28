# MyDscBot

MyDscBot is a Discord bot built using [Discord.js](https://discord.js.org/) that can pronounce text messages using the Yandex Text-to-Speech API.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To use this bot, you'll need:

- A [Discord](https://discord.com/login) account and server
- A Discord bot created through the [Discord Developer Portal](https://discord.com/developers/applications)
- [Yandex Cloud account](https://auth.cloud.yandex.ru/login?client_id=yc.oauth.console&redirectUrl=https%3A%2F%2Fauth.cloud.yandex.ru%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3Dyc.oauth.console%26scope%3Dopenid%26redirect_uri%3Dhttps%253A%252F%252Fconsole.cloud.yandex.ru%252Fauth%252Fcallback%26state%3D3fVlNhPAvgZQL5XDLjAfc6EM42FzOvmuZB7Sz) for TTS feature


### Dependencies

- `@discordjs/opus`: A library that provides encoding and decoding of Opus audio data.
- `@discordjs/voice`: A library that provides a high-level interface for interacting with Discord voice connections.
- `discord.js`: A library for interacting with the Discord API.
- `dotenv`: A zero-dependency module that loads environment variables from a .env file into process.env.
- `ffmpeg-static`: A module that provides static binaries for FFmpeg.
- `libsodium-wrappers`: A set of cryptographic primitives built on top of libsodium.
- `node-fetch`: A module that provides a way to make HTTP requests from Node.js.
- `url`: A Node.js built-in module that provides utilities for working with URLs.
- `@discordjs/rest`: A library that provides an interface for making REST API requests to Discord.


### Installation

1. Clone the repository: `git clone https://github.com/alexfcb159/MyDscBot.git`
2. Install dependencies
3. Create a `.env` file in the root directory of the project with the following content:

    ```
    TOKEN=your_discord_bot_token
    GUILD_ID=your_discord_server_id
    CLIENT_ID=your_discord_bot_id
    YANDEX_API_KEY=your_yandex_api_key
    LINK=location_to_save_your_audio_file
    ```
   Replace `your_discord_bot_token` with the token of your Discord bot from the Discord Developer Portal, and `your_yandex_api_key` with your API key from the Yandex Cloud Console.
4. Deploy commands with `node src/register-commands.js`

## Usage

1. Start the bot: `node src/index.js`
2. Invite the bot to your Discord server using the following link (replace `<client_id>` with the client ID of your Discord bot from the Discord Developer Portal): `https://discord.com/api/oauth2/authorize?client_id=<client_id>&permissions=8&scope=bot%20applications.commands`
3. Join a voice channel, invite the bot with the `/join` command and use the `/say` command in a text channel to make the bot pronounce the provided text. Example usage: `/say --Привет, мир!`
4. Kick the bot from a voice channel with `/leave` command

## Known Issues

- The bot currently only supports the Russian language for text-to-speech synthesis.

## Built With

- [Node.js](https://nodejs.org/)
- [Discord.js](https://discord.js.org/)
- [Yandex SpeechKit API](https://cloud.yandex.com/en/docs/speechkit/tts/)