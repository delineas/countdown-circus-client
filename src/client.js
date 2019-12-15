import axios from "axios";

class ClientCountdown {
  static client;
  constructor() {
    this.client = axios.create({
      baseURL: `http://127.0.0.1:8081/api/`
    });
  }
  getCountdown(id) {
    return this.client.get(`countdowns/${id}`);
  }
}

export default ClientCountdown;
