const {send} = require('express/lib/response')
const jsonwebtoken = require('jsonwebtoken')

function auth(req,res,next){
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send({message: 'Access Denied!'})
    }
    try {
        const verifiedUser =jsonwebtoken.verify(token, process.env.TOKEN_SECRET)
        req.user = verifiedUser
        next()
    } catch {
        return res.status(401).send({message:"Invalid token"})
    }
}

module.exports=auth