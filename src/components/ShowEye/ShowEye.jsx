// Direction 1 step 3 all the logic for the eyes for signup & signin
import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const ShowEye = ({eyeState, updateEye}) => { //step 4

// step 5
  return eyeState ? (
    <AiFillEye
      className="position-absolute end-0 top-50 fs-5 eye"
      onClick={() => {
        updateEye(false);
      }}
    />
  ) : (
    <AiFillEyeInvisible
      className="position-absolute end-0 top-50 fs-5 eye"
      onClick={() => {
        updateEye(true);
      }}
    />
  );
};

// go back to signUp.jsx for step 6

export default ShowEye;
