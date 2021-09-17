import React from "react";
import "./contactlist.css";
import BxsVideoPlusIcon from "../icons/videoplus";
import SearchIcon from "../icons/search";

const ContactList = () => {
  const [states, setStates] = React.useState([
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "ins1.jpg", name: "John Doe" },
    { img: "myphoto.jpg", name: "ASM Shafiul Alam Tuhin" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "team-3.jpg", name: "Steven King" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "myphoto.jpg", name: "ASM Shafiul Alam Tuhin" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "myphoto.jpg", name: "ASM Shafiul Alam Tuhin" },
    { img: "ins1.jpg", name: "David Santner" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "team-3.jpg", name: "James Silvatore" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
    { img: "myphoto.jpg", name: "Shafi Abu Tausif" },
  ]);

  return (
    <div>
      <div className="contacts-header d-flex justify-content-between align-items-center mb-3">
        <h5 className="fs-6 m-0 text-secondary">Contacts</h5>
        <div className="icons-box d-flex align-items-center gap-4">
          <a href="" className="text-decoration-none text-secondary">
            <BxsVideoPlusIcon className="fs-5" />
          </a>
          <a href="" className="text-decoration-none text-secondary">
            <SearchIcon className="fs-5" />
          </a>
          <a href="" className="text-decoration-none text-secondary">
            <img src="ellipse.png" alt="" className="fs-5" />
          </a>
        </div>
      </div>
      <div className="contacts-body">
        {states.map((state) => (
          <a
            href=""
            className="contacts-content d-flex align-items-center gap-2 p-2 text-decoration-none text-black"
          >
            <div className="contact-image">
              <img src={state.img} alt="" />
              <span>
                <span className="circle-green"></span>
              </span>
            </div>
            <div className="contacts-title">
              <h4 className="fs-6 m-0">{state.name}</h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
