// Note that there is no license, you are free to use this as you wish

module.exports = {
seed: function(seed,t) {
  var t = (t) ? t : "iehwfyqdhihdihe3jd";
  var cipher = crypto.createCipher('aes192',seed)
var result = cipher.update(t,'utf8','hex')
  result += cipher.final('hex');
return result;
},
centerHor: function(a,g,k) {
if (!k) k = a.length
var f = Math.abs(a.length - k)
var b = (g - k - 1) / 2
var c = "";
for (var i = 0; i < b; i++) {
c += " ";
}
c += a;
return this.main.fill(c,g,c.length - f)
},
 fill: function(a,b,k) {
a = a.toString()
if (!k) k = a.length
var c = b - k
for (var i = 0; i < c; i++) {
a += " ";
}
return a
},
wrap: function(string,maxlen) {
var results = [];

while (0==0) {
if (string.length < maxlen) {
results.push(string);
break;
}
var s = string.substring(0,maxlen);
var index = s.lastIndexOf(" ");
if (index != -1) {
results.push(s.substring(0,index))
string = string.substring(index + 1)
} else {
results.push(string);
break;
}}
return results;
}

}
