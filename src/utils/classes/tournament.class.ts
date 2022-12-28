export default class Tournament {

  public readonly id: string;
  public name:     string;
  public players:  string[]

  constructor(id: string) {
    this.id = id;
    this.name = '';
    this.players = [];
  }
} 