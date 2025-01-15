"use client";

import React, { useState, useRef, } from 'react';
import { motion } from "framer-motion";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyMap from '@/app/component/MyMap';
import emailjs from "@emailjs/browser";


export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: ""
  })

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };


  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_TEMPLATE_ID!,
      {
        from_name: form.fullname,
        to_name: "Jiří",
        from_email: form.email,
        to_email: "arena@arenaapartmentshb.cz",
        message: form.phone + "\n" + form.msg
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setForm({
        fullname: "",
        email: "",
        phone: "",
        msg: "",
      });
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    });
  };

  return (

    <motion.div className="p-5 bg-black w-full h-full " id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="w-full h-full" >
        <div className=" max-w-fit mx-5 my-8 2xl:mx-8 ">
          <ul className="list-disc">
            <li className="text-white underline underline-offset-4 text-2xl 2xl:text-4xl">Kontakt</li>
          </ul>
        </div>
        <div className="w-full max-h-fit lg:flex">
          <div className=" w-full my-3  p-5 border rounded-[25px] bg-white lg:w-1/2 lg:p-10 lg:ml-3  ">
            <form className="2xl:m-5" onSubmit={handleSubmit} ref={formRef}>
              <div className="text-2xl my-5">
                <label htmlFor="fullname">Name</label>
              </div>
              <div className="mb-5 border-b-2 border-solid border-black">
                <input className=" w-full p-2" type="text" name='fullname' id='fullname' value={form.fullname} onChange={handleChange} required />
              </div>
              <div className="text-2xl my-5">
                <label htmlFor="email">Email</label>
              </div>
              <div className="mb-5 border-b-2 border-solid border-black">
                <input className="w-full p-2" type="email" name="email" id='email' value={form.email} onChange={handleChange} required />
              </div>
              <div className="text-2xl my-5">
                <label htmlFor="phone">Telefon</label>
              </div>
              <div className="mb-5 border-b-2 border-solid border-black">
                <input className=" w-full p-2" type="text" name='phone' id='phone' value={form.phone} onChange={handleChange} required />
              </div>
              <div className="text-2xl my-5">
                <label htmlFor="msg">Nachricht</label>
              </div>
              <div className="mb-5 border-b-2 border-solid border-black">
                <textarea className=" w-full p-2" name='msg' id='msg' value={form.msg} onChange={handleChange} required></textarea>
              </div>
              <div className="text-xl font-semibold ">
                <button className="border-2 px-5 py-3 rounded-[20px] bg-green-500" type="submit" disabled={isLoading}>{isLoading ? "Submitting..." : "Submit"}</button>
              </div>
            </form>
          </div>

          <div className="my-3 p-5 flex flex-col w-full rounded-[25px] bg-white lg:w-1/2 lg:p-10 lg:ml-3 ">
            <div className=" text-2xl w-full h-fit  text-right ">

              <div className="flex flex-row justify-end lg:text-2xl">
                <div className="pr-5">
                  <span className="underline underline-offset-4">Adresse:</span>
                </div>
                <div>
                  <span>Jihlavská 895, Havlíčkův Brod, 580 01</span>
                </div>
              </div>

              <div className="flex flex-row my-3 justify-end">
                <div className="pr-5">
                  <span className="underline underline-offset-4">Rezeption:</span>
                </div>
                <div>
                  <span>+420 606 838 786</span>
                </div>
              </div>

              <div className="flex flex-row flex-wrap justify-end">
                <div className="pr-5">
                  <span className="underline underline-offset-4">E-mail:</span>
                </div>
                <div>
                  <span >arena<br />@arenaapartmentshb.cz</span>
                </div>
              </div>
            </div>
            {/*Mapa*/}
            <div className="py-4 h-96">
              <MyMap />
            </div>
          </div>

        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};