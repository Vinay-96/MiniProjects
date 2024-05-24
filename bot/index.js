const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    let url = message.content.split("create")[1];
    if (url) {
      message.reply({
        content: "Generating short ID for" + url,
      });
    }
  }
  message.reply({
    content: "Hello i'm lockdown's bot",
  });
});

client.on("interactionCreate", (interaction) => {
  console.log("---interaction----->", interaction);
  interaction.reply({
    content: "pong..!!!",
  });
});

client.login(process.env.BOT_TOKEN);
