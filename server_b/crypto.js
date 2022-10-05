const crypto = require("crypto");

const encrypt = (publicKey,data)=>{
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(data));
    return encrypted.toString("base64");
}

const decrypt = (privateKey,data)=>{
    try{
        const decrypted = crypto.privateDecrypt({key:privateKey,padding:crypto.constants.RSA_PKCS1_OAEP_PADDING,passphrase:"top secret"}, Buffer.from(data,"base64"));
        return decrypted.toString("utf8");
    }catch(e){
        console.log(
            "error",e
        )
    }
}


module.exports = {
    encrypt,
    decrypt,
}