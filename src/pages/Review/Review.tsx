import user from "assets/images/reviews-photo.svg";
import right from "assets/icons/right-arrow.svg";
import stars from "assets/icons/stars.png";
import styles from "./Review.module.scss";
import Button from "components/UI/Button/Button";

const Review = () => {
  return (
    <div className={styles.sectionReviews}>
      <div className={styles.sectionReviews__content}>
        <img src={user} alt="Photo Users" />
        <div className={styles.sectionReviews__content__comment}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium fuga, rem iste harum molestias cum, debitis esse
            cupiditate voluptatem doloribus aperiam provident voluptates natus
            unde nemo nisi at. Totam, officials.
          </p>
          <div className={styles.sectionReviews__content__comment__author}>
            <h4>Gloria Rose</h4>
            <p >
              <img src={stars} alt="review" />
              12 reviews at Yelp
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sectionReviews__otherComments}>
        <h2>
          What They <span>Say</span> ?
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          consectetur neque voluptas ea voluptate eum ipsa natus deserunt
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          consectetur neque voluptas ea voluptate eum ipsa natus deserunt
        </p>
        <div className={styles.sectionReviews__otherComments__yourReview}>
          <Button variant="primary">Write Your Review</Button>
          <img src={right} alt="icons right arrow" />
        </div>
      </div>
    </div>
  );
};

export default Review;
