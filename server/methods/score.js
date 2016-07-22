import { Score } from '/lib/collections.jsx';

Meteor.methods({
    updateScore:function(id){
        check(id, String);
        return Score.update(id, {
            $set:{animationScore:Score.find().fetch()[0].animationScore+1}
        });
    }
});