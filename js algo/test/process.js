const json = require("./data.json")

function readDataFromServer() {

    return json
}
function getTable() {
    var response = readDataFromServer()
    setTable(response.tvas)
}

console.log(readData())