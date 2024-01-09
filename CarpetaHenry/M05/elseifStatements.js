function travel (destination) {
    if (destination === 'Brasil') {
        console.log('Turn LEFT')
    } else if (destination === 'Argentina') {
            console.log('Turn RIGHT')
    } else {
        console.log('We Are Lost.')
    }
};

    travel('Brasil');
    travel('Argentina');
    travel('Bolivia');


function canDrive (age) {
    if (age >= 18) {
        console.log(true)
    } else {
        console.log(false)
    }
};

canDrive(19);