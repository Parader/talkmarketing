Meteor.methods({
    sendJob: function (from, name, msg, cv) {
        check([from, name, msg, cv], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Email.send({
          to: "contact@talk.marketing",
          from: from,
          subject: "Emplois Talk Marketing",
          html: "name:"+name+"<br /> CV:"+cv+" <br />"+msg
        });
    }
});