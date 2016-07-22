import { Score } from '/lib/collections.jsx';

Meteor.publish('animationScore', function() {
	return Score.find();
});