const {encrypt, decrypt} = require("./crypto");
const axios = require("axios").default;
const getData = async (req,res) =>{
    // call data to server B
    const data = await axios.get("http://localhost:4000/get-data");
    const privateKey = global.privateKey
    const value = decrypt(privateKey,data)
    return res.send(value)
}

async function sendData(req,res){
    // encrypt and for server anther get
    var text = "Hello this is server  A"
    const publicKey = await axios.get("http://localhost:4000/get_publickey");
    const data = encrypt(publicKey.data,text);
    return res.send(data)
}

module.exports = {
    getData,
    sendData
}