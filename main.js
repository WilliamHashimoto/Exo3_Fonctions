let codingSchool18 = [];

function ajoute (nom) {
    codingSchool18.push(nom);
}

function retire (nom) {
    codingSchool18.splice(codingSchool18.indexOf(nom), 1);
}

//1
ajoute("cactus");
ajoute("mihai");
ajoute("ilyas");
ajoute("mohammed");
ajoute("tania");
ajoute("oussama");
ajoute("alexis");
retire("alexis");
ajoute("issam");
ajoute("anthony");
ajoute("andy");
ajoute("loic");
ajoute("kevin");
ajoute("junior");
ajoute("charles");
ajoute("william");
retire("charles");
retire("william");
ajoute("gauthier");
ajoute("beytullah");
console.log(codingSchool18);