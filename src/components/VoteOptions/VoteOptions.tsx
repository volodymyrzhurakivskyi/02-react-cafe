import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

// Оголошуємо інтерфейс для пропсів згідно з ТЗ
interface VoteOptionsProps {
  onVote: (option: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  // Список наших кнопок для голосування
  const options: VoteType[] = ['good', 'neutral', 'bad'];

  return (
    <div className={css.container}>
      {/* Рендеримо кнопки голосування за допомогою map */}
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={css.button}
          onClick={() => onVote(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {/* Якщо canReset дорівнює true, показуємо кнопку Reset */}
      {canReset && (
        <button
          type="button"
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}