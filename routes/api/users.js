const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require ('jsonwebtoken');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../validations/register')
const validateLoginInput = require('../../validations/login');

const router = express.Router();

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

  
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
      
          return res.status(400).json({email: "A user has already registered with this address"})
        } else {
         
          const newUser = new User({
            email: req.body.email,
            password: req.body.password
          })
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                    const payload = {id: user.id, email: user.email};

                    jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    });
                })
                .catch(err => console.log(err));
            })
          })
        }
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({email})
      .then(user => {
        if (!user) {
          return res.status(404).json({email: 'This user does not exist'});
        }

        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              const payload = {
                id: user.id,
                email: user.email
              }
              jwt.sign(payload,
                       keys.secretOrKey,
                       { expiresIn: 3600 },
                        (err, token) => {
                  res.json({ 
                      success: true,
                      token: "Bearer " + token
                  });
              })
            } else {
              return res.status(400).json({password: 'Incorrect password'});
            }
          })
      })
})

module.exports = router;