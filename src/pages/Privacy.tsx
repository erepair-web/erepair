
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Privacy = () => {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        backgroundImage="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-muted-foreground">Last updated: May 1, 2023</p>
              
              <p className="mt-6">
                At eRepair, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or use our repair services.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third parties.
              </p>
              
              <h3>Information You Provide to Us</h3>
              <ul>
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Billing information (billing address, payment details, etc.)</li>
                <li>Device information (device type, model, serial number, etc.)</li>
                <li>Content of communications with us</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3>Information We Collect Automatically</h3>
              <ul>
                <li>Log information (IP address, browser type, pages visited, time spent, etc.)</li>
                <li>Device information (hardware model, operating system, unique device identifiers, etc.)</li>
                <li>Location information (with your consent)</li>
                <li>Cookies and similar technologies</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address fraud and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>How We Share Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with your consent</li>
                <li>In response to legal process or government requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, sale, or acquisition</li>
              </ul>
              
              <h2>Your Choices</h2>
              <p>
                You have several choices regarding the information we collect and how it's used:
              </p>
              <ul>
                <li>Account Information: You can update your account information by logging into your account</li>
                <li>Cookies: You can manage cookie preferences through your browser settings</li>
                <li>Marketing Communications: You can opt out of marketing emails by following the unsubscribe instructions</li>
                <li>Mobile Push Notifications: You can manage push notifications in your device settings</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
              
              <h2>Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@erepair.in<br />
                <strong>Phone:</strong> +91 1234 567 890<br />
                <strong>Address:</strong> 123 Tech Park, Electronic City, Bengaluru, Karnataka 560100
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
