module.exports = {
  apps: [{
    name: "skatepark",
    script: "./index.js",
    watch: false,
    instances: 1,
    exec_mode: "cluster",
    max_memory_restart: '500M',
    cron_restart: "59 23 * * * *",
    node_args: "--require dotenv/config",
    env: {
      NODE_ENV: "development",
      PGHOST: "localhost",
      PGUSER: "postgres",
      PGPASSWORD: "adminjoel",
      PGDATABASE: "skatepark",
      PGPORT: 5432
    }
  }]
}
