import css from './VoteOptions.module.css';

export default function VoteOptions() {
  return (
    <div className={css.container}>
      <button
        className={css.button}
        // onClick={() => handleVote(Good)}
      >
        Good
      </button>
      <button
        className={css.button}
        // onClick={() => handleVote(Neutral)}
      >
        Neutral
      </button>
      <button
        className={css.button}
        // onClick={() => handleVote(Bad)}
      >
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
