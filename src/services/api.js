import * as axios from 'axios';

class Api {
    apiUrl = 'https://baseballcloud-back.herokuapp.com';

    setAuthorizationHeader = (response) => {
        axios.defaults.headers.common['access-token'] =  response.headers['access-token'];
        axios.defaults.headers.common['client'] =  response.headers['client'];
        axios.defaults.headers.common['uid'] =  response.data.data.uid;
        return response;
      }

    signUp = (data) => {
        return axios.post(`${this.apiUrl}/api/v1/auth`, data).then(this.setAuthorizationHeader);
      }

    signIn = (data) => {
        return axios.post(`${this.apiUrl}/api/v1/auth/sign_in`, data).then(this.setAuthorizationHeader);
    }

    persisSignIn = ({token, client, uid}) => (axios.get(`${this.apiUrl}/api/v1/auth/validate_token`, {
      headers: { 
        'access-token': token,
        client,
        uid,
      },
    }).then((response) => {
      this.setAuthorizationHeader(response);
      return response;
    }))

    getNetwork = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getSecondNetwork = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getLeaderBoard = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getLeaderBoardPitch = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getProfile = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getProfileEvent = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }
    getPitchingSummary = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getSchools = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }
    getTeams = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getFacilities = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    updateProfile = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`,data)
    }

    getCurrentProfile = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    changeFavorite = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data);
    }

    filterNetwork = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data);
    }

    filterLeaderBoardsBatt = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data);
    }

    filterLeaderBoardsPitch = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data);
    }

    searchPlayer = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getSecondProfile = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getBattingSummary = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

}
export default new Api();