const socket = io(`ws://localhost:10000`);

socket.on("connect", () => {
  console.log("connected");
});
