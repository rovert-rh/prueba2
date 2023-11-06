# Getting Started with Frontend

npm install

# Getting Started with Backend

Intalar Docker: https://www.docker.com/products/docker-desktop/

dotnet restore

dotnet build 

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Ecommerce20$" -p 1433:1433 --name "sql-server-ecommerce" -d mcr.microsoft.com/mssql/server

dotnet ef migrations add InitMigration -p src/Infrastructure/ -s src/Api

## Borrar la carpeta migrations de Infraestrucutra en el backend.

## 'dotnet run --project src/api'

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000/api) to view it in postman.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Initial Backend

cd backend/ 

dotnet run --project src/api# prueba2
