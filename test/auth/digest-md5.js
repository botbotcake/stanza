import test from 'tape';
import { DIGEST } from '../../src/lib/sasl';

test('DIGEST-MD5', function(t) {
    const mech = new DIGEST();

    mech.processChallenge(
        'realm="elwood.innosoft.com",nonce="OA6MG9tEQGm2hh",qop="auth",algorithm=md5-sess,charset=utf-8'
    );

    const res = mech
        .createResponse({
            clientNonce: 'OA6MHXh6VqTrRk',
            host: 'elwood.innosoft.com',
            password: 'secret',
            serviceType: 'imap',
            username: 'chris'
        })
        .toString();

    t.equal(
        res,
        'username="chris",realm="elwood.innosoft.com",nonce="OA6MG9tEQGm2hh",cnonce="OA6MHXh6VqTrRk",nc=00000001,qop=auth,digest-uri="imap/elwood.innosoft.com",response=d388dad90d4bbd760a152321f2143af7,charset=utf-8'
    );

    t.end();
});
