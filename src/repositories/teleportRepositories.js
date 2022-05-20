import axios from 'axios';

const apiTeleportClient = axios.create({
    baseURL: process.env.TELEPORT_API_CLIENT,
    timeout: 15000,
});
  
export default {
    getCityScores(slug) {
        return apiTeleportClient.get(`api/urban_areas/slug:${slug}/scores/`);
    },
}
