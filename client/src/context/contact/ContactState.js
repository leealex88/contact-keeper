import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sarah@gmail.com",
        phone: "222-222-222",
        type: "personal",
      },
      {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-333",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(
    contactReducer,
    initialState
  );
  console.log("state", state);
  // Add COntact

  // Delete Contact

  // Set current contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear filter

  return (
    <contactContext.Provider
      value={{ contacts: state.contacts }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
