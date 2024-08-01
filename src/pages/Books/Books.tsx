import styles from "./Books.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "@components/UI/Button/Button";
import BookCard from "@components/BookCard/BookCard";
import { getBooks } from "@redux/booksSlices/reducer";
import { selectBooks } from "@redux/booksSlices/bookSlices";
import { useAppDispatch } from "@redux/store";

const Books = () => {
  const books = useSelector(selectBooks);
  console.log(selectBooks, "selectBooks");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks("computer"));
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
