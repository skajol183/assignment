import React from 'react'
import styles from "./CityCards.module.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider/Slider';
import SliderMob from '../SliderMob/SliderMob';
import useDeviceType from "../../utils/helperFunctionm/useDeviceType";

const CityCards = () => {
    const { deviceType } = useDeviceType();

    console.log(deviceType, "mobile");
    return (
        <section className={styles.main_container}>
            <div className={styles.aligner_div}>
                {deviceType > 480 ?
                    <Slider className={styles.desktop} /> :
                    <SliderMob className={styles.mobile} />
                }
            </div>
        </section>
    )
}

export default CityCards
