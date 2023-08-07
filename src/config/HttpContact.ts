import axios, { Axios, AxiosInstance, AxiosResponse } from "axios";

//export const http = axios.create({
//baseURL: "http://localhost:3000",
//});
export default class HttpClient {
  public http: AxiosInstance;

  constructor(baseUrl = "http://localhost:3000") {
    this.http = axios.create({
      baseURL: baseUrl,
    });
  }

  public get<T = unknown>(url: string): Promise<AxiosResponse<T>> {
    return this.http.get(url);
  }
  public post<T = unknown>(
    url: string,
    data: unknown
  ): Promise<AxiosResponse<T>> {
    return this.http.post(url, data);
  }
}
