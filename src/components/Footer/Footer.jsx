import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Página de Enzo</p>
      </div>
    </footer>
  );
};
