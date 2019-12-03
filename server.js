const APP = require('./express') //Import express APP
const connection = require('./my_sql'); //Import SQL connection from my_sql.js


    APP.get('/personal',(req, res) => { 
        let sql = "SELECT * FROM personal"; 
        let query = connection.query(sql, (err, rows) => {
            if(err) throw err;
            res.render('./personal/index', {
                personal : rows 
            });
        });
    });

    APP.get('/personal/add',(req, res) => {
        res.render('./personal/add')
    });

    APP.post('/personal/save',(req, res) => { 
        let data = {name: req.body.name, email: req.body.email, phone_no: req.body.phone_no, address: req.body.address, birthday: req.body.birthday};
        let sql = "INSERT INTO personal SET ?";
        let query = connection.query(sql, data,(err, results) => {
        if(err) throw err;
        res.redirect('/personal');
        });
    });

    APP.get('/personal/edit/:userId',(req, res) => {
        const userId = req.query.userID; 

        let sql = `Select * from personal where id = ${userId}`;
        let query = connection.query(sql,(err, result) => {
            if(err) throw err;
            res.render('./personal/edit', {
                user : result[0] 
            });
        });
    });

    APP.post('/personal/update',(req, res) => {
        const userId = req.body.id;
        let sql = "update personal SET name='"+req.body.name+"',  email='"+req.body.email+"',  phone_no='"+req.body.phone_no+"', address='"+req.body.address+"', birthday='"+req.body.birthday+"' where id ="+userId;
        let query = connection.query(sql,(err, results) => {
        if(err) throw err;
        res.redirect('/personal');
        });
    });

    APP.get('/personal/delete/:userId',(req, res) => {
        const userId = req.query.userID;
        let sql = `DELETE from personal where id = ${userId}`;
        let query = connection.query(sql,(err, result) => {
            if(err) throw err;
            res.redirect('/personal');
        });
    });

    /** BUSINESS */

    APP.get('/business',(req, res) => {
        let sql = "SELECT * FROM business";
        let query = connection.query(sql, (err, rows) => {
            if(err) throw err;
            res.render('./business/index', {
                business : rows
            });
        });
    });


    APP.get('/business/add',(req, res) => {
        res.render('./business/add')
    });


    APP.post('/business/save',(req, res) => { 
        let data = {name: req.body.name, email: req.body.email, email2: req.body.email2, phone_no: req.body.phone_no, phone_no2: req.body.phone_no2, address: req.body.address, address2: req.body.address2, vat: req.body.vat};
        let sql = "INSERT INTO business SET ?";
        let query = connection.query(sql, data,(err, results) => {
        if(err) throw err;
        res.redirect('/business');
        });
    });


    APP.get('/business/edit/:userId',(req, res) => {
        const userId = req.query.userID;
        let sql = `Select * from business where id = ${userId}`;
        let query = connection.query(sql,(err, result) => {
            if(err) throw err;
            res.render('./business/edit', {
                user : result[0]
            });
        });
    });


    APP.post('/business/update',(req, res) => {
        const userId = req.body.id;
        let sql = "update business SET name='"+req.body.name+"',  email='"+req.body.email+"', email2='"+req.body.email2+"',  phone_no='"+req.body.phone_no+"', phone_no2='"+req.body.phone_no2+"', address='"+req.body.address+"', address2='"+req.body.address2+"', vat='"+req.body.vat+"' where id ="+userId;
        let query = connection.query(sql,(err, results) => {
        if(err) throw err;
        res.redirect('/business');
        });
    });


    APP.get('/business/delete/:userId',(req, res) => {
        const userId = req.query.userID;
        let sql = `DELETE from business where id = ${userId}`;
        let query = connection.query(sql,(err, result) => {
            if(err) throw err;
            res.redirect('/business');
        });
    });

/** End of routes for business queries */