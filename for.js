let x=100           //Initial program trial
    while(x>0) {
        let y=0
            while(y<x) {
                console.log(y);
                y++; //This is to allow the first part of the bounce to commence, increasing the number by 1 
            }
            while(y>2) {
                console.log(y);
                y--; //This is for the second part of the bounce to commence creating a full bounce, decreasing the number by 1
            }
            x=Math.floor(x/2); // This allows your const(x) to be divided by 2 each time to make the bounce cut each time it bounces
    }