import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Response from "./Response";

const FormContainer = styled(motion.form)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  padding: 0 10rem;
  background: #fafafa;

  ::placeholder {
    color: #111;
  }

  @media screen and (max-width: 1000px) {
    min-height: 50vh;
    padding: 5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 3rem;
    gap: 3rem;
  }

  h1 {
    font-size: 6rem;
    font-weight: 300;
    color: #111;
    font-family: "roboto";
    margin: 3rem auto;
    text-align: center;

    span {
      color: #444;
    }

    @media screen and (max-width: 768px) {
      font-size: 5rem;
      text-align: center;
    }
  }

  .first {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .first-name {
      flex: 3;

      input {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
        font-weight: 100;
        border-top: none;
        border-right: none;
        border-bottom: none;
        transition: all 0.5s ease-in-out;
        color: #111;
        background: #fafafa;
        background: #ffeecc;

        &:focus {
          border-left: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-radius: 100px;
          color: #444;

          &::placeholder {
            color: #444;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    .last-name {
      flex: 2;
      input {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
        font-weight: 100;
        border-top: none;
        border-bottom: none;
        transition: all 0.5s ease-in-out;
        color: #111;
        background: #fafafa;
        background: #febbcc;

        &:focus {
          border-left: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-radius: 100px;
          color: #444;

          &::placeholder {
            color: #444;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }
  .second {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .email {
      flex: 2;

      input {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
        font-weight: 100;
        border-top: none;
        border-right: none;
        border-bottom: none;
        transition: all 0.5s ease-in-out;
        color: #111;
        background: #fafafa;
        background: #dfccfb;

        &:focus {
          border-left: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-radius: 100px;
          color: #444;

          &::placeholder {
            color: #444;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    .number {
      flex: 3;
      input {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
        font-weight: 100;
        border-top: none;
        border-bottom: none;
        transition: all 0.5s ease-in-out;
        color: #111;
        background: #fafafa;
        background: #c8e4b2;

        &:focus {
          border-left: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-radius: 100px;
          color: #444;

          &::placeholder {
            color: #444;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }

  .third {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .address {
      flex: 1;

      input {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
        font-weight: 100;
        border-top: none;
        border-bottom: none;
        transition: all 0.5s ease-in-out;
        color: #111;
        background: #fafafa;
        background: #ffd8a9;

        &:focus {
          border-left: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-radius: 100px;
          color: #444;

          &::placeholder {
            color: #444;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }

  .fourth {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      flex: 1;

      textarea {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
        font-weight: 100;
        border: none;
        border-radius: 100px;
        resize: none;
        font-family: "roboto";
        transition: all 0.5s ease-in-out;
        color: #111;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #fafafa;
        background: #ecf9ff;

        &:focus {
          border-left: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-radius: 100px;
          color: #444;

          &::placeholder {
            color: #444;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }

  .fifth {
    flex: 1;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      width: 14rem;
      border-radius: 100px;
      background: transparent;
      white-space: nowrap;
      color: #eee;
      background: #222;
      border: 2px #222 solid;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-weight: 100;
      font-family: "roboto";
      gap: 0.5rem;
      position: relative;
      z-index: 0;

      &::after {
        position: absolute;
        content: "";
        width: 0%;
        height: 100%;
        border-radius: 100px;
        background: #ff005c;
        z-index: -1;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        color: #eee;
        border: 2px #ff005c solid;

        &::after {
          width: 100%;
          behavior: smooth;
        }
      }
    }
  }
`;

function Form2() {
  const [state, handleSubmit] = useForm("xwkdolon");
  if (state.succeeded) {
    return <Response />;
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>
        Join The <span>FadFabSquad!</span>{" "}
      </h1>
      <div className="first">
        <div className="first-name">
          <input id="fname" type="text" name="fname" placeholder="First Name" />
          <ValidationError
            prefix="First Name"
            field="text"
            errors={state.errors}
          />
        </div>
        <div className="last-name">
          <input id="lname" type="text" name="lname" placeholder="Last Name" />
          <ValidationError
            prefix="Last Name"
            field="text"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="second">
        <div className="email">
          <input id="email" type="email" name="email" placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="number">
          <input
            id="number"
            type="tel"
            name="number"
            placeholder="Phone Number"
          />
          <ValidationError
            prefix="Number"
            field="number"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="third">
        <div className="address">
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Address"
          />
          <ValidationError
            prefix="Address"
            field="address"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="fourth">
        <div className="text">
          <textarea
            id="message"
            name="message"
            placeholder="Any Message For Us? (Optional)"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="fifth">
        <button className="button" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </FormContainer>
  );
}

export default Form2;
