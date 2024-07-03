const database = require('./database');
const joi = require('joi');
module.exports = {
    getAll: async function (req, res, next) {
        const sql = "SELECT * FROM parks";

        try {
            const result = await database.query(sql);
            res.send(result[0]);
        }
        catch (err) {
            console.error(err);
        }
    },
    getOneById: async function (req, res, next) {
    const parkId = req.params.id;
    const sql = "SELECT * FROM parks WHERE parkId = ?";

    try {
        const [result] = await database.query(sql, [parkId]);
        
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.status(404).send({ message: 'Park not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while retrieving the park' });
    }
},
    
    addNew: async function (req, res, next) {
        const schema = joi.object({
            parkName: joi.string().required().min(2).max(100),
            year: joi.number().required(),
            helmet: joi.boolean().required(),
            cooler: joi.boolean().required(),
            price: joi.boolean().required(),
            shade: joi.boolean().required(),
            food: joi.boolean().required(),
            seat: joi.boolean().required(),
            toilet: joi.boolean().required(),
            guard: joi.boolean().required(),
            
        })

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.error(error.details[0].message);
            res.status(400).json({ error: "invalid data" });
            return;
        }

        const sql = `INSERT INTO parks (parkName, year, helmet, cooler, price, shade, food, seat, toilet, guard) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

        try {
            const [result] = await database.query(sql, [value.parkName, value.year, value.helmet, value.cooler, value.price, value.shade, value.food, value.seat ,value.toilet, value.guard]);
            res.json({ ...value, id: result.insertId });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    },
    updateById: async function (req, res, next) {
    const parkId = req.params.id;
    const value = req.body;
    const sql = "UPDATE parks SET parkName = ?, year = ?, helmet = ?, cooler = ?, price = ?, shade = ?, food = ?, seat = ?, toilet = ?, guard = ?  WHERE parkId = ?";

    try {
        const [result] = await database.query(sql, [value.parkName, value.year, value.helmet, value.cooler, value.price, value.shade, value.food,value.seat,value.toilet,value.guard,parkId]);
        
        if (result.affectedRows > 0) {
            res.send({ message: 'Park updated successfully' });
        } else {
            res.status(404).send({ message: 'Park not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while updating the park' });
    }
},
delete: async function (req, res, next) {
    const parkId = req.params.id;
    const value = req.body;
    const sql = "DELETE FROM parks WHERE parkId = ?";

    try {
        const [result] = await database.query(sql, parkId);
        
        if (result.affectedRows > 0) {
            res.send({ message: 'Park deleted successfully' });
        } else {
            res.status(404).send({ message: 'Park not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while updating the park' });
    }
}
}