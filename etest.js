#!/usr/bin/env node

/*
*
*
*/

var nodemailer = require('nodemailer'),
http = require('http'),
https = require('https'),
art = require('ascii-art'),
fs = require('fs'),
commander = require('commander'),
rl = require('readline').createInterface(process.stdin, process.stdout);


//read config file (conf.json)
var conf = JSON.parse(fs.readFileSync('conf.json'));

//read entire html file
var html = fs.readFileSync(conf.file,'utf8', function(err, msg){
  if(err)console.log(err);
}) // html body


// reusable transport method
  var smtpTransport = nodemailer.createTransport({
      service: conf.transport.service, //Add from config file
      auth: {
          user: conf.transport.user, //Add from config file
          pass: conf.transport.password //Add from config file
      }
  });

//Message sending options
//Base options
  var mailOpBase = {
    from: conf.from, // from address
    to: conf.baseOptions.to, // recipient
    subject: conf.baseOptions.subject, // Subject line
    text: 'Test email. From email tester CLT.', // plaintext body
    html: html
  };
//Yahoo options
  var mailOpYahoo = {
    from: conf.from, // sender address
    to: conf.yahooOptions.to, // recipient
    subject: conf.yahooOptions.subject, // Subject line
    text: 'Test email. From email tester CLT.', // plaintext body
    html: html
  };
//Outlook options
  var mailOpOutlook = {
    from: conf.from, // from address
    to: conf.outlookOptions.to, // recipient
    subject: conf.outlookOptions.subject, // Subject line
    text: 'Test email. From email tester CLT.', // plaintext body
    html: html
  };
//Gmail options
  var mailOpGmail = {
    from: conf.from, // from address
    to: conf.gmailOptions.to, // recipient
    subject: conf.gmailOptions.subject, // Subject line
    text: 'Test email. From email tester CLT.', // plaintext body
    html: html
  };
//Send to all
var mailOpAll = {
  from: conf.from, // from address
  to: conf.allOptions.to, //recipient
  subject: conf.allOptions.subject, // Subject line
  text: 'Test email. From email tester CLT.', // plaintext body
  html: html
};

//litmus test
var litmusTest = {
  from: conf.from, // from address
  to: conf.litmusOpt.testEmail, //recipient
  subject: conf.litmusOpt.subject, // Subject line
  text: 'Test email. From email tester CLT.', // plaintext body
  html: html
};

// send message
  function sendMsg (mailOptions){
    smtpTransport.sendMail(mailOptions, function(err, response){
      if(error){
          console.log(err);
      }else{
          console.log("Message sent: " + response.response);
      }
      smtpTransport.close(); // Closes connection once send complete
      process.exit(0);
    });
  };

  //response.message

//change directory of creative
function chdir (dir){
  conf.file = dir;
  console.log(dir);
  fs.writeFile('conf.json', JSON.stringify(conf, null, 4), function(err){
    if(err) throw err;
      console.log('new path saved');
      process.exit(0);
  });
}

//show current directory
function shdir (){
  console.log ('current directory: ' + conf.file);
}

//-------------------------------------------------------------------------------------------------

//commander setup

commander
    .version(0.1)
    .option('-b, --base', 'send to baseOptions')
    .option('-y, --yahoo', 'send via yahoo config')
    .option('-o, --outlook', 'send to outlook config')
    .option('-g, --gmail', 'send to Gmail config')
    .option('-a, --all', 'send to all config inboxs')
    .option('-l, --litmus', 'start litmus test of message')
    .option('-c --chdir <path>', 'change directory to HTML file')
    .option('-s --show', 'show current setup directory of HTML file')

commander.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ test -b');
  console.log('    $ test -b -l');
  console.log('    $ test -bl  (the same as -b -l)');
  console.log('');
});

commander.parse(process.argv);

art.font('HTML Test Email', 'Doom', 'bright_green').font(' v 0.1', 'Contessa', 'red', function(rendered){
  console.log(rendered);
});

if(commander.base) sendMsg(mailOpBase);
if(commander.yahoo) sendMsg(mailOpYahoo);
if(commander.outlook) sendMsg(mailOpOutlook);
if(commander.gmail) sendMsg(mailOpGmail);
if(commander.all) sendMsg(mailOpAll);
if(commander.litmus) sendMsg(litmusTest);
if(commander.chdir) chdir(process.argv[3]);
