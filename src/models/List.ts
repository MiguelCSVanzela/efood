class ListClass {
  id: number;
  infos: [boolean, string];
  image: string;
  title: string;
  description: string;
  rate: number;

  constructor(
    id: number,
    infos: [boolean, string],
    image: string,
    title: string,
    description: string,
    rate: number
  ) {
    this.id = id;
    this.infos = infos;
    this.image = image;
    this.title = title;
    this.description = description;
    this.rate = rate;
  }
}

export default ListClass;
