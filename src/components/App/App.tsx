import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import { type Votes, type VoteType } from '../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    // оголосив стан та типізував його
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // функція зміни стану
  const handleVote = (voteName: VoteType) => {
    setVotes({ ...votes, [voteName]: votes[voteName] + 1 });
  };
  //

  //для скидання стану
  // const resetVotes = () => {};
  //

  return (
    <>
      <h1>React - домашня робота № 2</h1>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          votes={votes}
          onVote={handleVote}
          onReset={resetVotes}
          canReset={true}
        />
      </div>
    </>
  );
}
