import util from "util";
import request from "request";

const API_PATH = "%s/v1/agent/%s"

const REGISTER_DID = "registerDID";
const REGISTER_NAME = "registerName";
const IMPORT_DID = "importDID";
const AUTHORIZE_PROCESSOR = "authorizeProcessor";
const IMPORT_PROCESSOR = "importProcessor";
const REVOKE_PROCESSOR = "revokeProcessor";
const CREATE_JWT = "createJwt";
const VERIFY_JWT = "verifyJwt";
const CREATE_AUTH_REQUEST = "createAuthRequest";
const SIGN_AUTH_REQUEST = "signAuthRequest";
const VERIFY_AUTH_REQUEST = "verifyAuthRequest";
const VERIFY_AUTH_RESPONSE = "verifyAuthResponse"

export class ZypherAgent {
  private apiHost: string;

  constructor(host: string) {
    this.apiHost = util.format(API_PATH, host);
  }

  public registerDID(protocol: string, password: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(REGISTER_DID);
        let body = { protocol: protocol, password: password };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 201) {
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

  public registerName(protocol: string, password: string,
    name: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(REGISTER_NAME);
        let body = { protocol: protocol, password: password, name: name };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 201) {
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

  public importDID(password: string, did: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(IMPORT_DID);
        let body = { password: password, did: did };

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

  public authorizeProcessor(protocol: string, password: string,
    processorId: string, publicKey: string, auth: boolean,
    sig: boolean): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(AUTHORIZE_PROCESSOR);
        let body = {
          protocol: protocol,
          password: password,
          processorId: processorId,
          publicKey: publicKey,
          auth: auth,
          sig: sig
        };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 201) {
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

  public importProcessor(protocol: string, password: string,
    processorId: string, processorToken: string,
    privateKey: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(IMPORT_PROCESSOR);
        let body = {
          protocol: protocol,
          password: password,
          processorId: processorId,
          processorToken: processorToken,
          privateKey: privateKey
        };

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

  public revokeProcessor(protocol: string, password: string,
    processorId: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(REVOKE_PROCESSOR);
        let body = {
          protocol: protocol,
          password: password,
          processorId: processorId
        };

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

  public createJwt(protocol: string, password: string,
    claims: object, expiresIn: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(CREATE_JWT);
        let body = {
          protocol: protocol,
          password: password,
          claims: claims,
          expiresIn: expiresIn
        };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 201) {
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

  public verifyJwt(jwt: string, id: string): Promise<object> {
    return new Promise((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(VERIFY_JWT);
        let body = { jwt: jwt, id: id };

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

  public createAuthRequest(id: string): Promise<object> {
    return new Promise<object>((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(CREATE_AUTH_REQUEST);
        let body = { id: id };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 201) {
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

  public signAuthRequest(password: string,
    authRequest: object): Promise<object> {
    return new Promise<object>((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(SIGN_AUTH_REQUEST);
        let body = { password: password, authRequest: authRequest };

        request.post(apiUrl, { json: body }, (err, httpResponse, body) => {
          if (err)
            throw err;

          if (httpResponse.statusCode != 201) {
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

  public verifyAuthResponse(password: string,
    authReqsponse: object): Promise<object> {
    return new Promise<object>((onSuccess: Function, onError: Function) => {
      try {
        let apiUrl = this.getApiUrl(VERIFY_AUTH_RESPONSE);
        let body = { password: password, authReqsponse: authReqsponse };

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
