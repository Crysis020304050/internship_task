First of all your should run command 'yarn install' in client and server directory to install all dependencies

After that you should run command 'npx sequelize db:migrate' and 'npx sequelize db:seed:all' in server directory to set up your database

After that you can run project, move to client directory and run command 'yarn start', Open http://localhost:3000 to view it in the browser.