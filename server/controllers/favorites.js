const database = require('./database');
const joi = require('joi');
module.exports = {
    getAll: async function (req, res, next) {
        const sql = "SELECT * FROM favorites";

        try {
            const result = await database.query(sql);
            res.send(result[0]);
        }
        catch (err) {
            console.error(err);
        }
    },
    getOneById: async function (req, res, next) {
    const favoriteId = req.params.id;
    const sql = "SELECT * FROM favorites WHERE productId = ?";

    try {
        const [result] = await database.query(sql, [favoriteId]);
        
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.status(404).send({ message: 'Favorite not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while retrieving the favorite' });
    }
},
    
    addNew: async function (req, res, next) {
        const schema = joi.object({
            productId: joi.number().required(),
            likes: joi.number().required()
        })

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.error(error.details[0].message);
            res.status(400).json({ error: "invalid data" });
            return;
        }

        const sql = "INSERT INTO favorites(productId)" +
            " VALUES(?);";

        try {
            const result = await database.query(sql, Object.values(value));
            res.json({ ...value, id: result.id });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    },
    liked: async function (req, res, next) {
    const id = req.params.id;
    const {likes} = req.body;
    const sql = "UPDATE favorites SET  likes = ? WHERE productId = ?";

    try {
        const [result] = await database.query(sql, [likes+1,id]);
        
        if (result.affectedRows > 0) {
            res.send({ message: 'Product/park being liked' });
        } else {
            res.status(404).send({ message: 'product/park not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while liking' });
    }
}

}