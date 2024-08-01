import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  selectCampersCount, 
  selectGetCamperList,
  selectIsLoading,
  selectFavoritesIDs,
  selectShowedVans,
} from "../../redux/selectors";
import { fetchCamperList } from "../../redux/operation";
import { showMore } from "../../redux/camperSlice";
import { CamperListItem } from "../CamperListItem/CamperListItem";
import camper from "../../images/camper.jpeg";
import styles from "./CamperList.module.css";


export const CamperList = () => {  
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camperList = useSelector(selectGetCamperList);
  const campersCount = useSelector(selectCampersCount);
  const showedVans = useSelector(selectShowedVans);
  const favoriteCampers = useSelector(selectFavoritesIDs);

  useEffect(() => {
  //   // dispatch(fetchCamperList());
  // }, [dispatch]);
dispatch(fetchCamperList(showedVans)); // Передайте showedVans до fetchCamperList
  }, [dispatch, showedVans]);
//  function handleLoadMore() {
//     const newShowedVans = showedVans + 4;

//       dispatch(showMore(newShowedVans));
//     dispatch(fetchCamperList(newShowedVans));
//   }
 function handleLoadMore() {
    const newShowedVans = showedVans + 4;
    dispatch(showMore(newShowedVans)); // Оновіть showedVans в state
    dispatch(fetchCamperList(newShowedVans)); // Передайте newShowedVans до fetchCamperList
  }
  return (
    <>
      {location.pathname === "/catalog" && (
        <div className={styles.wrapper}>
          <ul className={styles.box}>
            {!isLoading &&
              camperList
                ?.map((camper) => {
                  return (
                    <li key={camper._id}>
                      <CamperListItem camper={camper} />
                    </li>
                  );
                })}
          </ul>
          {campersCount > showedVans && (
            <button
              className={styles.btn}
              type="button"
              onClick={handleLoadMore}
            >
              Load more
            </button>       
          )}
        </div>
      )}
      {location.pathname === "/favorite" && (
        <div className={styles.wrapper}>
          {favoriteCampers.length ? (
            <ul className={styles.box}>
              {!isLoading &&
                camperList
                  ?.filter((camper) => favoriteCampers.includes(camper._id))
                  .map((camper) => (
                    <li key={camper._id}>
                      <CamperListItem camper={camper} />
                    </li>
                  ))}
            </ul>
          ) : (
            <div className={styles.infoWrapper}>
              <div className={styles.img}>
                <img src={camper} alt="My camper"  className={styles.camp} />
              </div>
                
              <div className={styles.content}>
                <p className={styles.info}>
                 There are no saved favorite campers yet
                </p>
                <Link to="/catalog" className={styles.link}>
               You could choose from the variety
                </Link>
              </div>
            </div>
          )}
        </div>
      )}    
    </>
  );
};