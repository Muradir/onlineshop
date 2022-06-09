
module.exports.exeSelectQuery = exeSelectQuery;

async function exeSelectQuery(selectQuery, filterParameters, connection){
    var data = undefined
    await connection.query(selectQuery, filterParameters, function (error, results, fields) {
        if (error) throw error;
        data = results[0]
        console.log("Result: " + results[0])
        console.log("Result: " + results)
    });
    if (data != undefined){
        return true
    }
    else{
        return false
    } 
};