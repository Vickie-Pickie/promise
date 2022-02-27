export default class GameSaving {
  constructor(data) {
    const { id, created, userInfo } = data;
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}
