import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Contract Analysis Tool",
  description: "Our privacy policy and data handling practices",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen py-12 px-4 md:px-8">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg mb-6">Last updated: June 13, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              At Contract Analysis Tool, we respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Data We Collect</h2>
            <p>
              We collect and process the following information when you use our services:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Personal identification information (Name, email address)</li>
              <li>Usage data related to your interaction with our platform</li>
              <li>Contract data that you upload for analysis</li>
              <li>Payment information when you purchase our services</li>
            </ul>
            <p>
              We process your contract data solely to provide our analysis services. We implement strict security measures
              to ensure the confidentiality and integrity of your documents.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To analyze and improve our service</li>
              <li>To process payments</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized or unlawful processing, accidental loss, destruction, or damage. All uploaded contracts
              are encrypted both in transit and at rest.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>The right to request access to your personal data</li>
              <li>The right to request correction of your personal data</li>
              <li>The right to request erasure of your personal data</li>
              <li>The right to withdraw consent</li>
              <li>The right to data portability</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              <a href="mailto:sakshamgoel1107@gmail.com" className="text-blue-600 dark:text-blue-400">
                sakshamgoel1107@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
