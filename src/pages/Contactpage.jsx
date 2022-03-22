import React from 'react'

const Contactpage = () => {
  return (
    <div>

    
<section className="container">
      <p className="quote">Thank You</p>
      <div className="para6"></div>
    </section>

    <div className="contact">
      <form>
        First Name:<input type="text" name="firstName" placeholder="Peter" />
      </form>

      <form>
        Last Name:<input type="text" name="lastName" placeholder="Parker" />
      </form>

      <form>
        Email:<input
          type="email"
          name="email"
          placeholder="example@email.com"
        />
      </form>

      <form>
        Message:<textarea
          name="message"
          placeholder="Send us a comment, or question. Thanks! For questions on your order email us at beeunique@abc.com"
        ></textarea>
      </form>
      <button className="formbutton" type="submit" value="Submit">Submit</button>
    </div>
    </div>
  )
}

export default Contactpage