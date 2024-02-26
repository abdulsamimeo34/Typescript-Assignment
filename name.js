"use strict";
let personname = '';
personname = prompt('what is your name') || '';
let lowercase = personname.toLowerCase();
let upercase = personname.toUpperCase();
let titlecase = personname.split('').map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase()).join('');
if (personname !== null && personname !== '') {
    alert(`hello ${personname}here are your name in:lowercase:${lowercase}
    uppercase: ${upercase}
    titlecase: ${titlecase}`);
}
else {
    alert('please fill yuor name');
}
