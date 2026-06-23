// Описуємо інтерфейс для об'єкта стану голосів
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

// Описуємо тип для допустимих текстових значень кнопок
export type VoteType = 'good' | 'neutral' | 'bad';