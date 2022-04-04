import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFrom {
  email: string
  lastName: string
  firstName: string
  username: string
  password: string
  password1: string
  extraError?: string
}


function ToDoList() {
  const { register, watch, handleSubmit, formState: { errors }, setError } = useForm<IFrom>({
    defaultValues: {
      email: "@naver.com"
    }
  });
  const onValid = (data: IFrom) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "password not same" }, { shouldFocus: true })
    }
    setError("extraError", { message: "server offline" })
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
          },//value 보내도되고 이렇게 객체로 보내도 되고
          validate: {
            nodfdfdf: (value) => value.includes("dfdfdf") ? "no dfdfdf" : true,
            noppp: (value) => value.includes("ppppp") ? "no ppppp" : true
          }
          //값이 dfdfdf면 false반환, db에있는 사용자이름 중복할때 사용
        })} placeholder="First Name" />
        <span>{errors?.firstName?.message}</span>
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div >
  );
}

export default ToDoList;