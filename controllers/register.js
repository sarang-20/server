const usermodel = require('../models/Register');
const express = require('express');
const nodemailer = require('nodemailer');

exports.register = async function (req, res) {
  console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    password,
    gender,
    hobbies,
    fileUpload,
  } = req.body;

  try {
    const userExists = await usermodel.findOne({ email });
    const usernameExists = await usermodel.findOne({ firstName });

    if (userExists && usernameExists) {
      return res.status(422).json({
        error: "Email and name already exist",
      });
    } else {
      const newUser = new usermodel({
        firstName,
        lastName,
        email,
        password,
        gender,
        hobbies,
        fileUpload,
      });

      const savedUser = await newUser.save();

      if (savedUser) {
        console.log("User created successfully");
        
        res.status(200).json({ message: 'User registered successfully' });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login=async function(req,res)
{
  const {
    email,
    password
  } = req.body;
  try {
    const user = await usermodel.findOne({ email:email });
    if (user) {
       if(user.email && user.password){
        return res.render("/Users/sarangaghara/Documents/project5/form/src/components/Home.js");
      } 
     else if (password!==user.password) {
        return res.status(400).json({
          error: "password incorrect"
        });
      }
      else {
        
          console.log("verifymail")

        
        return res.status(201).json(user);

      }
    }else{
      return res.status(400).send({
        error: "invailad email"
      });
    }
  } catch (err) {
    console.log(err);
  }
}
