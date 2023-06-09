const express = require ("express");

const locationController = require ("../Controller/location");
const mealtypeController = require ("../Controller/mealtype");
const restaurantController = require ("../Controller/restaurant");
const userController = require("../Controller/user");
const menuConteroller= require("../Controller/menu");
const userdetails = require('../Controller/userdetails');

const FormData = require('../Model/FormData');
const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/mealtype',mealtypeController.getmealtype);
route.get('/restaurant/:locid',restaurantController.restaurantbyid);
route.post('/signup',userController.postsingup);
route.post('/login',userController.postlogin);
route.post('/filter',restaurantController.filterRestaurant);
route.get('/restaurantdetails/:id',restaurantController.getRestaurantsById);
route.get('/menuitems/:menuresid',menuConteroller.menuitembyresid);
route.post('/userdetails',userdetails.postuserdetails);


module.exports = route;route.post('/submit-form', async (req, res) => {
    try {
      const { name, email, address, contactNumber } = req.body;
  
      // Create a new instance of the FormData model
      const formData = new FormData({
        name,
        email,
        address,
        contactNumber,
      });
  
      // Save the form data to the database
      await formData.save();
  
      res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('Error saving form data', error);
      res.status(500).json({ message: 'Error saving form data' });
    }
  });

