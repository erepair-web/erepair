
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Terms = () => {
  return (
    <Layout>
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-muted-foreground">Last updated: May 1, 2023</p>
              
              <p className="mt-6">
                Welcome to eRepair. These Terms of Service ("Terms") govern your use of our website, mobile application, and repair services provided by eRepair Technologies Pvt. Ltd. and its affiliates ("eRepair," "we," "us," or "our").
              </p>
              
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
              
              <h2>1. Services</h2>
              <p>
                eRepair provides electronic device repair services, DIY repair kits, e-waste recycling, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
              
              <h2>2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this eligibility requirement.
              </p>
              
              <h2>3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              
              <h2>4. Repair Services</h2>
              <h3>4.1 Repair Appointments</h3>
              <p>
                When scheduling a repair, you agree to provide accurate information about your device and the issues it's experiencing. You may be charged a diagnostic fee if you cancel your repair appointment without reasonable notice.
              </p>
              
              <h3>4.2 Device Data</h3>
              <p>
                We are not responsible for any data loss that may occur during the repair process. We strongly recommend backing up your device before submitting it for repair.
              </p>
              
              <h3>4.3 Repair Warranty</h3>
              <p>
                Our repairs come with a 6-month warranty covering both parts and labor for the specific repair performed. The warranty does not cover physical damage, water damage, or any issues unrelated to the original repair.
              </p>
              
              <h2>5. Payment</h2>
              <p>
                By providing a payment method, you authorize us to charge you for all services you purchase. All payments are non-refundable except as expressly provided in our refund policy.
              </p>
              
              <h2>6. Intellectual Property</h2>
              <p>
                All content on our website and mobile application, including text, graphics, logos, images, and software, is the property of eRepair or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2>7. User Content</h2>
              <p>
                You retain ownership of any content you submit to our services. By submitting content, you grant us a non-exclusive, royalty-free, worldwide license to use, store, display, reproduce, modify, and distribute your content in connection with our services.
              </p>
              
              <h2>8. Prohibited Conduct</h2>
              <p>
                You agree not to:
              </p>
              <ul>
                <li>Use our services for any illegal purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt our services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Engage in any activity that could damage, disable, or impair our services</li>
                <li>Use any automated means to access our services without our permission</li>
              </ul>
              
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, eRepair and its affiliates, officers, employees, agents, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, arising out of or in connection with your use of our services.
              </p>
              
              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless eRepair and its affiliates, officers, employees, agents, and partners from any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' fees, arising out of or in connection with your violation of these Terms or your use of our services.
              </p>
              
              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
              </p>
              
              <h2>12. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after any changes to these Terms constitutes your acceptance of the changes.
              </p>
              
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> legal@erepair.in<br />
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

export default Terms;
