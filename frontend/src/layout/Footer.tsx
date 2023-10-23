import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import BasicButton from "../components/buttons/BasicButton";
import BasicTextField from "../components/BasicTextField";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="w-full bg-black h-fit text-white flex justify-center">
        <div className="w-[95%] max-w-[1200px] flex flex-row flex-wrap py-12 gap-[60px]">
          <section className="flex flex-col gap-5 mx-auto">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl text-center lg:text-left">
                Don't Miss Out
              </h1>
              <p className="text-sm text-center lg:text-left">
                Sign up for the latest beatuy news, product samples and coupons
              </p>
            </div>
            <Formik
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={Yup.object().shape({
                firstName: Yup.string().required("Required"),
                lastName: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Enter valid email address")
                  .required("Email is required"),
              })}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
              }}
            >
              <Form className="flex gap-4 flex-col">
                <div className="flex gap-5">
                  <BasicTextField
                    label="First Name"
                    type="text"
                    name="firstName"
                    required
                    placeholder="Enter first name"
                  />
                  <BasicTextField
                    label="Last Name"
                    type="text"
                    name="lastName"
                    required
                    placeholder="Enter last name"
                  />
                </div>
                <BasicTextField
                  label="Email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                />
                <BasicButton
                  className="w-full ring-white rounded-none ring-2 py-2 mt-2"
                  type="submit"
                >
                  Sign Up
                </BasicButton>
              </Form>
            </Formik>
          </section>
          <section className="flex flex-row gap-[20%] sm:gap-[100px] justify-center items-start mx-auto">
            <div>
              <h1 className="text-lg uppercase mb-5">Blog</h1>
              <ul className="flex flex-col gap-3 tracking-wider text-sm">
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/articles">Articles</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg uppercase mb-5">Social</h1>
              <ul className="flex flex-col gap-3 tracking-wider text-sm">
                <li>
                  <Link to="/instagram">Instagram</Link>
                </li>
                <li>
                  <Link to="/facebook">Facebook</Link>
                </li>
                <li>
                  <Link to="/twitter">Twitter</Link>
                </li>
                <li>
                  <Link to="/youtube">Youtube</Link>
                </li>
                <li>
                  <Link to="/tiktok">TikTok</Link>
                </li>
                <li>
                  <Link to="/pinterest">Pinterest</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg uppercase mb-5">Customer service</h1>
              <ul className="flex flex-col gap-3 tracking-wider text-sm">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping</Link>
                </li>
                <li>
                  <Link to="/returns">Returns</Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
      <section className="text-gray-400 bg-black py-3">
        <div className="flex flex-row flex-wrap gap-5 justify-center w-[95%] max-w-[1200px] mx-auto text-sm">
          <Link
            to="/facebook"
            className="p-4 text-white ring-1 text-xl ring-white rounded-full hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
          >
            <BsFacebook />
          </Link>
          <Link
            to="/instagram"
            className="p-4 text-white ring-1 text-xl ring-white rounded-full hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
          >
            <BsInstagram />
          </Link>
          <Link
            to="/twitter"
            className="p-4 text-white ring-1 text-xl ring-white rounded-full hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
          >
            <BsTwitter />
          </Link>
          <Link
            to="/youtube"
            className="p-4 text-white ring-1 text-xl ring-white rounded-full hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
          >
            <BsYoutube />
          </Link>
          <Link
            to="/pinterest"
            className="p-4 text-white ring-1 text-xl ring-white rounded-full hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
          >
            <BsPinterest />
          </Link>
        </div>
      </section>
      <section className="text-gray-400 bg-black border-t-white border-t-[1px] py-3">
        <div className="flex flex-row flex-wrap gap-3 justify-between w-[95%] max-w-[1200px] mx-auto text-sm">
          <p className="">
            © 2023, Newsletter System, Inc. or its affiliates. All rights
            reserved.
          </p>
          <button
            onClick={() => {
              // Smooth scroll to top of the page
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            type="button"
            className="uppercase tracking-wide text-white flex gap-2 items-center"
          >
            back to top <IoMdArrowUp className="text-xl" />
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
