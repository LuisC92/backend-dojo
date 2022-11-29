const albumRoute = require("./Album.routes")
const trackRoute = require("./Track.routes")


const setUpRoutes = (server)=>{
    server.use("/albums",albumRoute)
    server.use("/tracks",trackRoute)

}

module.exports = setUpRoutes