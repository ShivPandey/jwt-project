require('dotenv').config();
require("./configs/database").connect();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/user');

const app = express();

app.use(express.json());
// sign up User
app.post('/auth/sign-up', async (req, res) => {
    // Sign Up logic starts here
    try {
        // get user input
        const { firstName, lastName, email, password } = req.body;

        // validate user input
        if (!(email && password && firstName && lastName)) {
            res.status(400).send("All input are required");
        }

        // check if user already exist
        const user = await User.findOne({ email });
        if (user) {
            res.status(409).send("User already exists. Please Login")
        }

        // Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        const createdUser = await User.create({
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        // create token
        const token = jwt.sign(
            { userId: createdUser._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: '1hr'
            }
        );
        // save user token
        createdUser.token = token;

        // return createdUser
        res.status(200).json(createdUser);
    } catch (error) {
        console.log(error);
    }
});
// sign in user
app.post('/auth/sign-in', async (req, res) => {
    // Sign In logic start hear
    try {
        // get user input
        const { email, password } = req.body;
        // validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // validate user
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // create token
            const token = jwt.sign(
                { userId: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '1h'
                }
            );

            // save user token
            user.token = token;
            // send response
            res.status(200).json(user);
        } else {
            res.status(400).send("Invalid Credentials");
        }


    } catch (error) {
        console.log(error);
    }
});


module.exports = app;