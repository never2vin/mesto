export default class UserInfo{
  constructor(avatarSelector, nameSelector, aboutSelector) {
    this._userAvatarElement = document.querySelector(avatarSelector);
    this._userNameElement = document.querySelector(nameSelector);
    this._userJobElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameElement.innerText,
      about: this._userJobElement.innerText,
    }
  }

  getId() {
    return this._id;
  }

  setUserInfo({avatar, name, about, _id}) {
    this._userAvatarElement.src = avatar;
    this._userNameElement.textContent = name;
    this._userJobElement.textContent = about;
    this._id = _id;
  }
}
