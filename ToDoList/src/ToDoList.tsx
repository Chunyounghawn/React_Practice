import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFrom {
  email: string
  lastName: string
  firstName: string
  username: string
  password: string
  password1: string
}


function ToDoList() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm<IFrom>({
    defaultValues: {
      email: "@naver.com"
    }
  });
  const onValid = (data: any) => {
    console.log(data);

  }
  console.log(errors);



  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input  {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed",
          },
        })}
          placeholder="Email"
        />
        <span>
          {errors?.email?.message}
        </span>
        <input {...register("firstName", {
          required: "password is required", minLength: {
            value: 5,
            message: "too short"
          }//value 보내도되고 이렇게 객체로 보내도 되고
        })} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div >
  );
}

export default ToDoList;