import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if (this.props.data) {
      
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form 
                  action="https://formsubmit.co/ramantiles.bathware@gmail.com"
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                >
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <label htmlFor="contactName">Name *</label>
                    <input type="text" id="contactName" name="contactName" required />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">Email *</label>
                    <input type="email" id="contactEmail" name="contactEmail" required />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input type="text" id="contactSubject" name="contactSubject" />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">Message *</label>
                    <textarea id="contactMessage" name="contactMessage" rows="12" required></textarea>
                  </div>

                  <div>
                    <button className="submit" type="submit">Submit</button>
                  </div>
                </form>


            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>

              <div className="address-proprietor-wrapper">
                <div className="address-block">
                  <p className="address">
                     Raman Tiles & Bathware,<br />
                     Pro. Shri Arun Mahto, <br />
                     Ramanji More, Raniganj,<br />
                     Araria, Bihar, 854312<br />
                     +91 74881 87310
                  </p>
                                   
                </div>
                
              </div>
            </div>

            <div className="store-locator">
              <h4 className="widget-title">Find us here..</h4>
              <div id="maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.8724748180236!2d87.23542037362365!3d26.082922206940303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef953993697cbf%3A0x99d4b0a5c2dbb8d!2sRaman%20Tiles%20%26%20Bathware!5e0!3m2!1sen!2sin!4v1750165187387!5m2!1sen!2sin"
                  width="400"
                  height="345"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                ></iframe>
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
