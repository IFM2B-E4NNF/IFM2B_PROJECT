const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "shop",
  password: "password",
  port: 5432
});

const getUser = () => {
    pool.query("SELECT USER FROM USERS where ID = 1",["ID"], (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results.rows);
      }
    );

}

getUser();

/* const helloWorld = () => {
  pool.query(
    "SELECT $1::text as message",
    ["Hello world!"],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);
    }
  );
};

helloWorld(); */