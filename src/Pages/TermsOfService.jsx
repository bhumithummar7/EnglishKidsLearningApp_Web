import React from "react";

const TermsOfService = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📜 Terms of Service</h2>

      <h2 style={styles.subHeading}>1. Introduction</h2>
      <p>
        Welcome to the <strong>English Kids Learning App</strong>. These Terms of Service ("Terms") govern your use of our app and subscription services. By using the app and subscribing, you agree to these Terms. Please read them carefully.
      </p>

      <h2 style={styles.subHeading}>2. Subscription and Payments</h2>
<ul>
  <li>We offer two auto-renewable subscriptions:
    <ul>
      <li><strong>Monthly Plan</strong> – $3.99/month</li>
      <li><strong>Yearly Plan</strong> – $44.99/year</li>
    </ul>
  </li>
  <li>Payment will be charged to your Apple ID account at the time of confirmation.</li>
  <li>The subscription automatically renews unless canceled at least 24 hours before the end of the current period.</li>
  <li>You can manage or cancel your subscription in your App Store account settings after purchase.</li>
  <li>We do not offer refunds for unused portions of a subscription.</li>
</ul>


      <h2 style={styles.subHeading}>3. Use of the App</h2>
      <ul>
        <li>The app is designed to support children's English learning and should be used accordingly.</li>
        <li>Parents or guardians should supervise children under 13 using the app.</li>
        <li>You agree not to misuse or exploit the app or its content.</li>
      </ul>

      <h2 style={styles.subHeading}>4. Intellectual Property</h2>
      <p>
        All content within the app including text, images, videos, and audio are owned by <strong>WALD</strong> or licensed to us. Your subscription grants you a limited license to access the content for personal, non-commercial use.
      </p>

      <h2 style={styles.subHeading}>5. Privacy</h2>
      <p>
        Our <a href="https://englishkidslearning.waldsolutions.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{color: "#007BFF"}}>Privacy Policy</a> explains how we collect and use your data. By using the app, you agree to the practices described there.
      </p>

      <h2 style={styles.subHeading}>6. Modifications and Termination</h2>
      <ul>
        <li>We reserve the right to modify or discontinue the app or services at any time without notice.</li>
        <li>We may update these Terms occasionally; continued use after changes means you accept the new Terms.</li>
        <li>We may suspend or terminate your access if you violate these Terms.</li>
      </ul>

      <h2 style={styles.subHeading}>7. Disclaimers and Limitation of Liability</h2>
      <p>
        The app is provided "as is" without warranties. We are not liable for damages arising from use or inability to use the app.
      </p>

      <h2 style={styles.subHeading}>8. Governing Law</h2>
      <p>
  These Terms are governed by the laws of <strong>India</strong>. Any disputes will be resolved in courts located in <strong>Surat, Gujarat</strong>.
</p>
<h2 style={styles.subHeading}>10. Apple Terms of Use</h2>
<p>
  By using our app on iOS, you also agree to Apple's standard <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" style={{color: "#007BFF"}}>Licensed Application End User License Agreement (EULA)</a>.
</p>


      <h2 style={styles.subHeading}>9. Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at:<br />
        <a href="mailto:works.wald@gmail.com" style={{color: "#007BFF"}}>works.wald@gmail.com</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  subHeading: {
    color: "#333",
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
  },
};

export default TermsOfService;
