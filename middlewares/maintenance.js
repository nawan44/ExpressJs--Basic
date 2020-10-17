const fs = require('fs')
module.export = (req, res, next) => {
    if (fs.existsSync("./down")) {
        res.send(" Under Maintenance")
    } else {
        next()
    }
}