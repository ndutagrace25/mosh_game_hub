import axios from "axios";

export default axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {
    key: "04e80d9a08e147719377fc7cb9b845d7",
  },
});
