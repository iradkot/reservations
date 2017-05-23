var reservations = {
    'bob': { claimed: false },
    'ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation').toLowerCase();

var claimReservation = function() {
    if (name in reservations) {
        if (reservations[name].claimed) {
            alert('someone took your place, sry..')
        } else {
            alert('welcome!')
        }
    } else {
        reservations[name] = { claimed: true };
        alert(reservations[name]);
    }
}

claimReservation();
