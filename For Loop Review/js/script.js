$(document).ready(function(){
	var friends = ["Bob", "Steve", "Joe", "Kyle"];
	for (i = 0; i < friends.length; i++){
		$('html').append(friends[i]);
		console.log(friends[i]);
	}

	var data = [{
			nameFirst: 'bob',
			nameLast: 'stevensen', 
			age: 28,
			weight: 195,
			DOB: "5/12/53"
		},
		{
			nameFirst: 'Francis',
			nameLast: 'Jones',
			age: 32,
			weight: 295,
			DOB: "2.2.2"
		}];
})