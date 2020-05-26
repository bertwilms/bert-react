import Api from '../componenten/api.js' ;

const collectData = (response) => response.data.results[0] ;

export const getMovie = () => {
        return Api.get(`movie?api_key=f6356f71a0245cd8ea4f701475aa8c45&language=en-US&query=interstellar&page=1&include_adult=false`)
            .then(collectData);
    } ;

