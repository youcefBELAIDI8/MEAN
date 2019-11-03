# MEAN App 
## CRUD 

+ Dépendances ajoutées : 
> ng add @angular/material

Dans le fichier module : 
on ajoute : 
>> import { RouterModule, Routes } from '@angular/router';

>> On creer un array pour spécifier les routes de notre application, ici on a 4 routes : pour creer, editer, lister, puis une par defaut au cas ou on passe rien en parametre

>> On active ces routes on ajoutant de le fichier module toujours et dans le array import 

>> Pour utiliser <mat-toolbar> dans le fichchier app.component.html
	il faut importer une librairie dans le fichier app.module.ts
>>>   import { MatToolbarModule } from '@angular/material';


>>> Pour affichier dans la page html ce qui est taper dans la bar de navigation on écrit :
  <router-outlet></router-outlet> 

  Cette balise permet d'afficher le component qui correspond a ce qui est taper dans la bar de navigation.

  Par defaut on a choisi le component list. 