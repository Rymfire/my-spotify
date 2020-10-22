export const spotify = {
    getAuthorizationCode,
}

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
        client_id: 'e4459a6e0f8c492087acf5c9def1537e',
        scope: 'user-read-private',
        redirect_uri: 'http://localhost:3000',
        response_type: 'code'
    };
    return new SpotifySignInPopup(data);
}
