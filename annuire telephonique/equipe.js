var annuaire= {
    patricia: "0690 99 10 20",
    david: "0690 52 45 63",
    silvia: "0690 47 89 56",
    patrice: "0690 54 54 70",
    caroline: "0690 19 85 74",
}; 
//MES INSTRUCTION
document.write("<h3>" + "LISTE TELEPHONIQUE" + "<h3>")
    
for (var cle in annuaire) {
    document.write(cle, '->', annuaire[cle], "<br>");}

    document.getElementById("ajouter").addEventListener('click', function ajouter() {
    var prenom= prompt("saisir nom du nouveau contact");
                var num= prompt("saisir numero du nouveau contact");
                annuaire[prenom]=num;
});

document.getElementById("suprimer").addEventListener('click',function suprimer() {
    var supp=prompt("QUELLE CONTACT SHOUAITER VOUS SUPPRIMER")
                delete(annuaire[supp]);
});

document.getElementById("liste").addEventListener('click', function liste() {
        for (var cle in annuaire) {
        document.write(cle, '->', annuaire[cle], "<br>");} 
});



