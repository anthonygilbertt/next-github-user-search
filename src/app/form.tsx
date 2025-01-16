import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <span>This field is required</span>}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

export default MyForm;