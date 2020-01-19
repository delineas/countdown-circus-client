import axios from "axios";

class ClientCountdown {
  static client;
  constructor() {
    this.client = axios.create({
      baseURL: `${process.env.VUE_APP_BACKEND_URL}/api/`
    });
  }
  getCountdown(id) {
    return this.client.get(`countdowns/${id}`);
  }
  sendCountdown(data) {
    return this.client.post('countdowns', data);
  }
}

export default ClientCountdown;
