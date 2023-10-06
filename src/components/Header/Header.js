import React from 'react'
import styles from "./Header.module.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaEdit, FaShoppingCart } from 'react-icons/fa';
import { LiaGoogle } from 'react-icons/lia';
import { BsFillPersonFill, BsCalendar3 } from 'react-icons/bs';
import { IoMdArrowDropdown, IoMdPeople, IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/images/Logo.png";
import PhoneIcon from "../../assets/images/Phone.png";
import ClockIcon from "../../assets/images/Clock.png";
import Banner from "../../assets/images/Banner_main.jpg";

const Header = () => {
    return (
        <header className={styles.main_container}>
            {/* ---------social media div------- */}
            <div className={styles.social_media_container}>
                <div className={styles.social_media_bg}>
                    <div className={styles.social_media_left_box}>
                        <div className={styles.mobile}><GiHamburgerMenu /></div>
                        <FaFacebookF />
                        <FaTwitter />
                        <LiaGoogle />
                        <FaInstagram />
                    </div>
                    <div className={styles.social_media_rgt_box}>
                        <BsFillPersonFill /> Log In |
                        <FaEdit /> Register Now |
                        <FaShoppingCart /> Become Member
                    </div>
                    <img className={`${styles.mobile} ${styles.mobileLogo}`} src={Logo} alt="main_logo" />
                </div>
            </div>
            {/* ---------logo div------- */}
            <div className={styles.logo_main_div}>
                <div className={`${styles.aligner_div} ${styles.logo_main}`}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="main_logo" />
                    </div>
                    <div className={styles.contact_div}>
                        <div className={styles.contact_div_wrapper}>
                            <img src={PhoneIcon} alt="phone_logo" />
                            <div className={styles.working_hours}>
                                <p className={styles.bold}>Call Us : (+84)123456789</p>
                                <p>E-mail : support@banquetbooking.com</p>
                            </div>
                        </div>
                        <div className={styles.contact_div_wrapper}>
                            <img src={ClockIcon} alt="clock_logo" />
                            <div className={styles.working_hours}>
                                <p className={styles.bold}>Working hours :</p>
                                <p>Mon - sun (8:00am to 12:00pm)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ color: "black" }} />
            {/* ---------navBar------- */}
            <nav className={styles.city_wise_nav_wrapper}>
                <div className={`${styles.aligner_div} ${styles.nav_main}`}>
                    <ul>
                        <li>Bangalore<IoMdArrowDropdown /></li>
                        <li>Channai<IoMdArrowDropdown /></li>
                        <li>Delhi<IoMdArrowDropdown /></li>
                        <li>Gurgaon<IoMdArrowDropdown /></li>
                        <li>Kolkata<IoMdArrowDropdown /></li>
                        <li>Mumbai<IoMdArrowDropdown /></li>
                        <li>Noida<IoMdArrowDropdown /></li>
                    </ul>
                    <div className={styles.search_bar_div}>
                        <input type="text" placeholder='Search Cities' />
                        <div className={styles.search_icon}>
                            <IoIosSearch />
                        </div>
                    </div>
                </div>
            </nav>
            {/* ---------banner------- */}
            <div className={styles.banner_wrapper}>
                <img src={Banner} alt="banner" />
                <div className={styles.banner}>
                    <h1>Find <span style={{ color: "#E35436" }}>Banquet</span> near <br />by at best prices</h1>
                    <button className={styles.getStarted_banner_btn}>Get Started!</button>
                </div>
                <div className={styles.banner_bottom_strip}>
                    <ul>
                        <li>Badarpur New delhi</li>
                        <li className={styles.li}>Jan 27-29 jan <BsCalendar3 /></li>
                        <li className={styles.li}>People 500 <IoMdPeople /></li>
                    </ul>
                    <button className={styles.bottom_banner_btn}>
                        <IoIosSearch />
                        Search</button>
                </div>
            </div>
        </header >
    )
}

export default Header
