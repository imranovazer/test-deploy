import fs from 'fs/promises'

//{METHOD} {URL} query:{QUERYPARAMS} body:{BODY}
export const Logger = (req, res, next) => {


    console.log(req.url)
    fs.writeFile('logs.txt', `${req.method} ${req.url} query:${JSON.stringify(req.query)} body: ${JSON.stringify(req.params)} \n`, {
        flag: 'a'
    })


    return next()
}