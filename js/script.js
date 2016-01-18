var vous;
var ordi;
function Votrechoix(v){
vous=v;document.votrechoix.src='images/choix'+v+'.jpg';
Choixordi();
}

function Choixordi(){
ordi=Math.round(Math.random()*2)+1;
document.choixordi.src='images/choix'+ordi+'.jpg';
Pipaci();
}

function Pipaci(){
if((vous==1) && (ordi==3) || (vous==2) && (ordi==1) || (vous==3) && (ordi==2))
{alert('BRAVO !!!!');document.votrechoix.src="images/choix.jpg";document.choixordi.src="images/choix.jpg";}
else{Ordipipaci();}
}

function Ordipipaci(){
if((ordi==1) && (vous==3) || (ordi==2) && (vous==1) || (ordi==3) && (vous==2))
{alert('PERDU !!!!');document.votrechoix.src="images/choix.jpg";document.choixordi.src="images/choix.jpg";}
else{alert('Egalité !\nA REFAIRE!');document.votrechoix.src="images/choix.jpg";document.choixordi.src="images/choix.jpg";}
}