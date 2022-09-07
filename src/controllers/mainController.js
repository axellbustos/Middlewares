
module.exports={
    index:(req, res)=>{
        res.render('index')
    },
    loadProducts:(req, res)=>{
        res.render('productos')
    },
    about:(req, res)=>{
        res.render('nosotros')
    },
    contact:(req, res)=>{
        res.render('contacto')
    },
    admin:(req, res)=>{
        res.render('admin',{
            user:req.query.user
        })
    },
    login:(req, res)=>{
        res.render('login',{
            msg:req.query.error ? 'No tienes los privilegios para ingresar':null
        })
    }
}