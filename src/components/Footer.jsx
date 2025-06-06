import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <small>
        &copy; {new Date().getFullYear()} Pacific Northwest X-Ray Inc. All Rights Reserved.
      </small>
    </footer>
  );
}

export default Footer;