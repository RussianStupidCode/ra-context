const REACT_APP_BASE_URL = process.env.PUBLIC_URL || "";

const ROUTER_PATH = {
  base: `${REACT_APP_BASE_URL}`,
  useEffect: `${REACT_APP_BASE_URL}/use-effect`,
  jsonFetch: `${REACT_APP_BASE_URL}/json-fetch`,
};

export { ROUTER_PATH };
