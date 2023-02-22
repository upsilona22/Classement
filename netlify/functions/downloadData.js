const { TOKEN, WEB3_KEY, NFT_PORT_KEY } = process.env;

const fs = require("fs");
const axios = require("axios").default;

const token = process.TOKEN;

const { Web3Storage, File, Blob } = require("web3.storage");
const Web3Client = new Web3Storage({ token: WEB3_KEY });

var waitingRequests = {};

client.on("ready", function() {
    console.log("ONLINE");
});
    const fileUpload = async (name) => {
        try {
            const files = await getFilesFromPath("leaderboard.json");
            const cid = await storage.put(files, {
                name: `${name}.json`,
                wrapWithDirectory: false,
            });
            console.log(cid);
            return cid;
        } catch (error) {
            console.log(error);
            return;
        }
    };
}

const saveCID = async (cid, tags) => {
    try {
        const { data, error, status } = await supabase
            .from("ipfscid")
            .insert({ type: "question", cid: cid, tags: tags });

        console.log("Data ", data);
        console.log("ERROR ", error);
        console.log("Status ", status);
        return status
    } catch (error) {
        console.log(error);
        return;
    }
}

const createFileAndUpload = async (data, name) => {
	try {
		fs.writeFileSync("file.json", JSON.stringify(data));
		const cid = await fileUpload(name);
        await saveCID(cid, data.tags)
		return cid;
	} catch (error) {
		console.log(error);
		return;
	}
};

const getTags = (message) => {
	let tags = [];
	message.split(" ").forEach((word) => {
		if (word.includes("#")) {
			tags.push(word);
		}
	});

	return tags.join(" ");
};

module.exports = { createFileAndUpload, getTags };
