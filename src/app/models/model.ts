export class Question {
  title: string;
  choices: Choice[];
}

export class Choice {
  title: string;
  imageUrl: string;
  // Defines your character based on choice
  summary: string;
}
