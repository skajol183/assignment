import React from 'react'
import styles from "./Footer.module.css"
import { AiOutlineCopyright } from 'react-icons/ai';
import Logo from "../../assets/images/Logo.png";
import PlayStore from "../../assets/images/play_store.jpg";
import AppStore from "../../assets/images/app_store.jpg";

const Footer = () => {
    return (
        <footer className={styles.main_container}>
            <div className={`${styles.aligner_div} ${styles.footer_div}`}>
                <div className={styles.footer_devider}>
                    <img src={Logo} alt="main_logo" />
                    <p className={styles.p}>BanquetBooking is committed towards building an organization centred on the highest standards of transparency and corporate.</p>
                    <div className={styles.downloadapp}>
                        <img style={{ width: "150px", height: "50px" }} src={PlayStore} alt="downloadapp" />
                        <img style={{ width: "150px", height: "50px" }} src={AppStore} alt="downloadapp" />
                    </div>
                </div>
                <div className={styles.footer_devider}>
                    <h2 style={{ fontSize: "16px", fontWeight: "500" }}>Usefull Links</h2>
                    <ul className={styles.ul}>
                        <a href="#"><li>About Us</li></a>
                        <a href="#"><li>Team / Careers</li></a>
                        <a href="#"><li>News Blogs</li></a>
                        <a href="#"><li>Support</li></a>
                        <a href="#"><li>Frames</li></a>
                        <a href="#"><li>Circle</li></a>
                        <a href="#"><li>Press kit</li></a>
                        <a href="#"><li>Terms & Conditions</li></a>
                        <a href="#"><li>privacy Policy</li></a>
                        <a href="#"><li>Guest Policy</li></a>
                        <a href="#"><li>Responsible Disclosure</li></a>
                    </ul>
                </div>
                <div className={styles.footer_devider}>
                    <h2 style={{ fontSize: "16px", fontWeight: "500" }}>News Letter</h2>
                    <form action="" className={styles.form}>
                        <p className={styles.p}>Subscribe to out News letter</p>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <button className={styles.form_submit_btn}>Submit</button>
                    </form>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <p>Copyright <AiOutlineCopyright /> 2020BanquetBooking. All rights reserved. Designed by Kajol Singh</p>
            </div>
        </footer>
    )
}

export default Footer
