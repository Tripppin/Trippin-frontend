import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Modal({ button, name, title, datatarget }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fg1ed6p",
      "template_c59gwtl",
      form.current,
      "user_CiyOVh37lx0p8UlyUrB8p"
    );
    alert("Your message has been sent. We will get back to you soon");
  };

  return (
    <>
      <div className="">
        {button && (
          <button
            className=" bg-red-600 text-white flex items-center px-8 text-center mx-auto py-2 rounded-3xl"
            data-bs-toggle="modal"
            data-bs-target={datatarget}
          >
            {name}
          </button>
        )}
      </div>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenteredScrollable"
        tabIndex="-1"
        aria-labelledby={datatarget}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-bold leading-normal flex w-11/12 items-center justify-center mx-auto text-red-600"
                id="exampleModalCenteredScrollableLabel"
              >
                {title}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <form onSubmit={sendEmail} ref={form}>
                <input
                  type="text"
                  required
                  name="name"
                  className="px-3 py-3  w-full rounded-xl  border-gray-300 focus:border-red-600 mb-3  focus:outline-none border-2"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="px-3 py-3  w-full rounded-xl  border-gray-300 focus:border-red-600 mb-3  focus:outline-none border-2"
                  placeholder="Email ID"
                />
                <input
                  type="text"
                  name="contact"
                  required
                  className="px-3 py-3  w-full rounded-xl  border-gray-300 focus:border-red-600 mb-3  focus:outline-none border-2"
                  placeholder="Contact No."
                />
                <textarea
                  placeholder="Your message"
                  name="message"
                  required
                  className="px-3 py-3 h-60 w-full rounded-xl  border-gray-300 focus:border-red-600 mb-3  focus:outline-none border-2"
                ></textarea>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className=" bg-red-700 text-white flex items-center px-8 text-center mx-auto py-2 rounded-3xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
