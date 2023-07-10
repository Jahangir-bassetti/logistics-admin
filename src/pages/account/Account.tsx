import React from "react";
import "./Account.css";

export const Account: React.FC = () => {
  return (
    <div className="account-container">
      <div className="title">Account Details</div>
      <div className="profile-container">
        <div className="profile-image">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
        </div>
        <div className="profile-middle">
          <div className="profile-btn">
            <button className="update-photo">
              <span>Upload New Photo</span>
            </button>
            <button className="reset">
              <span>Reset</span>
            </button>
          </div>
          <p className="profile-text">
            <span>Allowed JPG, GIF or PNG. Max size of 800K</span>
          </p>
        </div>

        <button className="password">
          <span>Change Password</span>
        </button>
      </div>
      <hr />

      <div className="input-field">
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">First Name</span>
        </div>
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Middle Name</span>
        </div>
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Last Name</span>
        </div>
      </div>

      <div className="second-input">
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Email</span>
        </div>
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Mobile No</span>
        </div>
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Branch</span>
        </div>
      </div>

      <div className="third-input">
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Address</span>
        </div>
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">State</span>
        </div>
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Pin Code</span>
        </div>
      </div>

      <div className="fourth-input">
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Language</span>
        </div>
        <div className="account-input">
          <input type="text" className="text-input" placeholder=" " />
          <span className="placeholder-input">Designation</span>
        </div>
      </div>

      <button className="save">
        <span>Save Changes</span>
      </button>
    </div>
  );
};
