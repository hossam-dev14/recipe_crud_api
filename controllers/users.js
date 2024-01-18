const User = require('../models/user.js');
const bcrypt = require('bcryptjs')

// ************* Create: POST /api/users 
const createUser = (async (req, res, next) => {
    const { name, email} = req.body;
  
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      passwordHash: bcrypt.hashSync(req.body.passwordHash, 10)
    });
  
    // Save user to the database
    user.save()
    .then(() => {
        if(!user)
        return res.status(400).send('the user cannot be created!')

        res.status(201).json({ 
            message: 'User created successfully!'
        });
    }
    ).catch(
        (error) => {
          res.status(400).json({
            error: error
        });
    });
    // res.send(user)
})

// // ************* Retrive : GET /api/users 
const getUsers = (async (req, res) => {
    const userList = await User.find().select('-passwordHash');
    // .select('-passwordHash'); // don't display the passwordHash in this api end point
    // .select('name phone email'); // don't show only name, phone and email in this api end point
    if(!userList) {
        res.status(500).json({success: false})
    }
    res.status(200).json({ userList })

});


// // ************* Retrive by id : GET /api/users:id
const getUser = (async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select('-passwordHash');
  if(!user) {
      res.status(500).json({success: false})
  }
  res.status(200).json({ user})
});


module.exports = {
    createUser,
    getUsers,
    getUser
}