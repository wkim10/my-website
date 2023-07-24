function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#edeff5" }}>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
