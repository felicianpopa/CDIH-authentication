export class UserAuthMapper {
  constructor(response) {
    this.user_id = response.user_id;
    this.user_roles = response.user_roles;
    this.token = response.token;
    this.refresh_token = response.refresh_token;
  }

  static map(data) {
    const response = new UserAuthMapper(data);
    return response;
  }
}
