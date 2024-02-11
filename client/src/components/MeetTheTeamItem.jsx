import React from "react";

export default function MeetTheTeamItem({ name, funcion }) {
  return (
    <div
      className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]"
      style={{ maxWidth: "400px" }}
    >
      <div className="team-item" style={{ justifyContent: "center" }}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          className="team-img"
          alt="img"
        />
        <h3>{name}</h3>
        <div className="team-info">
          <p>Head of SEO</p>
          <p style={{ paddingTop: "20px" }}>
            This is our asdlkfja lsdkfj a;sldf jas;dlfj a;lsdkfjalksdjf lkasdj
            flkasjd flkajsdlkfjasldkfjlaksjdf laksjdkflasdjlfakj sdf.
          </p>
          <ul className="team-icon">
            <li>
              <a href="#" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
