import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { setResponseInvalid, setResponseValid, TIMEOUT, TIMEOUTOVER } from "../utils/index.js";

const downloadDetails = (req, res) => {
  const { id } = req.params;
  const timeOut = id === "timeout" ? TIMEOUTOVER : TIMEOUT;

  setTimeout(() => {
    switch (id) {
      case "error500":
        res.status(500).send(setResponseInvalid({}));
        break;
      case "error404":
        res.status(404).send(setResponseInvalid({ code: 404 }));
        break;
      default:
        res.sendFile("details.csv", { root: path.join(__dirname, "../../public") });       
        break;
    }
  }, timeOut);
};

export default downloadDetails;
