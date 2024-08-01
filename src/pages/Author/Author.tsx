import Button from "@components/UI/Button/Button";
import styles from "./Author.module.scss";
import author from "@assets/images/authors-photo.svg";
const Author = () => {
  return (
    <div className={styles.author__banner}>
      <img src={author} alt="Author of the month photo" />
      <div className={styles.author__banner__about}>
        <h3>AUTHOR OF THE MONTH</h3>
        <p>Proudly presented to</p>
        <h1>MENWISH FATIMA</h1>
        <p>Writer of100 + Books</p>
        <Button variant="secondary">View more of Author books </Button>
      </div>
    </div>
  );
};

export default Author;
