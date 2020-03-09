// Expected Live output
//
// MAN; Manchester Piccadilly
// GNF: Greenfield
// LIV: Liverpool Lime Street
// SYB: Stalybridge
// HUD: Huddersfield

const list = document.querySelector(‘.output ul’);
list.innerHTML = ‘’;
let stations = [‘MAN3423490802s;Manchester Piccadilly’,
‘GNF983h98dh239;Greenfield’,
‘LIC897r29h398hr29;Liverpool Lime Street’,
‘SYBdh92hd983h983;Stalybridge’,
‘HUD923dh983dh38uje;Huddersfield’];
for (let I = 0; I < stations.length; I++) {
let input = stations[i];
let stationCode = input.slice(0,3);
let referencePoint = input.indexOf(‘;’);
let addressPoint = slice(referencePoint + 1);
let result = stationCode + ‘;’ + addressPoint;

let listItem = document.createElement(‘li’);
listItem.textContent = result;
list.appendChild(listItem);
}
