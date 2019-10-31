var db = require('./conn')

function insertdata(data, cb) {
    //var query = "insert into " + tbl_nm + " values(NULL,'" + data.nm + "','" + data.unm + "','" + data.pass + "','" + data.address + "','" + data.mob + "','" + data.city + "','" + data.gender + "','user',0);"
    db.collection('register').find().sort({ 'regid': -1 }).limit(1).toArray(function (err, result1) {
        if (err)
            console.log(err)
        else {
            data['regid'] = result1[0].regid + 1
            db.collection('register').insertOne(data, function (err, result) {
                if (result)
                    cb({ 'r': 'Record inserted successfully' })
                else
                    cb({ 'r': 'Record not inserted successfully' })
            })
        }
    })
}

function userlogin(data, cb) {
    //var query = "select * from " + tbl_nm + " where unm='" + data.unm + "' and pass='" + data.pass + "' and status=1;"
    db.collection("register").find({ 'uname': data.uname, 'pass': data.pass, 'type': 1 }).toArray(function (err, result) {
        if (err)
            console.log(err)
        else
            cb(result)
    })
}

function viewall(cnm, cb) {
    db.collection(cnm).find().toArray(function (err, result) {
        if (err)
            console.log(err)
        else
            cb(result)
    })
}

function deletedata(cnm, d, cb) {
    db.collection(cnm).remove({ '_id': d }, function (err, result) {
        if (err)
            console.log(err)
        else
            console.log(result)
        cb(result)
    })
}

module.exports = { insertdata: insertdata, viewall: viewall, deletedata: deletedata, userlogin: userlogin }
