import axios from "axios";

const instance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/"
});

// instance.defaults.headers.common("authorization") = "AUTH TOKEN";

// YOU COULD EVEN SET MORE DEFAULT HEADERS HERE

export default instance;