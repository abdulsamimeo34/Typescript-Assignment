"use strict";
let guestlist = ['imran khan', 'nawaz shareef', 'asif ali zaedari'];
// for(let i=0; i<guestlist.length; i++){
//     console.log('Dear Mr' + guestlist[i] + ',\n\nit is your pleasure to invite you in our party.\n\nthank you\n\n')
// }
let absentguest = 'imran khan';
let newguest = 'kamran tessori';
guestlist[0] = newguest;
// for(let i=0; i<guestlist.length; i++){
//     console.log('Dear Mr' + guestlist[i] + ',\n\nit is your pleasure to invite you in our party.\n\nthank you\n\n')
// }
console.log(`${absentguest}is not coming to the party.`);
console.log('good news we find big table so were inviting 3 more guests');
guestlist.unshift('sir zia khan');
guestlist.splice(2, 0, 'mariyam nawaz');
guestlist.push('bilawal bhutto zardari');
for (let i = 0; i < guestlist.length; i++) {
    console.log('Dear Mr' + guestlist[i] + ',\n\nit is your pleasure to invite you in our party.\n\nthank you\n\n');
}
console.log('\nsorry we can not arrenge big table, only two people invited');
while (guestlist.length > 2) {
    let remove_guest = guestlist.pop();
    console.log(`sorry mr, ${remove_guest}, you are not invited for dinner`);
}
for (let i = 0; i < guestlist.length; i++) {
    console.log('Dear Mr' + guestlist[i] + ',\n\nyou are still invited.\n\nthank you\n\n');
}
guestlist.splice(0, 2);
console.log(guestlist);
