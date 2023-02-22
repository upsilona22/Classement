const { TOKEN, WEB3_KEY, NFT_PORT_KEY } = process.env;

const fs = require("fs");
const axios = require("axios").default;
const { Client, GatewayIntentBits, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, InteractionType } = require("discord.js");

client.login("TOKEN").catch(console.error);

const { Web3Storage, File, Blob } = require("web3.storage");
const Web3Client = new Web3Storage({ token: WEB3_KEY });

var waitingRequests = {};

client.on("ready", function() {
    console.log("ONLINE");
});
