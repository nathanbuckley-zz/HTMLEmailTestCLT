# HTMLEmailTestCLT


Simple to use command line tool for testing your HTML email designs to multiple inbox's

### Work in Progress

#### full Readme to follow shortly

### install

npm

### update

### usage

-b, --base', 'send to baseOptions'
-y, --yahoo', 'send via yahoo config'
-o, --outlook', 'send to outlook config'
-g, --gmail', 'send to Gmail config'
-a, --all', 'send to all config inboxs'
-l, --litmus', 'start litmus test of message'
-c --chdir <path>', 'change directoy to HTML file'

-h --help

Examples:

  $ etest -b
  $ etest -b -l
  $ etest -bl  (the same as -b -l)
