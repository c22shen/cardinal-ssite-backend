var express = require('express');
var router = express.Router();
const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'firestore-c5f87',
  keyFilename: 'firestore-e2b8de3bb275.json',
});



var test = [{test: "something else"}]
/* GET users listing. */
router.get('/', function(req, res, next) {
  const document = firestore.doc('api/login');
  document.set({
    url: 'login',
    state: 'failure'
  }).then(() => {
    res.json(test);
    // next();
  });

  
});

module.exports = router;
