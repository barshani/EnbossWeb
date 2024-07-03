const database = require('./database');
const joi = require('joi');

module.exports = {
    getAll: async function (req, res, next) {
        const sql = "SELECT * FROM products;";

        try {
            const result = await database.query(sql);
            res.send(result[0]);
        }
        catch (err) {
            console.error(err);
        }
    },
getOneById: async function (req, res, next) {
    const productId = req.params.id;
    const sql = "SELECT * FROM products WHERE productId = ?";

    try {
        const [result] = await database.query(sql, [productId]);
        
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.status(404).send({ message: 'product not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while retrieving the peoduct' });
    }
},
    addNew: async function (req, res, next) {
        const schema = joi.object({
            productName: joi.string().required().min(2).max(100),
            size: joi.string().required(),
            color: joi.string().required(),
            img: joi.string().required(),
            alt: joi.string().required(),
            category: joi.string().required(),
            subCategory: joi.string().required(),
            price: joi.number().required(),
        })

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.error(error.details[0].message);
            res.status(400).json({ error: "invalid data" });
            return;
        }

        const sql = "INSERT INTO products(productName,size,color,img,alt,category,subCategory,price)" +
            " VALUES(?,?,?,?,?,?,?,?);";

        try {
            const value = req.body;
            const result = await database.query(sql, [value.productName, value.size, value.color, value.img, value.alt, value.category, value.subCategory, value.price]);
            res.json({ ...value, id: result.id });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    },
     updateById: async function (req, res, next) {
    const productId = req.params.id;
    const value = req.body;
    const sql = "UPDATE products SET productName = ?, size = ?, color = ?, img = ?, alt = ?, category = ?, subCategory = ?, price = ? WHERE productId = ?";

    try {
            const [result] = await database.query(sql, [value.productName, value.size, value.color, value.img, value.alt, value.category, value.subCategory, value.price, productId]);
        
        if (result.affectedRows > 0) {
            res.send({ message: 'Product updated successfully' });
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while updating the product' });
    }
}
}