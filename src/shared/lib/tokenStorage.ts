const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const ROLE_KEY = "role";

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  role: string;
}

const TOKEN_CHANGE_EVENT = "tokenchange";

const isBrowser = () => typeof window !== "undefined";

const notifyTokenChange = () => {
  window.dispatchEvent(new Event(TOKEN_CHANGE_EVENT));
};

export const subscribeTokenChange = (onChange: () => void) => {
  window.addEventListener("storage", onChange);
  window.addEventListener(TOKEN_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(TOKEN_CHANGE_EVENT, onChange);
  };
};

export const saveTokens = ({ accessToken, refreshToken, role }: Tokens) => {
  if (!isBrowser()) return;

  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  localStorage.setItem(ROLE_KEY, role);

  notifyTokenChange();
};

export const getAccessToken = () =>
  isBrowser() ? localStorage.getItem(ACCESS_TOKEN_KEY) : null;

export const getRefreshToken = () =>
  isBrowser() ? localStorage.getItem(REFRESH_TOKEN_KEY) : null;

export const getRole = () =>
  isBrowser() ? localStorage.getItem(ROLE_KEY) : null;

export const removeTokens = () => {
  if (!isBrowser()) return;

  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(ROLE_KEY);

  notifyTokenChange();
};
