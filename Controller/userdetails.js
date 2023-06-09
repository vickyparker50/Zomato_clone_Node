const userdetails = require("../Model/userdetails");

exports.postuserdetails =(req,res)=>{
    const{ name, mobile_number, address}=req.body;
    const Userdetailobj = new userdetails({
        name, 
        mobile_number, 
        address
    })
    Userdetailobj.save()
    .then(response =>{
        res.status(200).json({
            message:"user details saved sucessfully",
            userdetails : response})
        })
    .catch(err => {
            res.status(500).json({ error:err })
        })
}







