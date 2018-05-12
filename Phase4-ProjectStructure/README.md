# We are constructing a project structure.

npm install --save sequelize
npm install --save sqlite3
npm install -g sequelize-cli



sequelize model:create --name User --attributes username:string email:string password:string

sequelize model:create --name Contact --attributes name:string phoneNumber:string username:string