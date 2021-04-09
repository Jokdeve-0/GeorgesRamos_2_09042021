var array_pop = [
    ["Hotel le du matin","img1",128,5],
    ["Au cœur de l'eau<br>Chambres d'hôtes","img2",71,4],
    ["Hôtel Tout bleu et blanc","img3",68,4],
    ["Hôtel du port","img4",52,5]
];
var array_heb = [
    ["Auberge la Cannebière","img5",25,4],
    ["Hôtel du port","img6",52,5],
    ["Hôtel Les Mouettes","img7",76,4],
    ["Hôtel de la mer","img8",46,3],
    ["Auberge le Panier","img9",23,4],
    ["Hôtel chez Amina","img10",96,5]
];
/**
 * @param array
 * @param string
 * return element.innerHTML
 */
function affiche(array_cont, section) {
    var rang = 0,content = "",cont = document.getElementById(section);
    for (var i = 0; i < array_cont.length; i++) {
        rang = array_cont[i][3];
        var hide = "";
        //ajout class hide pour afficher le dernier element de populaire entre @media.576px et 992px
        if (i == array_cont.length-1){hide = "hide";}
        //Choix de section a afficher
        if (section == "pop") {
            content = content + '<a class="link ' + hide + '" href="#populaires"><div class="card dflex box-sw"><div class="vue ' + array_cont[i][1] + '"></div><div class="desc dflex fDir-c"><div class="w100"><h3>' + array_cont[i][0] + '</h3><p>Nuit à partir de ' + array_cont[i][2] + '€</p></div><div class="rang">';
        } else {
            content = content + '<a class="link l-heb" href="#hebergement"><div class="card card-heb dflex fDir-c box-sw"><div class="vue-heb ' + array_cont[i][1] + '"></div><div class="desc dflex fDir-c"><div class="w100"><h3>' + array_cont[i][0] + '</h3><p>Nuit à partir de ' + array_cont[i][2] + '€</p></div><div class="rang">';
        }
        //colore les étoiles
        var val = true;
        for (let i = 1; i < 6; i++) {
            if (i === rang + 1) {val = false;}
            if (val) {
                content = content + '<i class="fas fa-star paint"></i>';
            } else {
                content = content + '<i class="fas fa-star"></i>';
            }
        }
        content = content + '</div></div></div></a>';
    }
    //renvoie le code html dans son element div
    cont.innerHTML = content;
}
affiche(array_pop,"pop");
affiche(array_heb,"heb");