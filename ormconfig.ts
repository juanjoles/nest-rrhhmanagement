
import {ConnectionOptions} from 'typeorm';

const config: ConnectionOptions = {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['src/modules/entities/employees.entity{.ts,.js}'],
      migrations:['src/database/migrations/*.ts'],
      synchronize: false,
      migrationsRun:true,
      cli:{
        migrationsDir: 'src/database/migrations'
    },
    
}
export = config;

// module.exports = {
//     "type": process.env.DB_TYPE,
//       "host": process.env.DB_HOST,
//       "port": parseInt(process.env.DB_PORT, 10) || 3306,
//       "username": process.env.DB_USERNAME,
//       "password": process.env.DB_PASSWORD,
//       "database": process.env.DB_NAME,
//       "entities": ['src/modules/entities/employees.entity{.ts,.js}'],
//       "migrations":["src/database/migrations/*.ts"],
      
//       "migrationsRun":true,
//       "cli":{
//         "migrationsDir":["src/database/migrations"]
//     },
//     "synchronize": true,
// }

// export default () => ({
//     database: {
//       type: process.env.DB_TYPE,
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT, 10) || 3306,
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       entities: ['src/modules/entities/teams.entity{.ts,.js}'],
//       migrations:["src/database/migrations/*.ts"],
//       synchronize: true,
//       migrationsRun:true,
//       cli:{
//         migrationsDir:"src/database/migrations"
//     },
      
//     },
    
//   });
  