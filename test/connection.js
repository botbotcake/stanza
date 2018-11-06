'use strict';

var test = require('tape');
var stanza = require('../lib');


test('Connect using WebSocket', function (t) {
    t.plan(1);

    var client = stanza.createClient({
        jid: 'anon@anon.lance.im',
        transport: 'websocket',
        wsURL: 'wss://anon.lance.im/xmpp-websocket'
    });

    client.on('session:started', function () {
        t.pass('Connected with WebSocket');
        client.disconnect();
    });

    client.connect();
});

test('Connect using BOSH', function (t) {
    t.plan(1);

    var client = stanza.createClient({
        jid: 'anon@anon.lance.im',
        transport: 'bosh',
        boshURL: 'https://anon.lance.im/http-bind'
    });

    client.on('session:started', function () {
        t.pass('Connected with BOSH');
        client.disconnect();
    });

    client.connect();
});
