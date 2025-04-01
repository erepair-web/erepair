
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Terms = () => {
  return (
    <Layout>
      <PageHeader
        title="Terms of Service"
        subtitle="The rules and guidelines for using our services"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Terms of Service for eRepair</h2>
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p>
              Welcome to eRepair. By accessing or using our website, mobile application, and services, 
              you agree to be bound by these Terms of Service. Please read these terms carefully.
            </p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using our services, you agree to these Terms of Service and our Privacy Policy. 
              If you do not agree to these terms, you may not use our services.
            </p>
            
            <h3>2. Services Description</h3>
            <p>
              eRepair provides electronic device repair services, DIY repair kits, recycling services, 
              and related products and services. We reserve the right to modify, suspend, or discontinue 
              any part of our services at any time without notice.
            </p>
            
            <h3>3. User Accounts</h3>
            <p>
              You may need to create an account to use certain features of our services. You are responsible 
              for maintaining the confidentiality of your account credentials and for all activities that occur 
              under your account. You agree to provide accurate and complete information when creating your account.
            </p>
            
            <h3>4. Repair Services</h3>
            <p>
              By using our repair services, you acknowledge and agree to the following:
            </p>
            <ul>
              <li>You authorize our technicians to perform the requested repairs on your device.</li>
              <li>We will make reasonable efforts to complete repairs in a timely manner, but we do not guarantee completion times.</li>
              <li>We are not responsible for any data loss that may occur during the repair process. It is your responsibility to back up your data before submitting your device for repair.</li>
              <li>Any pre-existing damage to your device should be documented and acknowledged before repairs begin.</li>
            </ul>
            
            <h3>5. Warranty Policy</h3>
            <p>
              All repairs come with a 6-month warranty covering the specific repair performed. 
              This warranty does not cover:
            </p>
            <ul>
              <li>Damage caused by accidents, misuse, or abuse</li>
              <li>Water or liquid damage</li>
              <li>Issues unrelated to the original repair</li>
              <li>Repairs performed by someone other than an authorized eRepair technician after our repair</li>
            </ul>
            
            <h3>6. Payment and Pricing</h3>
            <p>
              All prices are in Indian Rupees (INR) and are subject to change without notice. 
              Payment is due upon completion of repair services or at the time of purchase for products. 
              We accept various payment methods as specified on our website or app.
            </p>
            
            <h3>7. Cancellation and Refund Policy</h3>
            <p>
              Repair appointments can be canceled or rescheduled at least 24 hours in advance without penalty. 
              For product purchases, we offer a 7-day return policy for unopened products. 
              Refunds will be processed using the original payment method.
            </p>
            
            <h3>8. Intellectual Property</h3>
            <p>
              All content, features, and functionality of our website and app, including but not limited to text, 
              graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by eRepair 
              and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h3>9. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, eRepair shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including without limitation, loss of profits, data, 
              use, goodwill, or other intangible losses.
            </p>
            
            <h3>10. Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless eRepair and its officers, directors, employees, 
              agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, 
              including without limitation reasonable legal and accounting fees, arising out of or in any way 
              connected with your access to or use of our services.
            </p>
            
            <h3>11. Governing Law</h3>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, 
              without regard to its conflict of law principles.
            </p>
            
            <h3>12. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will provide notice of 
              significant changes by posting an update on our website or app. Your continued use of our services 
              after such changes constitutes your acceptance of the new terms.
            </p>
            
            <h3>13. Contact Us</h3>
            <p>
              If you have any questions about these Terms of Service, please contact us at:<br />
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

export default Terms;
