#  [![Build Status](https://secure.travis-ci.org/rmcdaniel/node-slackbot.png?branch=master)](http://travis-ci.org/rmcdaniel/node-slackbot)

> Slackbot for node.js using RTM API.


## Install

```sh
$ npm install --save node-slackbot
```


## Usage

```js
var slackbot = require('node-slackbot');

var bot = new slackbot('token_goes_here');

bot.use(function(message, cb) {
  if ('message' == message.type) {
    console.log(message.user + ' said: ' + message.text);
  }
  cb();
});

bot.connect();
```

## License

MIT © [Richard McDaniel]()
