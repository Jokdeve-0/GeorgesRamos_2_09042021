# GeorgesRamos_2_09042021

# projet 2 openclassrooms => "Transformez une maquette en site web"
# Compatible avec les dernières version de Chrome et Firefox
# W3C validé HTML et CSS3

/*--LIENS------------------------------------------------------------------------------*/

# Dépot Github => https://
# Page Github => https://

/*--Structure des dossiers   (*dir =>) ------------------------------------------------*/

# GeorgesRamos_2_09042021 =>
    - README.md
    - index.html
    - asstes =>
            -font("Raleway")
            -img (photos hébertgements, photos activités, logo)
            -styles=> 
                    - styles.css importent tous les autres fichiers.css
                    - main-utils.css contient:
                        _les @font-face
                        _les urls des images intégrées en background
                        _des blocks custom de propriétées classés (évite trop de répétition ;-) 

/*---Les Consignes--------------------------------------------------------------------*/

- Aucun framework n'a été utilisé "From scratch"

- Identité graphiques:

	=> Respect des couleurs : #0065FC; #DEEBFF; #F2F2F2;
		"NOTE" : j'ai ajouté des varaintes 
			- #D4D4D4; (pour les bordures)
			- #DEEBFF; (pour le hover des buttons "Filtres") 
			- rgb(161,161,161); (pour les ombres)

	=> Respect de la font "Raleway"
		"NOTE" :  J'ai utilisé de 3 variantes(font-weight) : "light, regular , bold"

	=> Utilisation des icones Fontawesome.
		"NOTE" : Intégrer en HTML et stylisés en CSS.

	=> Les images:
		"NOTE" : J'ai utilisé le logo.svg car le format est plus adapté au web
		et pour les photos, j'ai utilisé les petits formats, car ils suffisent, aucun d'affichage > a 400px

/*---Le Site-------------------------------------------------------------------------*/

Responsive Breakpoints => MobileFirst , tablette 576px, desktop 992px

Description =>

Deux menus de navigation
- Un sur version mobile (width100%) et tablette (width50%)
- Un sur version desktop
Chaque lien vous dirige vers la section attitrée

La barre de recherche 
(input) possède un placeholder et une value "en démo"
(button) affiche un icone "loupe" sur mobile et tablette, et affiche le texte sur desktop

Les filtres
Inactif sur ce prototype. 
Au survol des bouttons, j'ai choisi de grissé le background et d'inversé les couleurs de l'icone et de son background

Les Div-cards sont des liens vers de futurs pages articles et sont entièrement cliquable.

Le footer est un menu (ul) composer de liens(a) inactif.

/*---Le responive sur Tablette--------------------------------------------------------*/

le menu se reduit de 50%
les Div-cards se mettent sur deux éléments par ligne et affiche un élément suplémentaire dans la section Populaires
*subtilité* dans la section activités, afin que les deux plus grand elements ne soit pas l'un au dessus de l'autre, j'ai appliqué un "row-reverse"






















