import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer nUgtaHE914wBP6keCoKsYoATs58-80VM3gZVp3artEd75VhAxKGoYDdo9c5MvZXOQs19sT6IgZxRrnntpnn4nSw6dYNjZ_uh60XyGzvqzxjC6N4STORm3Kox6lkXX3Yx",
  },
});
