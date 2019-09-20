var con = require('./conn')

function insertdata(data, cb) {
    con.collection('register').insert(data, function (err, result) {
        if (result)
            cb({ 'r': 'Record inserted successfully' })
        else
            cb({ 'r': 'Record not inserted successfully' })
    })
}

function viewall(cnm, cb) {
    con.collection(cnm).find().toArray(function (err, result) {
        if (err)
            console.log(err)
        else
            cb(result)
    })
}

function deletedata(cnm, d, cb) {
    con.collection(cnm).remove({'_id':d}, function (err, result) {
        if (err)
            console.log(err)
        else
            console.log(result)
        cb(result)
    })
}

module.exports = { insertdata: insertdata, viewall: viewall, deletedata: deletedata }