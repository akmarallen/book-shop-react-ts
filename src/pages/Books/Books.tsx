import styles from "./Books.module.scss";
import Button from "components/UI/Button/Button";
import BookCard from "components/UI/BookCard/BookCard";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect } from "react";
import { getBooks } from "../../redux/booksSlices/reducer";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectBooks } from "../../redux/booksSlices/bookSlices";

const Books = () => {
  const books = useSelector(selectBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks("programming"));
  }, [dispatch]);

  return (
    <div className={styles.books}>
      <h1>Book Shelf</h1>
      <div className={styles.books__buttons}>
        <div className={styles.books__buttons__news}>
          <Button>New arrivals</Button>
          <Button>Best Selling</Button>
        </div>
        <div className={styles.books__buttons__more}>
          <Button>View more</Button>
        </div>
      </div>

      <div className={styles.books__card}>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Books;
