import axios from "axios";

const api = (() => {
    const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

    async function shortifyUrl(url) {
        const { data } = await axios.get(`${BASE_URL}${url}`);
        const { result } = data;

        return result;
    }
    return { shortifyUrl };
})();

export default api;
