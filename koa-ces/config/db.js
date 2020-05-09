const mysql = require('mysql')
const pool = mysql.createPool ({
    host: 'minglz.top',
    user: 'root',
    password: '123456',
    database: 'cesmanage'
})
const query = function (sql) {
    // console.log(sql)
    return new Promise((res, rej)=>{
        pool.getConnection((err, conn) => {
            conn.query(sql, (err, rows) => {
                // console.log(sql)
                res(rows)
                conn.release()
            })
        })
    })
}

module.exports= query