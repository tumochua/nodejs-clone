import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users')
    return res.render('index.ejs', { data: rows })
}

let getAbout = (req, res) => {
    return res.send(`I'm Eric!`)
}

let getDetalUser = async (req, res) => {
    let userId = req.params.id
    let [user] = await pool.execute(`select * from users where id = ?`, [userId])
    return res.render('Detail.ejs', { data: user })
}

let CreateNewUser = async (req, res) => {

    let { email, firstName, lastName, address } = req.body
    await pool.execute('insert into users(email,firstName,lastName, address) values (?, ?, ?, ?)',
        [email, firstName, lastName, address]
    )
    return res.redirect('/')
}

let DeleteUser = async (req, res) => {
    let userId = req.body.userId
    await pool.execute('delete from users where id = ?', [userId])
    return res.redirect('/')
}

let GetEditUser = async (req, res) => {
    let userId = req.params.id
    let [user] = await pool.execute(`select * from users where id = ?`, [userId])

    return res.render('updateUser.ejs', { data: user })
}

let postUpdateUser = async (req, res) => {
    //     UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;
    let { email, firstName, lastName, address, id } = req.body
    await pool.execute(`update users set email = ?,firstName = ?, lastName = ?,address = ? where id = ?`, [
        email, firstName, lastName, address, id
    ])
    res.send('hello from update')
}

module.exports = {
    getHomePage,
    getAbout,
    getDetalUser,
    CreateNewUser,
    DeleteUser,
    GetEditUser,
    postUpdateUser
}