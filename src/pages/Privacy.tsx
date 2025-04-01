
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Privacy = () => {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        backgroundImage="https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=2069&auto=format&fit=crop"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Privacy Policy for eRepair</h2>
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p>
              Thank you for choosing eRepair ("we," "us," or "our"). We are committed to protecting your personal 
              information and your right to privacy. This Privacy Policy explains how we collect, use, and share 
              information about you when you use our services, website, and mobile application.
            </p>
            
            <h3>Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, address, and payment details when you book a repair or register for an account.</li>
              <li><strong>Device Information:</strong> Information about the electronic devices you bring for repair, including make, model, serial number, and issues reported.</li>
              <li><strong>Usage Information:</strong> How you interact with our website, app, and services, including IP address, browser type, pages visited, and time spent.</li>
              <li><strong>Location Information:</strong> With your permission, we may collect precise location data to provide location-based services.</li>
            </ul>
            
            <h3>How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Develop new products and services</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize your experience and provide content and features relevant to your interests</li>
            </ul>
            
            <h3>Information Sharing and Disclosure</h3>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Companies that perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
              <li><strong>Business Partners:</strong> Trusted third parties who help us provide our services, such as parts suppliers or specialized repair technicians.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property.</li>
            </ul>
            
            <h3>Your Rights and Choices</h3>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing your consent at any time</li>
              <li>Requesting restriction of processing of your personal information</li>
              <li>Receiving a copy of your personal information in a structured, machine-readable format</li>
              <li>Opting out of marketing communications</li>
            </ul>
            
            <h3>Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              from unauthorized access, use, disclosure, alteration, or destruction.
            </p>
            
            <h3>Data Retention</h3>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy unless a longer retention period is required or permitted by law.
            </p>
            
            <h3>Children's Privacy</h3>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children under 18.
            </p>
            
            <h3>Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              Email: mail.erepair@gmail.com<br />
              Phone: +91 8999895516<br />
              Address: 1154 Prime Arcade, Shop No-5B, Ground Floor, Saifee Street, Behind MG Road, Camp, Pune - 411001
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
