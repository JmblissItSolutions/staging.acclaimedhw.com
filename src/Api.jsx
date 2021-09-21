import axios from "axios";

const instance = axios.create({

  baseURL: "https://staging.acclaimedhw.com/replatform/api/",
  assetsURL: "https://staging.acclaimedhw.com/replatform",
});

export default instance;