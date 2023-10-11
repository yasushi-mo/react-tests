import { FC, useState } from "react";
import { useForm } from "react-hook-form";

export const BOOK_IN_RENTAL_KEY = "book-in-rental";

export const getBookInRentalInLocalStorage = () =>
  localStorage.getItem(BOOK_IN_RENTAL_KEY);

export const setBookInRentalInLocalStorage = (book: string) =>
  localStorage.setItem(BOOK_IN_RENTAL_KEY, book);

export const LocalStorage: FC = () => {
  const [bookInRental, setBookInRental] = useState(
    getBookInRentalInLocalStorage()
  );

  const { register, handleSubmit } = useForm({
    defaultValues: { newBook: "" },
  });

  return (
    <>
      <h2>Book In Rental</h2>
      <div>Book in rental: {bookInRental || "none"}</div>
      <form
        onSubmit={handleSubmit((data) => {
          setBookInRental(data.newBook);
          setBookInRentalInLocalStorage(data.newBook);
        })}
      >
        <label htmlFor="newBook">New Book: </label>
        <input type="text" id="newBook" {...register("newBook")} />
        <input type="submit" />
      </form>
    </>
  );
};
