export interface ClientCredentialTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface AuthUrlParams {
  response_type: "code";
  client_id: string;  // undefiend 추가하지 말고 엄격하게 가야한다!
  scope: string;
  code_challenge_method: "S256";
  code_challenge: string;
  redirect_uri: string;
}

export interface ExchangeTokenResponse {
    access_token: string;
    token_type: string;
    scope: string;
    expires_in: number;
    refresh_token: string;
}