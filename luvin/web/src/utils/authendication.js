import Cookie from "js-cookie";

const TOKEN_COOKIE_KEY = "_tl";

const singleton = Symbol("singleton");
const singletonEnforcer = Symbol("singletonEnforcer");

class Authendication {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error(
        'Constructor không được phép gọi trực tiếp, hãy dùng "Authendication.instance"'
      );
    }

    this.token = null;
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Authendication(singletonEnforcer);
    }
    return this[singleton];
  }

  /**
   * Get token
   * @returns {*|null}
   */
  getToken() {
    if (!this.token) {
      const token = Cookie.get(TOKEN_COOKIE_KEY);
      if (token) {
        this.token = token;
      }
    }
    return this.token;
  }

  /**
   * Lưu token cookie
   * @param token
   */
  saveAuthToCookie(token) {
    Cookie.set(TOKEN_COOKIE_KEY, token, { expires: 90 }); // 3 tháng
    this.token = token;
  }

  logout() {
    Cookie.remove(TOKEN_COOKIE_KEY);
    this.token = null;
  }
}

export default Authendication.instance;
