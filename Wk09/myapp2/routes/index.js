var express = require('express');
var router = express.Router();

let phoneContact = [
  {firstname: "Conner", lastname: "Benitez", email: "Conner.benitez27@houghton.edu", phone: "5854489516"},
  {firstname: "John", lastname: "Doe", email: "John.doe27@houghton.edu", phone: "5854488216"},
];

/* GET addContact page. */
router.get('/addContact', function(req, res, next) {
  console.log('GET /addContact route hit');
  res.render('addContact', { title: 'Add New Contact', currentDate: Date() });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('GET / route hit');
  res.render('index', { title: 'Contact List', data: phoneContact, currentDate: Date() });
});

/* POST addContact */
router.post('/addContact', function(req, res, next) {
  // Extract data from the form
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var phone = req.body.phone;

  // Create a new contact object
  var newContact = { firstname: fname, lastname: lname, email: email, phone: phone };

  // Add the new contact to the phoneContact array
  phoneContact.push(newContact);

  console.log('New contact added:', newContact);

  // Redirect to the home page to display the updated contact list
  res.redirect('/');
});

/* DELETE contact by firstname */
router.get('/delete/:id', function(req, res, next) {
  var id = req.params.id;
  phoneContact = phoneContact.filter(contact => contact.firstname !== id);
  console.log(`Contact with firstname "${id}" deleted.`);
  res.redirect('/');
});
router.get('/update/:id', function(req, res, next) {
  var id = req.params.id;
  var contact = phoneContact.find(contact => contact.firstname === id);
  if(contact==null){
    res.redirect('/');
  }
  res.render('updateContact', { title: 'Update Contact', data: phoneContact, currentDate: Date() });
  
});

module.exports = router;
