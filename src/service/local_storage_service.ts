class Local_Storage_Service {
  public static getAcessToken() {
    return localStorage.getItem("user-token");
  }

  public static setToken(token: any) {
    localStorage.setItem("refresh-token", token.refresh_token);
    return localStorage.setItem("user-token", token.user_token);
  }

  public static getRefreshToken() {
    return localStorage.getItem("refresh-token");
  }
}

export default Local_Storage_Service;
