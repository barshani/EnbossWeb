const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'enboss',
    waitForConnections: true,
    connectionLimit: 5,
});

async function query(sql, values) {
    const promisePool = pool.promise();
    try {
        const [rows, fields] = await promisePool.query(sql, values);
        return [rows, fields];
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error;
    }
}

module.exports = {
    query
};
