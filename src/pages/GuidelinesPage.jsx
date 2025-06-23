import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function GuidelinesPage() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto p-6 space-y-12 prose lg:prose-xl">
        {/* Community Guidelines Section */}
        <section id="guidelines" className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Community Guidelines</h1>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Be Respectful</h3>
            <p>
              Treat others as you’d like to be treated. No hate speech, personal
              attacks, or harassment.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Stay On Topic</h3>
            <p>
              Reviews should focus on your experience with the
              space—cleanliness, atmosphere, amenities, etc.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              No Profanity or Spam
            </h3>
            <p>
              Please keep language civil. Spam, self-promotion, or irrelevant
              content will be removed.
            </p>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section id="terms" className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Acceptance of Terms</h3>
            <p>
              By accessing or using UCVibe, you agree to be bound by these Terms
              &amp; Conditions. If you do not agree, please do not use the site.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">User Conduct</h3>
            <p>
              You agree not to post content that is unlawful, defamatory,
              harassing, or otherwise objectionable. We reserve the right to
              remove any content at our discretion.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Intellectual Property
            </h3>
            <p>
              All content on this site is the property of UCVibe or its
              licensors. You may not reproduce, distribute, or create derivative
              works from any content without our express permission.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Limitation of Liability
            </h3>
            <p>
              UCVibe is provided “as is” without warranty. We are not liable for
              any damages arising from your use of the site.
            </p>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section id="privacy" className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Information We Collect
            </h3>
            <p>
              We collect personal details (e.g., name, email) and usage data
              (pages visited, searches, device info) to enhance our service.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              How We Use Your Information
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Personalize and improve your experience.</li>
              <li>Send updates and notifications.</li>
              <li>Analyze usage trends and performance.</li>
            </ul>
            <p className="mt-4">
              We do not sell or rent your personal information to third parties.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Cookies &amp; Tracking
            </h3>
            <p>
              Cookies remember preferences and manage sessions. You can control
              them in your browser settings; disabling may affect functionality.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Third‑Party Services
            </h3>
            <p>
              Features like Google Maps rely on external providers. Refer to
              their privacy policies for data handling practices.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Data Retention</h3>
            <p>
              We keep your data while your account is active and as needed to
              provide services. You may request deletion anytime.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Your Rights</h3>
            <p>
              You can access, update, or delete your data by contacting us at
              <a
                href="mailto:support@ucvibe.com"
                className="text-blue-600 hover:underline"
              >
                support@ucvibe.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
