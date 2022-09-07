const fs = require('fs');
const path = require('path');
const { admin } = require('../controllers/mainController');

const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));

module.exports=(req,res,next)=>{
    if (users.includes(req.query.user.toLowerCase())){
        return next()
    }else{ 
        return res.redirect('/login?error=true')
    }
}