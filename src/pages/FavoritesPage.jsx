import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from './SharedStyles.module.css';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CamperList } from "../components/CamperList/CamperList";
import { resetFilters } from "../redux/camperSlice";

export const FavoritesPage = () => {
  const dispatch = useDispatch()

  // Видаліть useEffect, оскільки `resetFilters` не потрібна на цій сторінці:
  // useEffect(()=>{
  //   dispatch(resetFilters())
  // }, [dispatch])
  
  return (
    <div className={styles.wrapper}>
      <aside>
        <FilterBar/>
      </aside>
      
      <CamperList/>
    </div>
  );
};
