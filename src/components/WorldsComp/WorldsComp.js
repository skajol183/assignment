import styles from "./WorldsComp.module.css"
import worldsImage from "../../assets/images/WorldsComp.png"

const WorldsComp = () => {
    return (
        <section className={styles.main_container}>
            <div className={styles.aligner_div}>
                <img src={worldsImage} alt="worldsImage" />
            </div>
        </section>
    )
}

export default WorldsComp;
