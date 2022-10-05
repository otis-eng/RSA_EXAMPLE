const crypto = require("crypto");
const { application } = require("express");
const express = require("express")
const app = express();
const router = require("./router");
const { generateKeyPair } = require('crypto');
let publicKeys;
let privateKeys;
generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
}, (err, publicKey, privateKey) => {
    publicKeys = publicKey
    privateKeys = privateKey
  // Handle errors and use the generated key pair.
});

app.use('/get_publickey',(req,res) =>{
    res.send(publicKeys)
})

app.use('/',router)
app.listen(4001,() =>{
    console.log("Server server on port 40001")
})