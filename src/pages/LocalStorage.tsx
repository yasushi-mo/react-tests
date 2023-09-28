import { FC } from "react";
import { useForm } from "react-hook-form";

export const BOOK_IN_RENTAL_KEY = "book-in-rental";

export const getBookInRental = () => localStorage.getItem(BOOK_IN_RENTAL_KEY);

export const setBookInRental = (book: string) =>
  localStorage.setItem(BOOK_IN_RENTAL_KEY, book);

export const LocalStorage: FC = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { newBook: "" },
  });
  const bookInRental = getBookInRental();

  return (
    <>
      <h2>Book In Rental</h2>
      <div>Book in rental: {bookInRental || "none"}</div>
      <form
        onSubmit={handleSubmit((data) => {
          setBookInRental(data.newBook);
          location.reload();
        })}
      >
        <label htmlFor="newBook">New Book: </label>
        <input type="text" id="newBook" {...register("newBook")} />
        <input type="submit" />
      </form>
    </>
  );
};
