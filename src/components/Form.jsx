import React from "react";

const Form = () => {
  return (
    <div>
      <form className="contact">
        <div>
          First Name:
          <input type="text" name="firstName" placeholder="Peter" />
        </div>

        <div>
          Last Name:
          <input type="text" name="lastName" placeholder="Parker" />
        </div>

        <div>
          Email:
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
        </div>

        <div>
          Message:
          <textarea
            name="message"
            placeholder="Send us a comment, or question. Thanks! For questions on your order email us at beeunique@abc.com"
          ></textarea>
        </div>
        <button className="formbutton" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
