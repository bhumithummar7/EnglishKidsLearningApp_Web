import AccordionSec from "./Components/AccordionSec";

function App() {
  const email = "bhumithummar7@gmail.com";
  return (
    <div
      className="card shadow-lg p-4 rounded-4 border-0"
      style={{ background: "#F8F9FA" }}>
      <h1
        className="text-center text-primary mb-4"
        style={{ fontWeight: "600", fontSize: "1.8rem" }}>
        📚 Support for English Kids Learning App
      </h1>
      <p className="text-center text-muted" style={{ fontSize: "1rem" }}>
        Thank you for using the <strong>English Kids Learning App</strong>!
        We’re here to help with any questions or concerns.
      </p>

      <div className="mt-4">
        <h2 className="text-secondary" style={{ fontSize: "1.5rem" }}>
          📩 Contact Us
        </h2>
        <p className="text-muted">
          If you need assistance, feel free to reach out:
        </p>
        <ul className="list-group border-0">
          <li className="list-group-item border-0 bg-transparent">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${email}`} className="text-decoration-none">
              {email}
            </a>
          </li>
          <li className="list-group-item border-0 bg-transparent">
            <strong>Response Time:</strong> We typically respond within 24-48
            hours.
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-secondary mb-4" style={{ fontSize: "1.5rem" }}>
          ❓ Frequently Asked Questions (FAQs)
        </h2>
        <AccordionSec />
      </div>

      <div className="mt-4">
        <h2 className="text-secondary" style={{ fontSize: "1.5rem" }}>
          🛠 Troubleshooting
        </h2>
        <ul className="list-group border-0">
          <li className="list-group-item border-0 bg-transparent">
            <strong>🔄 App Freezes or Crashes:</strong> Restart your device and
            check for app updates in the App Store.
          </li>
          <li className="list-group-item border-0 bg-transparent">
            <strong>🌐 No Internet Connection:</strong> Ensure your device has a
            working internet connection.
          </li>
          <li className="list-group-item border-0 bg-transparent">
            <strong>📩 Other Issues:</strong> Email us at{" "}
            <a href={`mailto:${email}`} className="text-decoration-none">
              {email}
            </a>{" "}
            with details.
          </li>
        </ul>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-secondary" style={{ fontSize: "1.5rem" }}>
          🔒 Privacy Policy
        </h2>
        <p className="text-muted">
          We value your privacy. Please review our
          <a
            href="https://docs.google.com/document/d/1qON7kIEWHW9hbcno7zCoXwxWrxv_wBhNd8o0RF_qQa8/edit?tab=t.0#heading=h.wksf80chrb95"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-1 text-decoration-none">
            Privacy Policy
          </a>
          for details on how we manage your data.
        </p>
      </div>
    </div>
  );
}

export default App;
