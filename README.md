# HTMLEmailTestCLT

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nathanbuckley/HTMLEmailTestCLT?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## WORK IN PROGRESS
#### v0.2.0 all option has been re writen so no work has to be done in config file. However has currently not been fully tested.

## All opinions and suggestions welcome

Simple to use command line tool for testing your HTML email designs to multiple inbox's


[![NPM](https://nodei.co/npm/etest.png?downloads=true)](https://nodei.co/npm/etest/)

### update

```
npm update etest -g
```

### Options

**-V, --version** 'show current version installed'<br>
**-b, --base** 'send to baseOptions'<br>
**-y, --yahoo** 'send via yahoo config'<br>
**-o, --outlook** 'send to outlook config'<br>
**-g, --gmail** 'send to Gmail config'<br>
**-a, --all** 'send to all config inboxs'<br>
**-l, --litmus** 'start litmus test of message'<br>
**-c, --chdir <path>** 'change directoy to HTML file'<br>
**-s --show**, 'show current setup directory of HTML file'<br>
**-e --emails**, 'show emails in config file'<br>
**-S --ShowConf**, 'show directory of config file'

*-h --help*

Examples:

  $ etest -b <br>
  $ etest -b -l <br>
  $ etest -bl  (the same as -b -l) <br>

###  Before usage

**Before use edit the config file to contain details needed**
> Can retrive current conf.json (config file) directory
> with command -S or --ShowConf
> Once you have directory open and edit in your fav text editor




Details you add to the transport protocal will be used for sending the messages test.
Inbox's that can be used by default and are supported by nodemailer  **(Service names are case insensitive):**

'1und1'             <br>
'AOL'              <br>
'DynectEmail'      <br>
'FastMail'         <br>
'Gmail'             <br>
'Godaddy'           <br>
'GodaddyAsia'       <br>
'GodaddyEurope'  <br>
'hot.ee'     <br>
'Hotmail'<br>
'iCloud' <br>
'mail.ee'<br>
'Mail.ru'<br>
'Mailgun'<br>
'Mailjet'<br>
'Mandrill'<br>
'Postmark'<br>
'QQ'<br>
'QQex'<br>
'SendCloud'<br>
'SendGrid'<br>
'SES'<br>
'Yahoo'<br>
'Yandex'<br>
'Zoho'<br>

Check here for future added services:   https://github.com/andris9/nodemailer-wellknown#supported-services

Gmail is added to the config file by default due to popularity.

Add the details of the mail box's you wish to send to in to config file.

>The litmus address for create tests can be found by logging in to your litmus account and >navigating to :
>
>User > Account settings > Static Test Address



### Thanks and credit

[andris9 for nodemailer](https://github.com/andris9) <br>
[vision media for commander.js](https://github.com/visionmedia) <br>
[Khrome for ascii-art](https://github.com/khrome) <br>
