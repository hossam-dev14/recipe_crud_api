const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();


// ************* SignUp *************
const userSignup = (async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const passwordhash = await bcrypt.hash(password, 10); // "hash" is asynchronous and "hashSync" is synschronous
    const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordhash
    });  

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
    const { email, password } = req.body; 
    const existingUser = await User.findOne({email:email});
    process.env.JWT_SECRET;

    if(!existingUser){
        return res.status(401).send('The user not found');
    }

    // Comparing password 
    const comparingBcryptPass = await bcrypt.compare(password, existingUser.password);
    if(!comparingBcryptPass) {
        return res.status(400).send('Invalid Credential!');
    }

    const token = jwt.sign(
        {
            email:existingUser.email, id:existingUser._id
        },
        process.env.JWT_SECRET,
        {expiresIn : '1d'}
    )
        
    res.status(200).json({
        message: 'User is logged in',
        token: token
        }
    )

    // next(new CustomError(err.message, "Unable to Login"))

});


module.exports = {
    userSignup,
    userLogin
}