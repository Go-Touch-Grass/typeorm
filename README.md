# TypeORM Crash Course - TypeScript & Node ORM
[YouTube Link](https://youtu.be/JaTbzPcyiOE?si=ZL520b13WzwSayt9)

## Application Setup

1. Install [PostgreSQL](https://www.postgresql.org/download/)

    [PostgreSQL Installation Guide](https://youtu.be/fZQI7nBu32M?si=CyyVNl8muBJrruZT)

2. Install [Node.js](https://nodejs.org/en)

## Repo Setup

1. `npm init -y`
2. `npm install express @types/express pg ts-node typeorm typescript`

    *Likely have to do this after pulling from this repo.

## GitHub Authentication Setup

1. Go to this [link](https://github.com/settings/tokens) and generate a personal access token (classic). (I checked all the boxes)
2. In the Visual Studio Code terminal, `git remote set-url origin https://<personal_access_token>@github.com/<your_username or organization_name>/<repo_name>.git`
3. Now you can try `git push`