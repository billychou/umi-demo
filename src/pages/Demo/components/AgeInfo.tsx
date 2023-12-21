import { useContext } from 'react';
import styles from './index.less';
import { useDemoContext } from '../MyContextProvider';
type AgeInfoProps = {
  age: number;
  addAge: (age: number) => void;
};


export const AgeInfo: React.FC = () => {
    const {age, addAge} = useDemoContext();
    return (<div className={styles.ageInfo}>
      <h3>age: {age}</h3>
      <button onClick={addAge}>Happy birthday!</button>
    </div>);
}