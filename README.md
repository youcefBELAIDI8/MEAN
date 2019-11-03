
# MEAN App 

## CRUD 


### Partie I Front-end Project Setup And Routing

+ Dépendances ajoutées : 
> ng add @angular/material

Dans le fichier module : 
on ajoute : 
>> import { RouterModule, Routes } from '@angular/router';

>> On creer un array pour spécifier les routes de notre application, ici on a 4 routes : pour creer, editer, lister, puis une par defaut au cas ou on passe rien en parametre

>> On active ces routes on ajoutant dans le fichier module toujours et dans le array import 

>> Pour utiliser <mat-toolbar> dans le fichier app.component.html
	il faut importer une librairie dans le fichier app.module.ts
>>>   import { MatToolbarModule } from '@angular/material';


>>> Pour affichier dans la page html ce qui est taper dans la bar de navigation on écrit :
  <router-outlet></router-outlet> 

  Cette balise permet d'afficher le component qui correspond a ce qui est taper dans la bar de navigation.

  Par defaut on a choisi le component list. 



### Partie II Implementing The Back-end

1. : npm init
2. : npm install --save-dev babel-cli babel-preset-env
3. : creer a la racine de Backend un fichier nomé .babelrc
4. : npm install --save-dev babel-watch
		 c'est un auto compiler
5. : npm install express
6. : npm install mongoose
7. : npm install cors
	Pour acceder a un serveur qui ne tourne pas en local, ici mangodb atlas



### Partie III Connecting Front-end To Back-end

Dans le dossier Frontend:
+ ng g s Issues

Dans le fichier app.module.ts:
+ import { IssueService } from './issue.service';
+ Ajouter: IssueService dans le tableau : providers
+ import { HttpClientModule } from '@angular/common/http';
+ Ajouter: HttpClientModule dans le tableau import
+ Modifier le fichier: issue.service.ts (à regarder)

> Modification des components
>> list.component.ts
+ import { IssueService } from '../../issue.service';
+ Modifier le constructeur

>> edit.component.ts
+ import { IssueService } from '../../issue.service';
+ Modifier le constructeur

>> create.component.ts
+ import { IssueService } from '../../issue.service';
+ Modifier le constructeur

Pour faire le test il faut :
+ lancer le backend avec : npm run dev
+ lancer le frontend avec : ng serve --open  
	open pour lancer dans le navigateur automatiquement - recommandé 