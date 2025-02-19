## Database setup (Postgres + Prisma)

- Create postgres database on vercel.com. Use Neon which is a serverless database platfrom
- Install prisma packages `npm i -D prisma @prisma/client`
- Setup initial prisma schema file `npx prisma init`
- Copy DATABASE_URL from vercel into local .env file
- After you have created a model in the schema, you need to run generate in prisma
  to create all the methods etc... npx prisma generate. Also good to add that as a
  postinstall script (npm script) `npx prism generate`
- Then you create a table in the database (it creates the sql than is run against the database), you need to run the migrate command
  `npx prisma migrate dev --name init` . You give it name with the --name option. (It can be anything)
- Then to see all the tables you can run the handy script `npx prisma studio`
