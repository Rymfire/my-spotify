import utils from "../../utils/utils";

const axios = require("axios");
const qs = require("qs")

export const spotify = {
    getAuthorizationCode,
    getAccessTokenWithAuthorizationCode,
    getAccessTokenWithRefreshToken,
    getMyUser,
}


// AUTHORIZATION FLOW

class SpotifySignInPopup {
    constructor(data) {
        const url = `https://accounts.spotify.com/authorize?response_type=${data.response_type}&client_id=${data.client_id}&scope=${data.scope}&redirect_uri=${data.redirect_uri}`;
        const title = `Give access to your Spotify account`;

        this.window = window.open(url, title);
        this.promise = new Promise((resolve, reject) => {
            this.eventHandler = window.setInterval(() => {
                try {
                    const popup = this.window;

                    if (!popup || popup.closed) {
                        this.close();

                        reject({code: 'SIGNIN_POPUP_CLOSED'});

                        return;
                    }

                    if (popup.location.href === this.url || popup.location.pathname === 'blank')
                        return;

                    const data = popup.location.search;
                    const res = data.substr(1).split('=')[1];

                    resolve({code: res});

                    this.close();
                } catch (err) {
                    console.log(err);
                }
            })
        });
        return this;
    }

    cancel() {
        if (this.eventHandler) {
            window.clearInterval(this.eventHandler);
            this.eventHandler = null;
        }
    }

    close() {
        this.cancel();
        this.window.close();
    }

    then(success, error) {
        return this.promise.then(success, error);
    }
}

function getAuthorizationCode() {
    const data = {
        client_id: utils.client_id,
        scope: 'user-read-private',
        redirect_uri: 'http://localhost:3000',
        response_type: 'code'
    };
    return new SpotifySignInPopup(data);
}

function getAccessTokenWithAuthorizationCode(authorizationCode) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const body = {
        'grant_type': "authorization_code",
        'code': authorizationCode,
        'redirect_uri': `http://localhost:3000`,
        'client_id': utils.client_id,
        'client_secret': utils.client_secret
    };
    return axios({
        method: 'post',
        url: `https://accounts.spotify.com/api/token`,
        data: qs.stringify(body),
        headers: headers,
    });
}

function getAccessTokenWithRefreshToken(refreshToken) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const body = {
        'grant_type': "refresh_token",
        'refresh_token': refreshToken,
        'client_id': utils.client_id,
        'client_secret': utils.client_secret
    };
    return axios({
        method: 'post',
        url: `https://accounts.spotify.com/api/token`,
        data: qs.stringify(body),
        headers: headers,
    });
}

// AUTHORIZATION FLOW END

// USER FUNCTIONS

function getMyUser(tokens) {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${tokens.token_type} ${tokens.access_token}`
    };
    return axios({
        method: 'get',
        url: `https://api.spotify.com/v1/me`,
        headers: headers,
    });
}

// USER FUNCTIONS END
