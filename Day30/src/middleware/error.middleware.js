import dotenv, { config } from "dotenv";

config(dotenv);

function handleError(err, req, res, next) {
  const respons = {
    message: err.message,
  };

  if (process.env.NODE_ENVIRONMENT === "development") {
    respons.stack = err.stack;
  }
  res.status(err.status).json(respons);
}

export default handleError;
