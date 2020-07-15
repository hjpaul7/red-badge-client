let APIURL = "";

switch (window.location.hostname) {
  // this is the localhost name of react app
  case "localhost" || "127.0.0.1":
    // this is the local hostname name of your API
    APIURL = "http://localhost:4000";
    break;
  // this is the deployed react application
  case "https://t3-red-badge-client.herokuapp.com":
    // this is the full URL of deployed API/server
    APIURL = "https://t3-red-badge-server.herokuapp.com";
}
export default APIURL;
