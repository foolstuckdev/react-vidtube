import axios from "axios";

const KEY = "AIzaSyAzkFo_6b9EOx4INfe70gEGn20y9BQHllE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
