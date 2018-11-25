#!/usr/bin/env node

var amqp = require('amqplib');

amqp.connect('amqp://admin:admin@91.211.248.24').then(function(conn) {
  process.once('SIGINT', function() { conn.close(); });
  return conn.createChannel().then(function(ch) {

    var ok = ch.assertQueue('registration', {durable: false});

    ok = ok.then(function(_qok) {
      return ch.consume('registration', function(msg) {
        console.log(" [x] Received '%s'", msg.content.toString());
      }, {noAck: true});
    });

    return ok.then(function(_consumeOk) {
      console.log(' [*] Waiting for messages. To exit press CTRL+C');
    });
  });
}).catch(console.warn);
