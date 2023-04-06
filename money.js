const code = '3298';
const floor  = '6';

if  (floor < 5) {
    if (code == '1234') {
        console.log('What is going on here?');
    }
    if (floor == 4) {
        console.log('Getting closer!!');
        if (floor == 5) {
            console.log('JACKPOT!!!');
        }
    }
} else {
    if (code == '3121') {
    }
    console.log('Not the right place to be going');
    if (floor < 15) {
        console.log('Bada-bing?');
        if (floor < 5) {
            console.log('JACKPOT!!');
        }
        if (floor < 7) {
            if (code == '3298') {
                console.log('JACKPOT!!!');
            } else {
                console.log('haha');
            }
        }
    }
}