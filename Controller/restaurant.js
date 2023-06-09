const Restaurant = require ("../Model/restaurant");

exports.restaurantbyid = (req, res) => {
    const {locid} = req.params;
    Restaurant.find({city:locid},{})
    .then(response =>{
        res.status(200).json({
            message:"Restaurants Fetched Successfully",
            restaurants : response})
        })
    .catch(err => {
            res.status(500).json({ error:err })
        })   
}
// filter parts

exports.filterRestaurant = (req, res) => {
    let { mealtype, location, cuisine, lcost, hcost, sort, page } = req.body;

    sort=sort ? sort:-1  
    page=page ? page :1;
    const itemperpage = 2;
    let startindex = page*itemperpage-itemperpage;
    let endindex =page*itemperpage;

    let filterObj = {};

    mealtype && (filterObj["type.mealtype"] = mealtype);
    location && (filterObj["city"] = location);
    cuisine && (filterObj["Cuisine.cuisine"] = { $in: cuisine });
    lcost && hcost && (filterObj["cost"] = { $gte: lcost, $lte: hcost });

    console.log(filterObj);

    Restaurant.find(filterObj).sort({cost:sort})
    .then(response => {
        const filterResponse = response.slice(startindex,endindex);
        res.status(200).json({
            message:"Restaurants filtered Successfully", 
            restaurants : filterResponse
        })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
}

// Restaurant Details:

exports.getRestaurantsById =(req, res)=> {
    const {id} = req.params;
    Restaurant.findById(id)
    .then(response =>{
        res.status(200).json({
            message:"Restaurants Fetched Successfully",
            restaurants : response
        })
    })
    .catch(err => {
            res.status(500).json({ error:err })
        })   
}
