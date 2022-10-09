import React from "react";

function Contact() {
  return (
    <div className="navbar navbar-expand-lg bg-dark py-5 shadow-sm pt-5 d-block">
    <div className="container">
     <div className="row w-100">
      <div className="col-md-6">
        <h3 className="text-white">Contact Us</h3>
        <ul className="d-flex flex-column mb-2 mb-lg-0 ps-0">
          <li className="nav-item">
            <span className="nav-link text-white" aria-current="page" to="/">
              <i className="fa fa-map-marker me-3"></i>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita consequatur id dolorum at.
            </span>
          </li>
          <li className="nav-item mt-5">
            <span className="nav-link text-white" aria-current="page" to="/">
              <i className="fa fa fa-phone me-3"></i>
             (+02) 0111 555 777 65
            </span>
          </li>
        </ul>
        </div>
        <div className="col-md-6">
        <h3 className="text-white">Send Message</h3>
        <form action="" className="mt-4">
          <div className="form-group">
            <div><input type="text" placeholder="Name" className="form-control" /></div>
            <div className="mt-4"><input type="text" placeholder="Subject"  className="form-control" /></div>
            <div className="mt-4"><textarea name="" placeholder="Message" className="p-2" id="" cols="47" rows="10"></textarea></div>
            <button className="btn" style={{background:'#f4801d', color: '#fff'}}>Send</button>
          </div>
        </form>
        </div>
     </div>
     <hr />
    </div>
  </div>
  );
}

export default Contact;
