import { LogoText } from "../LogoText/LogoText";
import { Link } from "react-router-dom";
import camper from '../../images/camper.jpeg';
import styles from "./WelcomePage.module.css";

export const WelcomePage = () => {
  
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBox}>
              <h1>We invite you to our world of relax-cars</h1>
              <Link to="/catalog">
                <div className={styles.logo}>
                  {/* <img src={logo} alt="My camper" className={styles.LogoSvg} /> */}
               <img src={camper} alt="camper" className={styles.Camper} />
                  {/* <LogoText className={styles.logoText} /> */}
                </div>
              </Link>
            </div>            
        </div>    
  );
};