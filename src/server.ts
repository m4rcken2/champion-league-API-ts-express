import createApp from "./app";

const server = createApp()
const port = process.env.PORT

server.listen(port, ()=>{
    console.log(`Server's running at http://localhost:${port}`)
})