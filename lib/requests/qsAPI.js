const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `http://localhost:4000`
  } else {
    return `https://morning-headland-81593.herokuapp.com`
  }

}

module.exports = {
  baseURL
}
