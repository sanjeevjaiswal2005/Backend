import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  const respons = await api.post("/api/auth/register", {
    username,
    email,
    password,
  });
  return respons.data;
}

export async function login({ email, password }) {
  const respons = await api.post("/api/auth/login", {
    email,
    password,
  });
  return respons.data;
}

export async function getMe() {
  const respons = await api.get("/api/auth/get-me");
  return respons.data;
}

export async function logout() {
  const respons = await api.post("/api/auth/logout");
  return respons.data;
}
