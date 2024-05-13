/*
 * Title: apiResponse.js
 * Description : API response class
 * Author: Tanvir Hassan Joy
 * Date: 2024-05-12 21:59:49
 */

class apiResponse {
  constructor(status, data, message = "Success") {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
export default apiResponse;
