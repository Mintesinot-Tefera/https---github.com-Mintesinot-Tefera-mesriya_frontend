import { Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { LOAD_USERS, LOGGED_IN_USER } from "../GraphQL/Queries";

function UserHomeTop() {
  const useridfromlocalstorage = window.localStorage.getItem("userid")
  // const idFromRoute= useParams().id;
  // const {id} = idfromlocalstorage ? idfromlocalstorage: idFromRoute;
  // const id=idfromlocalstorage;s
  const navigate = useNavigate();
  // const id = useridfromlocalstorage;

  const navigateToProfilepage = () => {
    navigate(`/profilepage`);
  };

  const { error, loading, data } = useQuery(LOGGED_IN_USER, {
    variables: { id: useridfromlocalstorage }
  });

  if (data) {
    console.log(data);
    console.log(data.user_account_by_pk.first_name);
    console.log(data.user_account_by_pk.company_pages[0].id);

  }
  // }
  // // if (error) {
  // //   // console.error(error);
  // //   return <div>Error!</div>;
  // // }

  const handleButtonclick = () => {
    if (data) {
      window.localStorage.setItem("companyid", data.user_account_by_pk.company_pages[0].id);
      navigateToProfilepage();
    }
  }

  return (
    <div className="bg-gradient-to-r from-pink-800 to-sky-800 shadow-lg rounded mx-8 mb-4 p-8  md:bg-orange h-35 grid grid-cols-8 ">
      <div className="text-center columns-2 col-span-2 ">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          className="rounded-full w-20 mb-4 mx-auto "
          alt="Avatar"
        />
        <h5 className="text-xl text-white font-medium leading-tight mb-2">
          <div>
            <h1>
              {data ? data.user_account_by_pk.first_name : "nouser"}
              {data ? data.user_account_by_pk.last_name : "no user"}
            </h1>
            {/* <h2>{id}</h2> */}
          </div>
        </h5>
        <p className="text-white">Web designer</p>
      </div>

      <Button
        className="h-fit w-fit bg-white text-xl hover:bg-gray-100 text-black col-end-9"
        variant="filled"
        onClick={() =>
          handleButtonclick()
        }
      >
        ያንተ ገጥ
      </Button>
    </div>
  );
}

export default UserHomeTop;
