import { PrimaryCardModel } from 'src/app/models/primary-card.model';

export class PrimaryCardMock {
  public static getPeople(): PrimaryCardModel[] {
    return [
      {
        img: '../../../assets/img/jennifer-aniston-.jpg',
        personName: 'Jennifer Aniston',
        profession: 'Actress',
        origin: 'New York US',
      },
      {
        img: '../../../assets/img/charlize-t.jpg',
        personName: 'Charlize Theron',
        profession: 'Actress',
        origin: 'South Africa',
      },
      {
        img: '../../../assets/img/miley-cyrus.jpg',
        personName: 'Miley Cyrus',
        profession: 'Singer',
        origin: 'Nashville US',
      },
      {
        img: '../../../assets/img/kate-beckinsale.jpg',
        personName: 'Kate Beckinsale',
        profession: 'Actress',
        origin: 'New york US',
      },
    ];
  }
}
