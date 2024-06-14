import Button from "components/UI/Button/Button";
import styles from "./Hero.module.scss";
import boy from "assets/images/read-boy.svg";
import sale from "assets/images/sale.svg";
import whatsapp from "assets/icons/whatsapp-link.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__section}>
        <div className={styles.hero__section__about}>
          <div className={styles.hero__section__about__info}>
            <div className={styles.hero__section__about__info__btn}>
              <Button>View Cart</Button>
              <Button>Request a Book</Button>
            </div>
            <div className={styles.hero__section__about__info__btn}>
              <h2>200 + Authors</h2>
              <h2>20k + Books</h2>
            </div>
          </div>
          <img src={boy} alt="reading-book" />
        </div>
        <div className={styles.hero__section__find}>
          <h1>THE BOOK.COM</h1>
          <h5>
            Cet into our Store <br />
            Here every book is a new adventure
          </h5>

          <div className={styles.hero__section__find__search}>
            <input placeholder="Find Your Book Here" />
            <Button>Search</Button>
          </div>
          <img src={whatsapp} alt="WhatsApp Icon" />
        </div>
      </div>
      <img className={styles.hero__sale} src={sale} alt="Book Sale!" />
    </div>
  );
};

export default Hero;
