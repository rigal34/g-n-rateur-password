//création de mes données de 4 tableaux
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();//prend toute les lettres en minuscules pour les transformer en majuscule
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)"; //j'ai mis \ pour que mes "" soit pris en considération dans le code
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
//console.log(passwordOuput);
//console.log(rangeValue.value);//m'affiche le numéro de mon curseurs input les balises sont considérées comme des objets
//console.log(dataSymbols);
//qu'est ce qui a été coché pour mettre tout dans un tableau global
function generatePassword() {
   let data = [];//tableau qui récolte les données qui ont été cochées
  // console.log(lowercase.checked);//permet de savoir ce qui a été coché id est reconnu avec js de ma checkbox

  //boîte qui stocke tout les éléments qui ont été choisi aléatoirement
  let password = "";

   if (lowercase.checked) data.push(...dataLowercase);//si lowercase et checked on les ajoutes datalowercase donnée pousse dans notre tableau data []
   if (uppercase.checked) data.push(...dataUppercase);
   if (numbers.checked) data.push(...dataNumbers);
   if (symbols.checked) data.push(...dataSymbols);
//console.log(data[11]);//sélectionne mon tableau 2 et mon 2ièm chiffre pour cela on va casser notre tableau pour que se soit moins compliqué faire un seul tableau avec tout les caractéres avec le spray d'opérateur
//je créer une petite sécurité si rien n'est coché dans mes tableaux

if (data.length === 0) {
    alert("veuillez sélectionner des critéres");
    return;//et aprés la fontion s'arrête içi
}


for (i = 0; i < rangeValue.value; i++){//tant que la valeur de mon curseurs n'est pas atteinte tu continus à exécuter la boucle

    password += (data[Math.floor(Math.random() * data.length)]);//dans le tableau des données récupérés tu enlève les virgules et aprés on utilise random
    //console.log(data);

   // console.log(password);
}

passwordOutput.value = password;//dans les input on ne peut pas mettre des innerHTML ou textContent pour afficher cela on écrit comme cela "passwordOuput.value = password;"

//aprés avoir généré le mot de pass au-dessus on va selectionner mon pass pour le copier par la suite avec execCommand ("copy")
passwordOutput.select(); 
document.execCommand("copy");

generateButton.textContent = "Copié !"

//fonction fléchée est qu'est ce que tu fais,et dans combien de temps tu va le faire et la fonction m'envoie le message "Générer mot de passe";


setTimeout(() => {
    generateButton.textContent ="Générer mot de passe";
}, 2000);

}
/////////////////////////////////////////////////////////////////////

//je creer un évènement sur mon boutton

generateButton.addEventListener("click", generatePassword);



