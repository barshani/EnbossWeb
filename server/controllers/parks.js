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
    const sql = "SELECT * FROM parks WHERE id = ?";

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
            parkNameHeb: joi.string().required().min(2).max(100),
            address: joi.string().required().min(2).max(100),
            addressHeb: joi.string().required().min(2).max(100),
            img: joi.string().allow(""),
            imgAlt: joi.string().allow(""),
            area: joi.string().required(),
            areaHeb: joi.string().required(),
            video: joi.string().allow(""),
            map: joi.string().allow(""),
            lightHourHeb: joi.string().allow(""),
            openHourHeb: joi.string().required(),
            lightHour: joi.string().allow(""),
            openHour: joi.string().required(),
            year: joi.number().required(),
            parking: joi.boolean().required(),
            helmet: joi.boolean().required(),
            cooler: joi.boolean().required(),
            price: joi.boolean().required(),
            shade: joi.boolean().required(),
            food: joi.boolean().required(),
            seat: joi.boolean().required(),
            toilet: joi.boolean().required(),
            guard: joi.boolean().required(),
            bomb: joi.boolean().required(),
            note: joi.string().allow(""),
            note1: joi.string().allow(""),
            note2: joi.string().allow(""),
            note3: joi.string().allow(""),
            noteHeb: joi.string().allow(""),
            noteHeb1: joi.string().allow(""),
            noteHeb2: joi.string().allow(""),
            noteHeb3: joi.string().allow(""),
        })

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.error(error.details[0].message);
            res.status(400).json({ error: "invalid data" });
            return;
        }

        const sql = `INSERT INTO parks (parkName, parkNameHeb, address, addressHeb, img, imgAlt, area, areaHeb, video, map, lightHourHeb, openHourHeb, lightHour, openHour, year, parking, helmet, cooler, price, shade, food, seat, toilet, guard, bomb, note, note1, note2, note3, noteHeb, noteHeb1, noteHeb2, noteHeb3) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

        try {
            const [result] = await database.query(sql, [value.parkName, value.parkNameHeb, value.address, value.addressHeb, value.img, value.imgAlt, value.area, value.areaHeb, value.video, value.map, value.lightHourHeb, value.openHourHeb, value.lightHour, value.openHour, value.year, value.parking, value.helmet, value.cooler, value.price, value.shade, value.food, value.seat, value.toilet, value.guard, value.bomb, value.note, value.note1, value.note2, value.note3, value.noteHeb, value.noteHeb1, value.noteHeb2, value.noteHeb3]);
            res.json({ ...value, id: result.insertId });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    },
    updateById: async function (req, res, next) {
    const parkId = req.params.id;
    const value = req.body;
    const sql = "UPDATE parks SET parkName = ?, parkNameHeb = ?, address = ?, addressHeb = ?, img = ?, imgAlt = ?, area = ?, areaHeb = ?, video = ?, map = ?, lightHourHeb = ?, openHourHeb = ?, lightHour = ?, openHour = ?, year = ?, parking = ?, helmet = ?, cooler = ?, price = ?, shade = ?, food = ?, seat = ?, toilet = ?, guard = ?, bomb = ?, note = ?, note1 = ?, note2 = ?, note3 = ?, noteHeb = ?, noteHeb1 = ?, noteHeb2 = ?, noteHeb3 = ?";

    try {
        const [result] = await database.query(sql, [value.parkName, value.parkNameHeb, value.address, value.addressHeb, value.img, value.imgAlt, value.area, value.areaHeb, value.video, value.map, value.lightHourHeb, value.openHourHeb, value.lightHour, value.openHour, value.year, value.parking, value.helmet, value.cooler, value.price, value.shade, value.food, value.seat, value.toilet, value.guard, value.bomb, value.note, value.note1, value.note2, value.note3, value.noteHeb, value.noteHeb1, value.noteHeb2, value.noteHeb3, parkId]);
        
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