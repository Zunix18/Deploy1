import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Мої контакти</h3>
        <p>Email: myemail@example.com</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            github.com/yourusername
          </a>
        </p>
        <p>
          Telegram:{" "}
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            @yourusername
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;