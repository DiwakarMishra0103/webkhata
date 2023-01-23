import { Http_Client } from "./../helpers/http_client";

const Path = {
  LOGIN: "",
  SIGNUP: "",
  FORGOT: "",
};

class Auth_Service {
  public static login(data: any) {
    return Http_Client.post(Path.LOGIN, data);
  }

  public static signup(data: any) {
    return Http_Client.post(Path.SIGNUP, data);
  }

  public static forgot(data: any) {
    return Http_Client.post(Path.FORGOT, data);
  }
}

export default Auth_Service;
