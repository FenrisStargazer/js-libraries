let circs = ['c1','c2', 'c3', 'c4', 'c5', 'c6', 'c7','c8', 'c9', 'c10', 'c11', 'c12', 'c13'];
let skulls = ['s1','s2', 's3', 's4', 's5', 's6', 's7','s8', 's9', 's10', 's11', 's12', 's13'];
for (let i = 0; i < circs.length; i++) {
  new CircleType(document.getElementById(circs[i]))
   .radius();
   document.getElementById(circs[i]).classList.add('rotating');
}
  
var wiggle = function() {
	let i = Math.floor(Math.random() * 14);
	document.getElementById(skulls[i]).classList.add('tilting');
	i = Math.floor(Math.random() * 14);
	document.getElementById(skulls[i]).classList.remove('tilting');
}

var wiggleInt = setInterval(wiggle, 1000);