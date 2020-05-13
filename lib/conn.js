const {MongoClient} = require("mongodb");

async function conecta(){
	
	try{
		client = await MongoClient.connect(process.env.URI, {urlNewUrlParse: true, useUnifiedTopology: true});
		
		return client;

	} catch(err) {
		throw err;
	}
};

module.exports = conecta();