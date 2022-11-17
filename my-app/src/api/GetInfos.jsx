import http from "axios";

export default async function GetInfos() {
  //miért nem kellett Bálintnak "default" az előző nap?

  try {
    const response = http.request({
      //miért nem kell ide await?
      method: "GET",
      url: '"https://api.github.com/users"',
    });
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
