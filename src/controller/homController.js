import connection from '../configs/connectDB'

let getHomePage = (req, res) => {
    let data = []
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            // console.log(results); // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
            data = results
            // console.log('check data', data);
            return res.render('index.ejs', { data: data })
        }
    );
}

let getAbout = (req, res) => {
    return res.send(`I'm Eric!`)
}

module.exports = {
    getHomePage,
    getAbout
}