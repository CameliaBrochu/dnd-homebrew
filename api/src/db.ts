import pg, { ClientConfig } from "pg";

export const connectDb = async ( ) => {

    const config: ClientConfig = {
        user: process.env.POSTGRES_USER,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD
    }

    const client = new pg.Client(config);
    await client.connect();

    return client;
}