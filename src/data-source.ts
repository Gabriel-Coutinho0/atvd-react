import { DataSource } from "typeorm";
import "dotenv/config" 

//https://orkhan.gitbook.io/typeorm/docs/data-source-options


const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST, 
    port: 5432, 
    username: process.env.TYPEORM_USERNAME, 
    password:process.env.TYPEORM_PASSWORD, 
    // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
    // deixe false ao usar migrations
    synchronize: false, 
    logging: true, // true indica que as consultas e erros serão exibidas no terminal
    entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
    migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
    subscribers: [],
    maxQueryExecutionTime: 2000, // 2 seg.
    database: process.env.TYPEORM_SCHEMA
});

// https://orkhan.gitbook.io/typeorm/docs/data-source
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default AppDataSource;