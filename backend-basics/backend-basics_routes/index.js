import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
  console.log(`server running at ${port}`);
  console.log(`everything's gonna be alright`);
});
