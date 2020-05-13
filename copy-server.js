const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Techugo@123',
  database: 'test'
});

connection.query(`CREATE TABLE IF NOT EXISTS contacts(id int, name VARCHAR(50), email VARCHAR(100) )`,
  function(err) {
    if(err){
      console.log("Error!");
      console.log(err);
    }
  }
);

// connection.query('INSERT INTO contacts (id,name,email) values("2","mohan3","name001@email.com4")', (err, res) => {
//   if(err) throw err;
// });


connection.query('SELECT * FROM contacts', (err,rows) => {
  if(err) throw err;
  console.log(rows);
});

connection.query('UPDATE contacts SET email = ? Where ID = ?',['updated@email.com2', 1],
  (err, result) => {
    if (err) throw err;
    }
);

connection.query('DELETE FROM contacts where id = ?', [1], (err, result) => {
    if (err) throw err;
   }
);

