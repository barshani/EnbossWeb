const database = require('./database');
const joi = require('joi');
module.exports = {
    getAll: async function (req, res, next) {
        const sql = "SELECT * FROM guides";

        try {
            const result = await database.query(sql);
            res.send(result[0]);
        }
        catch (err) {
            console.error(err);
        }
    },
    getOneById: async function (req, res, next) {
    const guideId = req.params.id;
    const sql = "SELECT * FROM guides WHERE guideId = ?";

    try {
        const [result] = await database.query(sql, [guideId]);
        
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.status(404).send({ message: 'Guide not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while retrieving the guide' });
    }
},
    
    addNew: async function (req, res, next) {
        const schema = joi.object({
            guideName: joi.string().required().min(2).max(100),
            category: joi.string().required(),
            img: joi.string().required(),
            alt: joi.string().required()
            
        })

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.error(error.details[0].message);
            res.status(400).json({ error: "invalid data" });
            return;
        }

        const sql = `INSERT INTO parks (guideName, category, img, alt) 
                     VALUES (?, ?, ?, ?);`;

        try {
            const [result] = await database.query(sql, [
                guideName, category, img, 
                alt
            ]);
            res.json({ ...value, id: result.insertId });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    },
    updateById: async function (req, res, next) {
    const guideId = req.params.id;
    const {guideName, category, img, alt} = req.body;
    const sql = "UPDATE parks SET guideName = ?, category = ? img = ? alt = ? WHERE guideId = ?";

    try {
        const [result] = await database.query(sql, [guideName, category, img, alt]);
        
        if (result.affectedRows > 0) {
            res.send({ message: 'Park updated successfully' });
        } else {
            res.status(404).send({ message: 'Park not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while updating the park' });
    }
}
}