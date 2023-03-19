function check(req,res,next){
    console.log(req.headers);
    if(req.headers.authorization == 1234){
        next()
    }else{
        res.json({error: "Authorization Failed"})
    }
}

module.exports  = check