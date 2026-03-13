export async function registerUser(req, res, next) {
  try {
    throw new Error("user is already exist");
  } catch (err) {
    err.status = 409;
    next(err);
  }
}
