const User = require('../models/user.js');
const  { validateSignup, validateLogin } = require('../joi/validate.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


// ************* SignUp *************
const userSignup = (async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    // Validate input using Joi schema
    const { error } = validateSignup(req.body)
        if (error) {
            res.status(400).json({ message: error.details[0].message })
        return
    }

    // "hash" is asynchronous and "hashSync" is synschronous.
    const passwordhash = await bcrypt.hash(password, 10); 
    const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordhash
    });


    // Check if the email already exists
    const existUser = await User.findOne({ email })
    if (existUser) {
        res.status(409).json({
          message:
            'This email already exist, enter a new email!',
        })
        return
    }

    // Save user to the database
    user.save()
    .then(() => {
        if(!user) {
            return res.status(400).send('the user cannot be created!');
        }
        res.status(201).send('User created successfully!');
    }
    ).catch(
        (error) => {
          res.status(400).json({
            error: error
        });
        console.log(error);
    });
});


// ************* Login *************
const userLogin = (async (req, res, next) => {
    const { email, password} = req.body;

    // const user = await User.findById(req.body._id).select('firstName');
    // console.log('E-mail IS: '+ user)

    // Validate input using Joi schema
    const { error } = validateLogin(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message })
      return
    }
    
    const existingUser = await User.findOne({ email: email });
    process.env.JWT_SECRET;

    if(!existingUser){
        return res.status(401).send('The user not found!');
    }

    // Comparing password 
    const comparingBcryptPass = await bcrypt.compare(password, existingUser.password);
    if(!comparingBcryptPass) {
        return res.status(400).send('Invalid Credential!');
    }

    const token = jwt.sign(
        {
            email: existingUser.email, 
            id: existingUser._id
        },
        process.env.JWT_SECRET,
        {expiresIn: '1d'}
    )
    res.status(200).json({
        message: `Welcome to your account!!`,
        token: token
        }
    )
});


// ************* Retrive all Users  *************
const getUsers = (async (req, res) => {
    const userList = await User.find().select('-password');
    // .select('-password'); // Exclude the password
    // .select('firstName email'); // Include the only name, phone and email in this api end point
    if(!userList)
    { res.status(500).json({ message:'The users was not found!' }) }
    res.status(200).json({ userList })
});


// ************* Retrive User by ID  *************
const getUser = (async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) 
    { res.status(500).json({message: 'The user with the given ID was not found!'}) }
    res.status(200).json({ user })
});


module.exports = {
    userSignup,
    userLogin,
    getUsers,
    getUser
}