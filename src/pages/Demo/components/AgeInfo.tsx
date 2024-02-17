import { useDemoContext } from '../MyContextProvider';
import styles from './index.less';
type AgeInfoProps = {
  age: number;
  addAge: (age: number) => void;
};

export const AgeInfo: React.FC = () => {
  const { age, addAge } = useDemoContext();
  return (
    <div className={styles.ageInfo}>
      <h3>age: {age}</h3>
      <button onClick={addAge}>Happy birthday!</button>
    </div>
  );
};
