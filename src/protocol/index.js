import Addresses from './stanzas/addresses';
import Avatar from './stanzas/avatar';
import Bind from './stanzas/bind';
import Blocking from './stanzas/blocking';
import BOB from './stanzas/bob';
import Bookmarks from './stanzas/bookmarks';
import BOSH from './stanzas/bosh';
import Carbons from './stanzas/carbons';
import Command from './stanzas/command';
import CSI from './stanzas/csi';
import Dataforms from './stanzas/dataforms';
import Delayed from './stanzas/delayed';
import Disco from './stanzas/disco';
import StanzaError from './stanzas/error';
import ExtDisco from './stanzas/extdisco';
import File from './stanzas/file';
import File3 from './stanzas/file3';
import Forwarded from './stanzas/forwarded';
import Framing from './stanzas/framing';
import GeoLoc from './stanzas/geoloc';
import Hash from './stanzas/hash';
import Hats from './stanzas/hats';
import UDP from './stanzas/iceUdp';
import IBB from './stanzas/ibb';
import IQ from './stanzas/iq';
import JIDPrep from './stanzas/jidprep';
import Jingle from './stanzas/jingle';
import JSONData from './stanzas/json';
import Eventlog from './stanzas/logging';
import MAM from './stanzas/mam';
import Markers from './stanzas/markers';
import Message from './stanzas/message';
import Mood from './stanzas/mood';
import MUC from './stanzas/muc';
import Nick from './stanzas/nick';
import OOB from './stanzas/oob';
import Ping from './stanzas/ping';
import Presence from './stanzas/presence';
import Private from './stanzas/private';
import PSA from './stanzas/psa';
import Pubsub from './stanzas/pubsub';
import PubsubError from './stanzas/pubsubError';
import PubsubEvents from './stanzas/pubsubEvents';
import PubsubOwner from './stanzas/pubsubOwner';
import Push from './stanzas/push';
import Reach from './stanzas/reach';
import Register from './stanzas/register';
import References from './stanzas/references';
import Roster from './stanzas/roster';
import RSM from './stanzas/rsm';
import RTP from './stanzas/rtp';
import RTT from './stanzas/rtt';
import SASL from './stanzas/sasl';
import Session from './stanzas/session';
import Shim from './stanzas/shim';
import SM from './stanzas/sm';
import Stream from './stanzas/stream';
import StreamError from './stanzas/streamError';
import StreamFeatures from './stanzas/streamFeatures';
import Time from './stanzas/time';
import Tune from './stanzas/tune';
import VCardTemp from './stanzas/vcard';
import Version from './stanzas/version';
import Visibility from './stanzas/visibility';

import * as Namespaces from './namespaces';

import XMPPShortcuts from './shortcuts';
import XMPPTypes from './types';


export { Namespaces };

export default function (JXT) {

    JXT.use(XMPPTypes);
    JXT.use(XMPPShortcuts);

    JXT.use(Addresses);
    JXT.use(Avatar);
    JXT.use(Bind);
    JXT.use(Blocking);
    JXT.use(BOB);
    JXT.use(Bookmarks);
    JXT.use(BOSH);
    JXT.use(Carbons);
    JXT.use(Command);
    JXT.use(CSI);
    JXT.use(Dataforms);
    JXT.use(Delayed);
    JXT.use(Disco);
    JXT.use(StanzaError);
    JXT.use(ExtDisco);
    JXT.use(File);
    JXT.use(File3);
    JXT.use(Forwarded);
    JXT.use(Framing);
    JXT.use(GeoLoc);
    JXT.use(Hash);
    JXT.use(Hats);
    JXT.use(UDP);
    JXT.use(IBB);
    JXT.use(IQ);
    JXT.use(JIDPrep);
    JXT.use(Jingle);
    JXT.use(JSONData);
    JXT.use(Eventlog);
    JXT.use(MAM);
    JXT.use(Markers);
    JXT.use(Message);
    JXT.use(Mood);
    JXT.use(MUC);
    JXT.use(Nick);
    JXT.use(OOB);
    JXT.use(Ping);
    JXT.use(Presence);
    JXT.use(Private);
    JXT.use(PSA);
    JXT.use(Pubsub);
    JXT.use(PubsubError);
    JXT.use(PubsubEvents);
    JXT.use(PubsubOwner);
    JXT.use(Push);
    JXT.use(Reach);
    JXT.use(Register);
    JXT.use(References);
    JXT.use(Roster);
    JXT.use(RSM);
    JXT.use(RTP);
    JXT.use(RTT);
    JXT.use(SASL);
    JXT.use(Session);
    JXT.use(Shim);
    JXT.use(SM);
    JXT.use(Stream);
    JXT.use(StreamError);
    JXT.use(StreamFeatures);
    JXT.use(Time);
    JXT.use(Tune);
    JXT.use(VCardTemp);
    JXT.use(Version);
    JXT.use(Visibility);
}
