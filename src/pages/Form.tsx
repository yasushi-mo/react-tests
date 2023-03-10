import { FC } from "react";
import { useForm } from "react-hook-form";

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { name: "" } });
  const name = watch("name");

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("data: ", data);
        window.alert(data);
      })}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        {...register("name", { required: "Please Input your Name" })}
        placeholder="Input your Name"
      />
      <p>{name}</p>
      {errors.name?.message}
      <input type="submit" />
    </form>
  );
};
