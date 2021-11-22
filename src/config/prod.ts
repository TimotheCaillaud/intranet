const PORT = 4000
const HOST = process.env.INTRANET_HOST || "fo.parisestludique.fr"

export default {
    PORT,
    HOST: "0.0.0.0",
    API_URL: `http://${HOST}:${PORT}`,
}
