const sql = require('mssql')

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server= 192.168.1.101 ; Database= dummayData ; User Id= sa ; password= Dev@2022 ; Trusted_Connection=False')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}