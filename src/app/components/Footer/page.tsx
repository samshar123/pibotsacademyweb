import styles from "../Footer/footer.module.css"
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image"
import pilogo from "../../../../public/imgtxt.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
export default function footer(){
    return(
        <section id={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-4 ${styles.footerlogo}`}>
                        <Image className={styles.pilogo} src={pilogo} alt="" />

                    </div>
                    <div className={`col-lg-4 ${styles.iconsfooter}`}>
                        <h1>Social media</h1>
                        <div className={styles.footericons} >
                        <FaSquareInstagram className={styles.footericon} />   <FaFacebookSquare className={styles.footericon} /> <FaLinkedin className={styles.footericon} />

                        </div>
                    

                    </div>
                    <div className={`col-lg-4 ${styles.iconsfooter}`}>
                        <h1>Head office</h1>
                        <div className={styles.footericons} >
                        <h5>MES college road , mampad,  Malappuram,<br /> Kerala 676542</h5>

                        </div>
                    

                    </div>

                    <div className={`col-lg-12 ${styles.copyright}`}>
                        <div className={styles.piright}>
                            <h5>© Copyright PIBOTS ROBOTICS. All Rights Reserved</h5>

                        </div>
                        <div className={styles.dotright}>
                            <h5>Developed by  <span> team dotco</span></h5>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}