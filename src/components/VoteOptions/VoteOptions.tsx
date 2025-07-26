import { type Votes, type VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

export interface VoteOptionsProps {
  votes: Votes;
  onVote: (voteName: VoteType) => void;
  onReset: () => void;
  canReset: boolean;

  // булеве значення, яке визначає, чи потрібно показувати кнопку Reset. (На цьому етапі можеш передавати просто зі значенням true.)
  //
}

export default function VoteOptions({
  votes,
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good: {votes.good}
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral: {votes.neutral}
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad: {votes.bad}
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
