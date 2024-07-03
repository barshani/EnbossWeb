const database = require('./database');
const joi = require('joi');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require('../config/dev');
module.exports = {
    signup: async function (req, res, next) {
        const schema = joi.object({
            firstName: joi.string().required().min(2).max(100),
            lastName: joi.string().required().min(2).max(100),
            password: joi.string().required(),
            phone: joi.string().required(),
            mail: joi.string().required().email(),
            country: joi.string().required().min(2).max(100),
            city: joi.string().required().min(2).max(100),
            street: joi.string().required().min(2).max(100),
            houseNumber: joi.number().required(),
            floor: joi.number().required(),
            apartment: joi.number().required(),
            entrence: joi.number().required(),
            postalCode: joi.number().required()
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.error(error.details[0].message);
            res.status(400).json({ error: "Invalid data" });
            return;
        }

        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(value.password, saltRounds);
            value.password = hashedPassword;

            const sql = "INSERT INTO users(firstName, lastName, password, phone, mail, country, city, street, houseNumber, floor, apartment, entrence, postalCode)" +
                " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);";

            const [result] = await database.query(sql, Object.values(value));
            res.json({ ...value, id: result.insertId });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    },
     login: async function (req, res, next) {
        const schema = joi.object({
            mail: joi.string().required().email(),
            password: joi.string().required()
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.error(error.details[0].message);
            res.status(400).json({ error: "Invalid data" });
            return;
        }

        const sql = "SELECT * FROM users WHERE mail = ?";

        try {
            const [users] = await database.query(sql, [value.mail]);
            const param = { email: value.mail};
            const token = jwt.sign(param, config.jwt_token, { expiresIn: '72800s' });
            if (users.length === 0) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            
            const user = users[0];
            const isPasswordValid = await bcrypt.compare(value.password, user.password);

            if (!isPasswordValid) {
                res.status(401).json({ error: "Invalid credentials" });
                return;
            }

            res.json({ message: "Login successful", user: { id: user.id, firstName: user.firstName, lastName: user.lastName, mail: user.mail, token: token } });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
};
