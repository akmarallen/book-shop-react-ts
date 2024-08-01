import Button from "@components/UI/Button/Button";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <h1>TBS</h1>
        <p>
          Discover the latest and greatest in literature with our BOOK STORE,
          featuring hand-picked bestsellers and emerging authors
        </p>
        <div className={styles.footer__left__joinUs}>
          <h5>110,791,448,191 joined us for News letter</h5>
          <input type="email" placeholder="Your E-mail Address" />
        </div>
        <Button variant="secondary">Join Us</Button>
        <p>© 2023 TBC. All rights reserved.</p>
      </div>

      <div className={styles.footer__right}>
        <div className={styles.footer__right__contents}>
          <h3>What we offer</h3>
          <ul className={styles.footer__right__contents__list}>
            <li>Membership</li>
            <li>Sale on books</li>
            <li>Sale on sets</li>
            <li>lorem ipsum</li>
          </ul>
        </div>
        <div className={styles.footer__right__contents}>
          <h3>Resources</h3>
          <ul className={styles.footer__right__contents__list}>
            <li>Help centre</li>
            <li>User guides</li>
            <li>Tell us what you want</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Help</li>
            <li> Contact us</li>
          </ul>
        </div>
        <div className={styles.footer__right__contents}>
          <h3>About</h3>
          <ul className={styles.footer__right__contents__list}>
            <li>Company</li>
            <li>Careers</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className={styles.footer__right__contents}>
          <h3>International</h3>
          <ul className={styles.footer__right__contents__list}>
            <li>Pakistan</li>
            <li>Australia</li>
            <li>Brasil</li>
            <li>Canada</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
