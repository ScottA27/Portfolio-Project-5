import { axiosReq } from "../api/axiosDefaults";

const parseUrl = (url) => {
  try {
    if (url !== null) {
      const index = url.lastIndexOf("api/");
      url = url.slice(index + 3);
    }
    return url;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoreData = async (resource, setResource) => {
  try {
    const url = parseUrl(resource.next);
    const { data } = await axiosReq.get(url);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (error) {
    console.log(error);
  }
};

export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
