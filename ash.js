//Variables that can change
const Height=6
const Weight=300

//Parameters in place are that the maximum "Weight" is '300', the maximum "Height" is '7'
// Program code

    if (Height>7) {         //These conditional statements are used as checkpoints, each line progressively is checking the changeable variables, to create an output. 
        console.log('You cannot enter the ride because you are too tall');
    } else {                                        //If one parameter is not met, then the program proceeds to let the individual know they are not capable of proceeding.
        if (Height<4) {
            console.log('You cannot enter the ride because you are too short');  //If each parameters are passed then the program proceeds to "Line 17" where it will tell the user they may proceed
        } else{
            if (Weight>300) {
                console.log('Unfortunately you are too heavy for the ride');
            } else {
                console.log('Enjoy the ride!!!') //This conditional statement is used when all other parameters have been passed.
            }
        }
    }