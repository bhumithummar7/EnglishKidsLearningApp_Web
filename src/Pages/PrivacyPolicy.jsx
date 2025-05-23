import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔒 Privacy Policy</h2>

      <h2 style={styles.subHeading}>1. Introduction</h2>
      <p>
        Welcome to the <strong>English Kids Learning App!</strong> Your privacy is our top priority. 
        This Privacy Policy explains how we handle your information when you use our application. 
        By using the app, you agree to the terms outlined in this policy. If you do not agree, please discontinue use of the app.
      </p>

      <h2 style={styles.subHeading}>2. Information We Do Not Collect</h2>
      <p>
        We do not collect, store, or share any personal data, location information, or user behavior data. 
        The app is designed exclusively for <strong>educational purposes</strong>, ensuring a 
        <strong> safe and private experience for children</strong>.
      </p>

      <h2 style={styles.subHeading}>3. Third-Party Advertising & Compliance</h2>
      <p>
        Our app displays advertisements provided by <strong>Google AdMob</strong> in compliance with: 
      </p>
      <ul>
        <li>✅ <strong>Apple’s Kids Category Guidelines</strong></li>
        <li>✅ <strong>COPPA (Children’s Online Privacy Protection Act)</strong></li>
        <li>✅ <strong>GDPR-K (Children’s Data Protection Regulation)</strong></li>
      </ul>
      <p>We ensure:</p>
      <ul>
        <li>✅ <strong>Only child-appropriate, non-personalized contextual ads</strong> are shown.</li>
        <li>✅ <strong>No behavioral tracking or retargeting</strong>.</li>
        <li>✅ <strong>Manual review of ad creatives</strong> to ensure compliance with child safety regulations.</li>
        <li>✅ No ads containing <strong>violence, gambling, alcohol, or inappropriate content</strong>.</li>
      </ul>
      <p>
        More details on Google AdMob’s privacy practices: 
        <a href="https://policies.google.com/technologies/ads" target="_blank">Google AdMob Privacy Policy</a>.
      </p>

      <h2 style={styles.subHeading}>4. Child Privacy Protection</h2>
      <p>
        The <strong>English Kids Learning App</strong> follows strict compliance with:
      </p>
      <ul>
        <li>✔️ <strong>No data collection, sharing, or tracking of children</strong>.</li>
        <li>✔️ <strong>No user accounts, sign-ins, or personal information requests</strong>.</li>
        <li>✔️ Compliance with <strong>COPPA & GDPR-K</strong> regulations.</li>
      </ul>
      <p>
        If you believe your child has provided any personal data, please <strong>contact us immediately</strong> for deletion.
      </p>

      <h2 style={styles.subHeading}>5. Data Sharing Policy</h2>
      <p>
        We do <strong>not</strong> share, sell, or distribute any user data. Ads shown in our app are provided by 
        <strong> Google AdMob</strong>, which operates under its own privacy policy.
      </p>

      <h2 style={styles.subHeading}>6. Data Security</h2>
      <p>
        Since our app <strong>does not collect or store any personal data</strong>, there are no security risks related to user data.
      </p>

      <h2 style={styles.subHeading}>7. Third-Party Services</h2>
      <p>
        The app displays advertisements through <strong>Google AdMob</strong>. While we do not collect any data, 
        Google AdMob may collect and use information as outlined in their privacy policies. 
        Please review <a href="https://policies.google.com/privacy" target="_blank">Google’s Privacy Policy</a>.
      </p>

      <h2 style={styles.subHeading}>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Any changes will be posted within the app, 
        and the <strong>effective date</strong> will be updated. Continued use of the app after any modifications 
        indicates acceptance of the updated policy.
      </p>

      <h2 style={styles.subHeading}>9. Subscription Information</h2>
      <p>
        The app offers <strong>auto-renewable subscriptions</strong> for premium content (monthly and yearly plans).
        All subscription transactions are processed securely via your Apple ID and managed through the Apple App Store.
      </p>
      <ul>
        <li>✔️ We do not store or access your billing or payment information.</li>
        <li>✔️ Subscription management (renewals, cancellations) is handled through your Apple device settings.</li>
        <li>✔️ You may cancel your subscription at any time by navigating to your Apple ID account settings.</li>
        <li>✔️ No user login or personal account is required for subscription access.</li>
      </ul>

      <h2 style={styles.subHeading}>10. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us:
      </p>
      <p><strong>📧 Email:</strong> <a href="mailto:works.wald@gmail.com">works.wald@gmail.com</a></p>

      <p>
        Thank you for using the <strong>English Kids Learning App</strong>. We are committed to providing a 
        safe and educational experience for children.
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
    lineHeight: "1.6"
  },
  heading: {
    textAlign: "center",
    color: "#333"
  },
  subHeading: {
    color: "#333",
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px"
  }
};

export default PrivacyPolicy;
