
import "../Styles/Contact.css";

const Contact = () => {
  return (
      <div className={"contact"}>
          <form>
              <h2 id={"form-title"}>Get in Touch!</h2>
              <input type="text" id={"name"} placeholder="Name"></input>
              <input type="email" id={"email"} placeholder="Email"></input>
              <input type={"text"} id={"phone"} placeholder={"Phone Number"}></input>
              <textarea id={"message"} rows={4} placeholder="Message"></textarea>
              <button type="submit">Send</button>
          </form>
      </div>
  );
}

export default Contact
