const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "48fa3b1a7d95df9d1ed29a8d72e39caf",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;