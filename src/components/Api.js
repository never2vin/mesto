  class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _request(endpoint, options) {
      return fetch(`${this._baseUrl}/${endpoint}`, options).then(this._getResponseData)
    }

    _getResponseData(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }

    getAllInitialData() {
      return Promise.all([this.getUserInfo(), this.getCards()]);
    }

    getUserInfo() {
      return this._request('users/me', {
        headers: this._headers
      })
    }

    updateUserInfo({ name, about }) {
      return this._request('users/me', {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name,
          about
        })
      })
    }

    updateUserAvatar({ link }) {
      return this._request('users/me/avatar', {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: link
        })
      })
    }

    getCards() {
      return this._request('cards', {
        headers: this._headers
      })
    }

    addCard({ name, link }) {
      return this._request('cards', {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
    }

    removeCard(id) {
      return this._request(`cards/${id}`, {
        method: 'DELETE',
        headers: this._headers
      })
    }

    handleLikeCard(cardId, method) {
      return this._request(`cards/${cardId}/likes`, {
        method,
        headers: this._headers
      })
    }
  }

  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: 'd8101b3f-044a-4c2d-92e2-9126c915abbf',
      'Content-Type': 'application/json'
    }
  });
