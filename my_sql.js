const MYSQL = require('mysql'); 

const SQL_CONNECTION = MYSQL.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'contactlistdb'
});

SQL_CONNECTION.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');

}); 

module.exports = SQL_CONNECTION //Export my_sql connection to use in index.js