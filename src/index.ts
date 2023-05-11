import { app } from "./server/index.js";

const port = process.env.PORT ?? 4000;

app.listen(port);
