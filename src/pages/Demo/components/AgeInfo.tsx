import { useContext } from 'react';
import styles from './index.less';
import { MyContext } from '@/pages/Demo/ContextDemo';
type AgeInfoProps = {
  age: number;
  addAge: (age: number) => void;
};


export const AgeInfo: React.FC = () => {
    const {age, addAge} = useContext(MyContext); 
    return (<div className={styles.ageInfo}>
      <h3>age: {age}</h3>
      <button onClick={addAge}>Happy birthday!</button>
    </div>);
}