import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import { type Votes, type VoteType } from '../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  // Створіть в App стан votes, який зберігатиме кількість голосів. Це буде об'єкт з властивостями
  //Типізуй цей стан через інтерфейс Votes
  //
  //

  // Додай у App функції для роботи зі станом
  //для оновлення стану голосів
  //VoteType для типізації її параметра
  const handleVote = (voteName: keyof VoteType) => {
    console.log(votes);

    // де буде - handleVote, у якому тегу???
    setVotes({ ...votes, [voteName]: votes[voteName] + 1 });
  };
  //
  //

  //для скидання стану
  const resetVotes = () => {};
  //

  return (
    <>
      <h1>React - домашня робота № 2</h1>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
      </div>
    </>
  );
}
