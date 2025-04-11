export class UserDataMapper {
  constructor(response) {
    this.user_id = response.id;
    this.user_roles = response.roles;
  }

  static map(data) {
    const response = new UserDataMapper(data);
    return response;
  }
}
