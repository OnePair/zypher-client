import util from "util";
import request from "request";

const API_PATH = "%s/v1/agent/%s"

const REGISTER_DID = "registerDID";
const IMPORT_DID = "importDID";
const AUTHORIZE_PROCESSOR = "authorizeProcessor";
const IMPORT_PROCESSOR = "importProcessor";
const REVOKE_PROCESSOR = "revokeProcessor";
const CREATE_JWT = "createJwt";
const VERIFY_JWT = "verifyJwt";

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

  private getApiUrl(endpoint: string): string {
    return util.format(this.apiHost, endpoint);
  }
}
