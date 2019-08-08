const nr = require('newrelic');
const express = require('express');
const morgan = require('morgan');
const db = require('./model');
const path = require('path');

const app = express();
const port = 3001;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public/')));
app.use('/:restaurant_id', express.static(path.join(__dirname, '/../public/')));

app.get('/:restaurant_id/images', (req, res) => {
  const restaurantId = req.params.restaurant_id;

  const query = 'SELECT * FROM images_by_restaurant_ec2 WHERE restaurant_id = ?';
  db.execute(query, [ restaurantId ], {prepare: true})
  .then(result => {
    res.status(200).send(result.rows);
  })
  .catch(err => console.log(err));

});
