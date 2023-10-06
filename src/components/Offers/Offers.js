import styles from "./Offers.module.css";
import Channai from "../../assets/images/channai.png";
import Gurugoun from "../../assets/images/gurugaon.png";
import Delhi from "../../assets/images/delhi.png";

const OfferCard = [
    {
        id: 1,
        name: "kajol",
        date: "27 aug 2022",
        image: Gurugoun,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
        id: 2,
        name: "Jhon",
        date: "25 aug 2023",
        image: Channai,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
        id: 3,
        name: "Sheetal",
        date: "26 aug 2022",
        image: Delhi,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
]

const Offers = () => {
    return (
        <section className={styles.main_container}>
            <div className={styles.aligner_div}>
                <h2>Offers for you</h2>
                <div className={styles.wrapper}>
                    {OfferCard.map((item) => {
                        return (
                            <div className={styles.card}>
                                <div className={styles.card1}>
                                    <img src={item.image} alt="Gurugoun" />
                                    <div className={styles.cardProfile}>
                                        <p>{item.name}</p>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                                <div className={styles.card2}>
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        )
                    })}</div>
            </div>
        </section>
    )
}

export default Offers;

