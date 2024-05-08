use actix_web::{App, HttpServer, web};
use sqlx::{
    Pool,
    Postgres
};
use actix_files::Files;
use std::env;
use colored::*;
mod databases{
    pub mod postgres_connection;
}

#[derive(Clone)]
pub struct AppState {
    postgres_client:Pool<Postgres>,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let website_host = env::var("HOST").expect("Host not set");
    let website_port = env::var("PORT").expect("Port not set");
    println!("{}: http://{}:{}","Servidor Web Actix Rodando em".bold(), website_host, website_port);
    let _pool = databases::postgres_connection::start_connection().await;
    HttpServer::new(move || {
        App::new().app_data(
            web::Data::new(AppState {
                postgres_client: _pool.clone(),
            })
        )
        .service(Files::new("/", "static/").prefer_utf8(true).index_file("index.html"))
    })
    .bind(format!("{}:{}", website_host, website_port))?
    .run()
    .await
}