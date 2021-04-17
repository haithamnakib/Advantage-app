/**
 * Handle USER Actions.
 */

//var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs")
var moment = require("moment")
let db = require("../database");

let pool = db.getPool();




exports.create = (req, res) => {
  const {Username} = req.body;
  const {Password} = req.body;
  const {Name} = req.body;
  let sql = `INSERT INTO USER (user_username, user_password, user_name) VALUES ("${Username}", "${Password}", "${Name}")`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    try{
      connection.query(sql, (err, result)=>{
        connection.release();
        if(err)
        {
          res.status(500).send({
            message: 'The query not OK',
            error: err,
          })
        }
        res.status(200).send({
          message: 'USER INSERTED TO THE DATABASE',
          result: result,
        });
      })
    }catch(err)
    {
      res.status(500).send({message: 'An internal error occured.'});
    }
  })
};

exports.getUsers = (req, res) => {
  let sql = `SELECT * FROM advantageDB.customers`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch users'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
}
exports.register=(req,res) => {
  const {user_name}=req.body;
  const {user_password}=req.body;
  const {user_number}=req.body;
  const {user_email}=req.body;
 
  console.log(`Username:${user_name}\
  Password:${user_password}\
  Number: ${user_number}\
  Email: ${user_email}\
 `);
}






