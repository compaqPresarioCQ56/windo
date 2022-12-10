$.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log(e.ip);
    if (e.ip === '98.167.96.150' || e.ip === '169.241.65.55' || e.ip === '67.220.180.82') {
console.log("bad ip")
window.location.replace('banned.html')
} else {
console.log("piss")
}
});

// IP's Vulnerable to banishment
// Harmony (home):  e.ip === '70.173.92.122' ||
// Aves (home):  e.ip === '98.181.137.149' ||
//My Home IP:  || e.ip === '174.67.147.10'
