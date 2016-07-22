// import publications from './publications';
// import methods from './methods';
// publications();
// methods();
import { Score } from '/lib/collections.jsx';

S3.config = {
    key: Meteor.settings.private.AWSAccessKeyId,
    secret: Meteor.settings.private.AWSSecretAccessKey,
    bucket: Meteor.settings.private.AWSBucket
};



Meteor.startup(()=> {
    process.env.MAIL_URL = Meteor.settings.private.mail;
    if(Score.find().fetch().length === 0){
        Score.insert({animationScore: 0});
    }

});




/*var device = require('device');
var mydevice = device('put here user-agent string');

if(mydevice.is('bot'))
    console.log("bot");
else
    console.log("nonbot");*/



//var basicAuth = new HttpBasicAuth("beta", "demotalk");
//basicAuth.protect();

