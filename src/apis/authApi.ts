import axios from "axios";
//import { URLSearchParams } from "url"; // URLSearchParams는 최신 브라우저와 Node.js 환경에 이미 내장(Global)되어 있는데, 이를 명시적으로 url 모듈에서 가져오려고 하면 에러가 남
import { CLIENT_SECRET, CLIENT_ID } from "../configs/authConfig";
import { ClientCredentialTokenResponse } from "../models/auth";
import { REDIRECT_URI } from "../configs/commonConfig";

const encodedBase64 = (data: string): string => {
  if (typeof window !== "undefined") {
    //브라우저 환경
    return btoa(data);
  } else {
    // Node.js 환경
    return Buffer.from(data).toString("base64");
  }
};

export const getClientCredentialToken =
  async (): Promise<ClientCredentialTokenResponse> => {
    try {
      const body = new URLSearchParams({
        grant_type: "client_credentials",
      });
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        body,
        {
          headers: {
            Authorization: `Basic ${encodedBase64(
              CLIENT_ID + ":" + CLIENT_SECRET
            )}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Fail to fetch client credential token");
    }
  };

export const exchangeToken = async (code: string, codeVerifier: string) => {
  try {
    const url = "https://accounts.spotify.com/api/token";
    if (!CLIENT_ID || !REDIRECT_URI) {
      throw new Error("Missing requred parameters");
    }
    const body = new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    });
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("fail to fetch token");
  }
};
