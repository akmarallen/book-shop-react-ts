import Button from "components/UI/Button/Button";
import styles from "./Blogs.module.scss";
import first from "assets/images/blog-1.svg";
import second from "assets/images/blog-2.svg";

const Blogs = () => {
  return (
    <div className={styles.ourblog}>
      <h1>Visit our Blogs</h1>
      <div className={styles.ourblog__blog}>
        <div className={styles.ourblog__blog_box}>
          <img src={first} alt="photo blog" />
          <h2>How innovation can bring change</h2>
          <p>
            How innovation can bring change Improving Efficiency: Innovation can
            lead to the development of new technologies and processes
          </p>
          <Button>Read more</Button>
        </div>
        <div className={styles.ourblog__blog_box}>
          <img src={second} alt="photo blog 2" />
          <h2>How innovation can bring change</h2>
          <p>
            How innovation can bring change Improving Efficiency: Innovation can
            lead to the development of new technologies and processes
          </p>
          <Button>Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
