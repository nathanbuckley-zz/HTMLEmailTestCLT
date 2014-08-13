# HTMLEmailTestCLT


Simple to use command line tool for testing your HTML email designs to multiple inbox's

### Work in Progress

#### full Readme to follow shortly

### install
```
npm ...
```

### update

```
npm update -g
```

### Options

**-b, --base** 'send to baseOptions'<br>
**-y, --yahoo** 'send via yahoo config'<br>
**-o, --outlook** 'send to outlook config'<br>
**-g, --gmail** 'send to Gmail config'<br>
**-a, --all** 'send to all config inboxs'<br>
**-l, --litmus** 'start litmus test of message'<br>
**-c, --chdir <path>** 'change directoy to HTML file'<br>

*-h --help*

Examples:

  $ etest -b
  $ etest -b -l
  $ etest -bl  (the same as -b -l)

### usage

**Before use edit the config file to contain details needed**

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

>Check here for future added services:   >https://github.com/andris9/nodemailer-wellknown#supported-services

For examples sakes Gmail is added to the config file by default.

Add the details of the mail box's you wish to send to in to config file.

The litmus address for create tests can be found by logging in to your litmus account and navigating to :

User > Account settings > Static Test Address



### Thanks
