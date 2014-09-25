#!/usr/bin/env node

/*
* CLT that enables you to send HTML emails to multiple inbox's, inbox types or litmus
* testing by providing directory to html file.
* Main Dependancies : Node Mailer
*                     fs - file service
*                     Commander
*                     reaad line
*/

var nodemailer = require('nodemailer'),
art = require('ascii-art'),
fs = require('fs'),
commander = require('commander'),
rl = require('readline').createInterface(process.stdin, process.stdout);

function convert(){

  //read config file (conf.json)
  var conf = JSON.parse(fs.readFileSync('../lib/conf.json')); //node_modules/etest/lib/conf.json

  //read html file
  var html = fs.readFileSync(conf.file,'utf8', function(err, msg){
    if(err)console.log(err);
  }); // html body (node_modules/etest/test.html)


  // reusable transport method
    var transport = nodemailer.createTransport({
        service: conf.transport.service, //Add from config file
        auth: {
            user: conf.transport.user, //Add from config file
            pass: conf.transport.password //Add from config file
        }
    });

  //Message sending options

  //constructer to be used in future ( c = config file option type)

  function msgOpt (c){
    //var x = conf.c;
    this.from = conf.from;
    this.to = c.to;
    this.subject = c.subject;
    this.text = 'Test email from etest CLT';
    this.html = html;
  }

  function create(mailopt){
    var config = new msgOpt (mailopt);
    //console.log(config);
    sendMsg(config);
  }


  // send message
    function sendMsg (mailOptions){
      transport.sendMail(mailOptions, function(err, info){
        if(error){
            console.log(err);
        }else{
            console.log("Message sent: " + info.response);
        }
        //smtpTransport.close(); // Closes connection once send complete
        //process.exit(0);
      });
    }

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
    process.exit(0);
  }

  //show email's in config file
  function showEmails (){
    if (conf.basOptions.to != " "){
      console.log('in base option: ' + conf.baseOptions.to);
    }
    if (conf.yahooOptions != " "){
      console.log('in yahoo option: ' + conf.yahooOptions.to);
    }
    if (conf.outlookOptions != " "){
    console.log('in outlook option: ' + conf.outlookOptions.to);
    }
    if (conf.gmailOptions != " "){
    console.log('in gmail option: ' + conf.gmailOptions.to);
    }
    if (conf.litmusOpt != " "){
    console.log('in yahoo option: ' + conf.litmusOpt.testEmail);
    }
  }
  //-------------------------------------------------------------------------------------------------

  //commander setup

  commander
      .version('0.1.30')
      .option('-b, --base', 'send to baseOptions')
      .option('-y, --yahoo', 'send via yahoo config')
      .option('-o, --outlook', 'send to outlook config')
      .option('-g, --gmail', 'send to Gmail config')
      .option('-a, --all', 'send to all config inboxs')
      .option('-l, --litmus', 'start litmus test of message')
      .option('-c --chdir <path>', 'change directory to HTML file')
      .option('-s --show', 'show current setup directory of HTML file')
      .option('-e --emails', 'show emails in config file');

    commander.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    $ test -b');
    console.log('    $ test -b -l');
    console.log('    $ test -bl  (the same as -b -l)');
    console.log('');
  });

      commander.parse(process.argv);

  art.font('Etest', 'Doom', 'bright_green').font(' v 0.1.30', 'Contessa', 'red', function(rendered){
    console.log(rendered);
  });

  if(commander.base) create(conf.baseOptions);
  if(commander.yahoo) create(conf.yahooOptions);
  if(commander.outlook) create(conf.outlookOptions);
  if(commander.gmail) create(conf.gmailOptions);
  if(commander.all) create(conf.allOptions);
  if(commander.litmus) create(conf.litmusOpt);
  if(commander.chdir) chdir(process.argv[3]);
  if(commander.emails) showEmails();
  }

exports.convert = convert;
