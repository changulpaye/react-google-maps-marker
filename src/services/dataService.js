import axios from "axios";

const apiEndpoint =
  "https://europe-west1-glede-app-development.cloudfunctions.net";

export function getGledes() {
  return axios.get(apiEndpoint + "/gledessteder");
}
