// Для того, щоб компонент VoteStats міг динамічно відображати статистику голосування, зібрану з кліків на кнопки голосування, він має приймати три пропси:

// votes – об'єкт, що містить кількість голосів для кожної категорії: good, neutral, bad;
// totalVotes – загальна кількість голосів (поки можна передати 0);
// positiveRate – відсоток позитивних голосів (також поки можна передати 0).

// У файлі компонента оголосіть інтерфейс VoteStatsProps, який описує типи для пропсів компонента.

// Після цього кроку інтерфейс застосунку має виглядати та працювати наступним чином – при кліках на кнопки в VoteOptions зміни відображаються у VoteStats

import css from './VoteStats.module.css';
import { type Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
