import util from "util";
import request from "request";

const API_PATH = "%s/v1/wallet/%s"

const GET_ADDRESS = "getAddress";
const GET_INFO = "getInfo";
const GET_PUBLIC_KEYS = "getPublicKeys";
const GET_SEED_PHRASE = "getSeedPhrase";
const RECOVER_FROM_SEED_PHRASE = "recoverFromSeedPhrase";

export class ZypherWallet {
  private apiHost: string;

  constructor(host: string) {
    this.apiHost = util.format(API_PATH, host);
  }

  public getAddress(protocol: string, password: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(GET_ADDRESS);
        let body = { protocol: protocol, password: password };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 200) {
            onError(body);
            return;
          }

          onSuccess(body);
        });
      } catch (err) {
        onError(err);
      }
    });
  }

  public getInfo(protocol: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(GET_INFO);
        let body = { protocol: protocol };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 200) {
            onError(body);
            return;
          }

          onSuccess(body);
        });
      } catch (err) {
        onError(err);
      }
    });
  }

  public getPublicKeys(protocol: string, password: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(GET_PUBLIC_KEYS);
        let body = { protocol: protocol, password: password };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 200) {
            onError(body);
            return;
          }

          onSuccess(body);
        });
      } catch (err) {
        onError(err);
      }
    });
  }

  public getSeedPhrase(protocol: string, password: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(GET_SEED_PHRASE);
        let body = { protocol: protocol, password: password };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 200) {
            onError(body);
            return;
          }

          onSuccess(body);
        });
      } catch (err) {
        onError(err);
      }
    });
  }

  public recoverFromSeedPhrase(protocol: string, password: string,
    phrase: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(RECOVER_FROM_SEED_PHRASE);
        let body = { protocol: protocol, password: password, phrase: phrase };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 200) {
            onError(body);
            return;
          }

          onSuccess(body);
        });
      } catch (err) {
        onError(err);
      }
    });
  }

  private getApiUrl(endpoint: string): string {
    return util.format(this.apiHost, endpoint);
  }

}
