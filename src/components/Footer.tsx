const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Abhishek Deshmukh. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
