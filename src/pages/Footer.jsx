export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <div className="footer-content p-2">
          <nav className="mr-4">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover p-2">Branding</a>
            <a className="link link-hover p-2">Design</a>
            <a className="link link-hover p-2">Marketing</a>
            <a className="link link-hover p-2">Advertisement</a>
          </nav>
          <nav className="mr-4">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover p-2">About us</a>
            <a className="link link-hover p-2">Contact</a>
            <a className="link link-hover p-2">Jobs</a>
            <a className="link link-hover p-2">Press kit</a>
          </nav>
          <nav className="mr-4">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover p-2">Terms of use</a>
            <a className="link link-hover p-2">Privacy policy</a>
            <a className="link link-hover p-2">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
