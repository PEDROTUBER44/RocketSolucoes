use sqlx::{
    postgres::PgPoolOptions,
    Pool,
    Postgres
};
use colored::*;
use std::env;

pub async fn start_connection() -> Pool<Postgres>{
    let user = env::var("USER").expect(&format!("{}","User not set".bold().red()));
    let host = env::var("DB_HOST").expect(&format!("{}","Postgres host not set".bold().red()));
    let port = env::var("DB_PORT").expect(&format!("{}","Postgres port not set".bold().red()));
    let password = env::var("PASSWORD").expect(&format!("{}","Password not set".bold().red()));
    let database = env::var("DB").expect(&format!("{}","Database name not set".bold().red()));

    let client = format!("postgresql://{}:{}@{}:{}/{}", user, password, host, port, database); // DATABASE_URL=postgresql://[USERNAME]:[PASSWORD]@[HOST:PORT]/[DB]

    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&client)
        .await
        .expect(&format!("{}","Error building a connection pool".bold().red()));

    let check_migrate = sqlx::migrate!("./src/databases/postgres_connection/migrations")
        .run(&pool)
        .await;

    match check_migrate {
        Ok(_) => {
            println!("{}","Migrations run sucessfully".bold().green());
        },
        Err(e) => {
            println!("{} {:?}","Error to running migrations:".bold().red(), e);
        }
    }

    pool
}