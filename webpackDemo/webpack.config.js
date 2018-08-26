module.exports = {
    entry: {
        bundle:'./app/index.js'
    },
    output: {
        filename:'[name].js',
        path:__dirname +'/dist'
    }
}