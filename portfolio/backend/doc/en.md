# SaurFort's API <!-- omit in toc -->

This is the API used and created by SaurFort

## Summary <!-- omit in toc -->

- [Usage available](#usage-available)
  - [Project](#project)
    - [Arguments](#arguments)
    - [Example Requests](#example-requests)
  - [Error Codes](#error-codes)

## Usage available

> [!IMPORTANT]\
> For all examples, we're gonna use the API like in local development `http://localhost/api`.

### Project

> [!NOTE]\
> Actually you can only gets projects of SaurFort with some argument.
> To access at the project's API you need to request `project.php`.

#### Arguments

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `lang` | Take translation of the project description. | string (en) | en |
| `sort` | Sort results by creation date. | latest/oldest | latest |
| `filter` | Permit to filter project by name. | string | _null_ |
| `limit` | Limit the number of projects sorted. | int | -1 (all project) |

> [!WARNING]\
> For the moment `lang` support only English (en) and French (fr)
> `sort` take only two value (latest/oldest)

#### Example Requests

- Gets French project, sorted by latest:

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

- Get the first 5 projects sorted by oldest:
  
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

> [!NOTE]\
> If there isn't enough row for your limit, the API return the max reachable.

### Error Codes

> [!IMPORTANT]\
> Since this API is not intended for use by other users, the error codes have been customized.

| Code | Description | Variation |
| --- | --- | --- |
| 30 | Invalid argument for project | A,B |
| 90 | SQL query error | _none_ |
