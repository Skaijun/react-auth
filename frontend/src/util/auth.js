import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedTokenDuration = localStorage.getItem("expiration");
  const tokenDuration = new Date(storedTokenDuration);
  const now = new Date();
  const duration = tokenDuration.getTime() - now.getTime();

  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return localStorage.getItem("token");
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/");
  }

  return null;
}
