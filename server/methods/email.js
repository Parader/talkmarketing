Meteor.methods({
    sendEmail: function (from, name, msg) {
        check([from, name, msg], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Email.send({
          to: "contact@talk.marketing",
          from: from,
          subject: "Contact Talk Marketing",
          html: "name:"+name+"<br /> "+msg
        });
    }
});