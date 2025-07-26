import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import { type Votes, type VoteType } from '../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    // оголосив стан та типізував його
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //для скидання стану
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

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <h1>React - домашня робота № 2</h1>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          votes={votes}
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />
        {totalVotes > 0 && (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        )}

        {totalVotes === 0 && <Notification />}
      </div>
    </>
  );
}
