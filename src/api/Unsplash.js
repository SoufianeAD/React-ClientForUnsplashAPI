import Axios from "axios";

export default Axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID -odSZURq_Z6KXDkDi0GbExBBr2Npe23GGl4_Jy8HgLM'
    }
});