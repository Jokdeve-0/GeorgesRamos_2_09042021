# GeorgesRamos_2_09042021

projet 2 openclassrooms "Transformez une maquette en site web"

##Liens
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)
Dépot Github : https://github.com/Jokdeve-0/GeorgesRamos_2_09042021
Page Github  : https://jokdeve-0.github.io/GeorgesRamos_2_09042021/

## Compatibilité
[![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)](https://forthebadge.com)
Compatible avec les dernières versions de Chrome et Firefox
W3C validé HTML et CSS3

## Structure

GeorgesRamos_2_09042021 =>

	- README.md
	- index.html
	- asstes =>

        	-font("Raleway")
        	-img (photos hébergements, photos activités, logo)
        	-styles=> 

                	- styles.css importent tous les autres fichiers.css
                	- main-utils.css contient:

                    		_les @font-face
                    		_les URL des images intégrées en background
                    		_des blocks custom de propriétés classés (évite trop de répétition ;-) 




## Les Consignes
[![forthebadge](https://forthebadge.com/images/badges/it-works-why.svg)](https://forthebadge.com)

Identité graphique :

	=> Respect des couleurs : #0065FC; #DEEBFF; #F2F2F2; 
	NOTE : j'ai ajouté des variantes - #D4D4D4; (pour les bordures) - #DEEBFF; (pour le hover des buttons "Filtres") - rgb(161,161,161); (pour les ombres)

    	=> Respect de la font "Raleway" 
	NOTE : J'ai utilisé de 3 variantes(font-weight) : "light, regular , bold"

    	=> Utilisation des icones Fontawesome. 
	NOTE : Intégrer en HTML et stylisés en CSS.

    	=> Les images: J'ai utilisé le logo.svg car le format est plus adapté au web,
	Et pour les photos, j'ai utilisé les petits formats, car elles suffisent, aucun d'affichage > a 400px

## Détail de l'application

-Responsive Breakpoints => MobileFirst , tablette 576px, desktop 992px

-Deux menus de navigation :
    -Un sur version mobile (width100%) et tablette (width50%)
    -Un sur version desktop Chaque lien vous dirige vers la section attitrée

-La barre de recherche (input) possède un placeholder et une value "en démo" (button) affiche un icone "loupe" sur mobile et tablette, et affiche le texte sur desktop

-Les filtres Inactif sur ce prototype. Au survol des boutons, j'ai choisi de grisé le background et d'inversé les couleurs de l'icône et de son background

-Les Div-cards sont des liens vers de futurs pages articles et sont entièrement cliquable.

-Le footer est un menu (ul) composer de liens(a) inactif.

###Le responive sur Tablette :
le menu se réduit de 50% les Div-cards se mettent sur deux éléments par ligne et affiche un élément supplémentaire dans la section Populaires subtilité dans la section activités, afin que les deux plus grand éléments ne soit pas l'un au-dessus de l'autre, j'ai appliqué un "row-reverse"

## Fabriqué avec
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
Aucun framework n'a été utilisé "From scratch"
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

### Versions

**version :** 1.0


### Auteurs

* **Georges Ramos** _alias_ [@Jokdeve-0](https://github.com/Jokdeve-0)