// Note that there is no license, you are free to use this as you wish

module.exports = {
seed(seed,t) {
  var t = (t) ? t : "iehwfyqdhihdihe3jd";
  var cipher = crypto.createCipher('aes192',seed)
var result = cipher.update(t,'utf8','hex')
  result += cipher.final('hex');
return result;
}

}
