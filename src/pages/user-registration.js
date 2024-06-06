import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { isCompositeComponentWithType } from "react-dom/test-utils";

function Register() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [number, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [image, setimage] = useState("");
  
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <span>Enter your name:</span>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          
          <span>Enter your email:</span>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Enter your phoneNumber:</span>
          <input
            type="number"
            placeholder="Enter Phonenumber"
            value={number}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </label>
      </div>
      <label>
        <span>Enter your Password:</span>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </label>
      <div>
        <label>
          <span>Add your image:</span>
          <>
            <div>
              <input accept="image/*" type="file" onChange={imageChange} />

              {selectedImage && (
                <div>
                  <img
                    style={{ width: 200, height: "auto" }}
                    src={URL.createObjectURL(selectedImage)}
                    alt="Thumb"
                  />
                  <button onClick={removeSelectedImage}>
                    Remove This Image
                  </button>
                </div>
              )}
            </div>
          </>
          <div>
            <label>
              <span>Enter your address:</span>
              <input
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </label>
          </div>
        </label>
      </div>
      <div>
        <label>
          <span>Enter your city:</span>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Enter your state:</span>
          <input
            type="text"
            placeholder="Enter State"
            value={state}
            onChange={(e) => setstate(e.target.value)}
          />
        </label>
      </div>

      <input type="submit" />
    </form>
  );
}

export default Register;
