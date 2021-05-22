const express = require("express");
const arius = express();
const tokenler = ["asdf", "naber", "arius"]

arius.get('*', (req, res) => {
    
	// ?auth=TOKEN var mı yok mu ?
    if  (!req.query.auth) return res.sendStatus(404);

    // token yanlışsa
    if(!(tokenler.includes(req.query.auth))) return res.sendStatus(403);

    // token doğruysa
    if(tokenler.includes(req.query.auth)) return res.sendStatus(200);
})

arius.listen(8000, function() {
    console.log(this.address().port + ' portunda yayındayım')
})