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
  const document = firestore.doc('states/login');
  document.get().then(doc => {
    console.log(JSON.stringify(doc.data()));
    if (doc.data().state === "success") {
      const document = firestore.doc('apis/login-success');
      document.get().then(doc => {
        
        res.json(doc.data());
        // next();
      });
    }
  });




  
});

module.exports = router;
