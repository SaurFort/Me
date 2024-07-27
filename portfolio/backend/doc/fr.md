# SaurFort's API <!-- omit in toc -->

Cette API est utilisé et a été créer par SaurFort

## Sommaire <!-- omit in toc -->

- [Utilisation disponible](#utilisation-disponible)
  - [Projet](#projet)
    - [Arguments](#arguments)
    - [Exemple de requête](#exemple-de-requête)
  - [Codes d'erreurs](#codes-derreurs)

## Utilisation disponible

> [!INFO]\
> Pour tout les exemples nous allons utiliser l'API comme en développemen locale `http://localhost/api`.

### Projet

> [!INFO]\
> Actuellement vous pouvez seulement récupérer les projets de SaurFort avec quelques arguments
> Pour accéder à la partie projet de l'API vous avez besoin de faire des requêtes à `project.php`.

#### Arguments

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `lang` | Prend la traduction de la description d'un projet. | string (en) | en |
| `sort` | Tri les résultats par date de création. | latest/oldest | latest |
| `filter` | Permet de filtrer par le nom. | string | _null_ |
| `limit` | Limite le nombre de résultat rendu par l'API. | int | -1 (all project) |

> [!WARNING]\
> Pour le moment, `lang` supporte uniquement l'anglaid (en) et le français (fr)
> `sort` prend seulement deux valeurs (latest/oldest)

#### Exemple de requête

- Prenons les projets en français et trier du plus récent au plus ancien:

  ```http
  GET http://localhost/api/project.php?lang=fr&sort=latest
  ```

  ```json
  [
    {
      "id": 1,
      "name": "Project 1",
      "description": "Description du Projet 1",
      "technologies": "React, PHP, MySQL",
      "creation": "15/03/2022"
    },
    {
      "id": 2,
      "name": "Project 2",
      "description": "Description du Projet 2",
      "technologies": "Node.js, Express, MongoDB",
      "creation": "22/11/2021"
    }
  ]
  ```

- Prenons les 5 projets les plus anciens :
  
  ```http
  GET http://localhost/api/project.php?sort=oldest&limit=5
  ```

  ```json
  [
    {
      "id": 4,
      "name": "Project 4",
      "description": "Description of Project 4",
      "technologies": "GDScript",
      "creation": "16/08/2019"
    },
    {
      "id": 2,
      "name": "Project 2",
      "description": "Description of Project 2",
      "technologies": "Node.js, Express, MongoDB",
      "creation": "22/11/2021"
    },
    {
      "id": 1,
      "name": "Project 1",
      "description": "Description of Project 1",
      "technologies": "React, PHP, MySQL",
      "creation": "15/03/2022"
    },
    {
      "id": 3,
      "name": "Project 3",
      "description": "Description of Project 3",
      "technologies": "Python",
      "creation": "10/05/2024"
    }
  ]
  ```

> [!INFO]\
> S'il n'y a pas suffisament de données pour atteindre la limite alors l'API va retourner le maximum possible.

### Codes d'erreurs

> [!WARNING]\
> Puisque l'API n'a pas été conçu pour être utilisé par d'autre utilisateurs, les codes d'erreurs ont été personnalisé.

| Code | Description | Variation |
| --- | --- | --- |
| 30 | Argument invalide pour les projets | A,B |
| 90 | Erreur dans une requête SQL | _aucune_ |
