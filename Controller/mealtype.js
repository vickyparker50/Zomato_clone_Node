const mealtype = require ("../Model/mealtype");

exports.getmealtype = (req, res) => {
   // res.status(200).json({message:"Locations Fetched Successfully", location: Location})

   mealtype.find({}, {})
        .then(response => {
            res.status(200).json({
                message:"mealtype Fetched Successfully", 
                mealtype: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}