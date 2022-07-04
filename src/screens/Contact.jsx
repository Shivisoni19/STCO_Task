import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className='container'>
        {/* <!--Section: Contact v.2--> */}
        <section className='mb-4'>
          {/* <!--Section heading--> */}
          <h2 className='h1-responsive font-weight-bold text-center my-4'>
            Contact us
          </h2>
          {/* <!--Section description--> */}
          <p className='text-center w-responsive mx-auto mb-5'>
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className='row'>
            {/* <!--Grid column--> */}
            <div className='col-md-9 mb-md-0 mb-5 border-radius-contact-form border-violet p-4'>
              <form
              >
                {/* <!--Grid row--> */}
                <div className='row'>
                  {/* <!--Grid column--> */}
                  <div className='col-md-6'>
                    <div className='md-form mb-0'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control pb-3 mb-3'
                      />
                      <label for='name' className='pb-4'>
                        Your name
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className='col-md-6'>
                    <div className='md-form mb-0'>
                      <input
                        type='text'
                        id='email'
                        name='email'
                        className='form-control pb-3 mb-3'
                      />
                      <label for='email' className='pb-4'>
                        Your email
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='md-form mb-0'>
                      <input
                        type='text'
                        id='subject'
                        name='subject'
                        className='form-control pb-3 mb-3'
                      />
                      <label for='subject' className='pb-4'>
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className='row'>
                  {/* <!--Grid column--> */}
                  <div className='col-md-12'>
                    <div className='md-form'>
                      <textarea
                        type='text'
                        id='message'
                        name='message'
                        rows='2'
                        className='form-control md-textarea pb-3 mb-3'
                      ></textarea>
                      <label for='message'>Your message</label>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}
              </form>

              <div className='text-center'>
                <a
                  className='btn btn-outline-success btn-style mt-3' style={{paddingTop: "10.5px", fontWeight:"bolder"}}>
                  Send
                </a>
              </div>
              <div className='status'></div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className='col-md-3 text-center border-violet border-radius-contact'>
              <ul className='list-unstyled mb-0'>
                <li>
                  <i className='fas fa-map-marker-alt fa-2x pt-4'></i>
                  <p>26 Dixit Complex Hathital, Gorakhpur JABALPUR 482001</p>
                </li>

                <li>
                  <i className='fas fa-phone mt-4 fa-2x'></i>
                  <p>70-0020-9293</p>
                </li>

                <li>
                  <i className='fas fa-envelope mt-4 fa-2x'></i>
                  <p>info@akssai.com</p>
                </li>
                <li>
                  <i className='fas fa-envelope mt-4 fa-2x'></i>
                  <p>info@akssai.com</p>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
        </section>
        {/* <!--Section: Contact v.2--> */}
      </div>
    </>
  )
}

export default Contact
