const app = require("express")();
const httpServer = require("http").createServer(app);
const options = {
  cors: {
    origin: "*",
  },
};
const io = require("socket.io")(httpServer, options);

const PORT = 5000;
httpServer.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on("connection", (socket) => {
  console.log("new client connected");
});
