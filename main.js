var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
	if (name in reservations)	{
		if (reservations[name].claimed) {
			alert('someone took your place, sry..')
		}
		else	{
			alert('welcome!')
		}
	}
	else	{
		alert('name doesnt exist in our system');
	}
}

claimReservation();