import React from "react";
import { Formik } from "formik";
import { MdEmail } from "react-icons/md";

const ContactUsForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.name) {
            errors.name = "Required";
          } else if (values.name.length > 15) {
            errors.name = "Must be 15 characters or less";
          }

          if (!values.phone) {
            errors.phone = "Required";
          } else if (values.phone.length > 10) {
            errors.phone = "Invalid Phone Number";
          }

          if (!values.subject) {
            errors.subject = "Required";
          } else if (values.subject.length > 30) {
            errors.subject = "";
          }

          if (!values.message) {
            errors.message = "Required";
          } else if (values.message.length > 500) {
            errors.message = "";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className=" relative rounded-md flex  gap-1 w-full h-fit mt-2   
          "
          >
            <div className="
              w-full flex flex-col gap-1
              [&>input]:border
              [&>input]:border-gray-400 
              [&>input]:w-full
              [&>input]:p-2 
              [&>span]:text-red-600
              [&>input]:outline-0 "
             
          >
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="focus:border-black"
              /> 

              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="focus:border-black"

              /> 

              <input
                type="number"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className="focus:border-black"

              /> 

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                className="focus:border-black"

              /> 
            </div>
            <div className="w-full h-full [&>textarea]:border-gray-400 
              [&>textarea]:outline-0 ">
              <textarea
                  className="border w-full h-full p-2   focus:border-black"
                cols="30"
                rows="6"
                type="text"
                name="message"
                placeholder="Message"
                onChange={handleChange}
                onBlur={handleBlur} 
              /> 
            </div>
            

            

            <button
              type="submit"
              // disabled={isSubmitting}
              className="-bottom-20 right-0 absolute bg-slate-600 w-fit mx-auto py-2 px-4    text-white font-semibold flex items-center gap-2"
            >
              <MdEmail size={20}/> SEND
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
