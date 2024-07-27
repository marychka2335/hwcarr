import { FilterBar } from '../components/FilterBar/FilterBar';
import styles from './SharedStyles.module.css';
import { WelcomePage } from "../components/WelcomePage/WelcomePage";

export const HomePage = () => {
  return <>

  <div className={styles.wrapper}>
    <aside>
      <FilterBar/>
    </aside>
    <WelcomePage />
  </div></>;
};