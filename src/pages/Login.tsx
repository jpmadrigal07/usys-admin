import Input from '../components/Input';
import Button from '../components/Button';
import React, { useState, useEffect } from "react";
import Message from '../components/Message';
import { useMutation } from "react-query";

import axios, { AxiosError } from "axios";
import { connect } from "react-redux";
import Cookies from "js-cookie";

// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

import { login } from "../utils/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { setAuthenticatedUser } from "../actions/authenticatedUserActions";


const Login = (props: any) => {
  const { setAuthenticatedUser } = props;
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: triggerLogin, isLoading: isLoginLoading } = useMutation(
    async (user: any) => login(user),
    {
      onSuccess: async (data) => {
        Cookies.set("sessionToken", data.token);
        const { _id, userType } = data.user;
        setAuthenticatedUser({
          id: _id,
          type: userType,
          name: data.name,
        });
        navigate("/module");
      },
      onError: async (err: any) => {
        MySwal.fire({
          title: "Ooops!",
          text: err,
          icon: "error",
          confirmButtonText: "Okay",
          confirmButtonColor: "#274c77",
        });
      },
    }
  );
  const _login = (e: any) => {
    e.preventDefault();
    triggerLogin({
      email: username,
      password,
    });
  };

  return (
    <>
      <form onSubmit={_login}>
        <div className="flex justify-center bg-usys-login-background bg-no-repeat bg-cover align-middle h-screen">
          <div className="mt-[10vh] bg-light h-[280px] min-w-[350px] rounded-sm shadow-sm">
            <div className="p-4">
              <div className="flex justify-between">
                <div className={`font-black text-3xl text-dark`}>Admin Login</div>
                <div className='bg-usys-logo bg-no-repeat bg-cover w-10 h-10'></div>
              </div>
              <div>
                <div className="flex flex-col">
                  <label className={`text-sm font-medium w-fit mt-4 py-1 text-ash-gray`}>Email address</label>
                  <Input
                    size='md'
                    className='w-full'
                    variant='email'
                    disabled={isLoginLoading}
                    onChange={(e: any) => setUsername(e.target.value)}
                  ></Input>
                </div>
                <div className="flex flex-col">
                  <label className={`text-sm font-medium w-fit mt-4 py-1 text-ash-gray`}>Password</label>
                  <Input
                    size='md'
                    className='w-full'
                    variant='password'
                    disabled={isLoginLoading}
                    onChange={(e: any) => setPassword(e.target.value)}
                  ></Input>
                </div>
              </div>
              <div className="flex text-center mt-5">
                <Button
                  variant='primary'
                  size='md'
                  disable={isLoginLoading}
                  type='submit'
                >Sign in</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { setAuthenticatedUser })(Login);