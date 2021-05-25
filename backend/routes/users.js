import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import validateRegisterInput from '../validation/register.js';
import validateLoginInput from '../validation/login.js';

import environment from '../config/environment.js'
import User from '../models/User.js';

const router = express.Router();

//Route for adding a new user
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if(!isValid) {
        //http bad request
        return res.status(400).json(errors);
    }
    User.findOne({ name: req.body.name }).then(user => {
        if(user){
            return res.status(400).json({ name: "Username already exists" });
        }
        const newUser = new User({
            name: req.body.name,
            password: req.body.password,
            admin: false
        });

        //Hash User Password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err){
                    throw err;
                }
                newUser.password = hash;
                newUser.save().then(user => res.status(200).json(user))
                .catch(e => console.log(e));
            });
        });
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const name = req.body.name;
    const password = req.body.password;
    User.findOne({ name: req.body.name }).then(user => {
        if(!user){
            return res.status(400).json({ name: "Username doesn't exists" });
        }
    });

    bcrypt.compare(password, user.password).then(isMatch => {
        if(isMatch){
            const payload = {
                id: user.id,
                name: user.name
            };
            jwt.sign(payload, environment.secretOrKey, {expiresIn: 31556926}, 
                (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                }
            );
        }else{
            return res.status(400).json({ passwordincorrect: "Password incorrect" });
        }
    });
});

export default router;


