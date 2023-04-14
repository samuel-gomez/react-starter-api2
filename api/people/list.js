import axios from 'axios';
import { setResponseValid, setResponseInvalid } from '../utils/index.js';
import { baseRoute } from './constants.js';
import { MESSAGES, TIMEOUT, options } from '../constants.js';
import data from './data.js';

const People = async (req, res) => {
  const { headers, query } = req;
  const { max, skip, sort, dir } = query;

  setTimeout(async () => {
    if (headers.testmock === '400') {
      res
        .status(400)
        .send(setResponseInvalid({ code: 400, label: MESSAGES.BAD_REQUEST }));
    } else if (headers.testmock === '500') {
      res
        .status(500)
        .send(setResponseInvalid({ label: MESSAGES.SERVOR_ERROR }));
    } else if (headers.testmock === '404') {
      res
        .status(404)
        .send(setResponseInvalid({ code: 404, label: MESSAGES.NOT_FOUND }));
    } else if (headers.testmock === '403') {
      res.status(403).send(
        setResponseInvalid({
          code: 403,
          detail: MESSAGES.SERVOR_UNAUTHORIZED,
        }),
      );
    } else if (headers.testmock === '0') {
      res.send(setResponseValid({ data: [] }));
    } else {
      // const { data } = await axios(`${baseRoute}`, options);
      res.send(setResponseValid({ data }));
    }
  }, TIMEOUT);
};

export default People;
