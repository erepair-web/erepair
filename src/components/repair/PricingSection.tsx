
export function PricingSection() {
  const commonIssues = [
    { device: "Phone", issues: ["Screen Repair", "Battery Replacement", "Water Damage", "Charging Port"], prices: ["₹1,200", "₹800", "₹1,500", "₹600"] },
    { device: "Laptop", issues: ["Screen Repair", "Battery Replacement", "Keyboard Replacement", "Hard Drive Upgrade"], prices: ["₹3,500", "₹2,200", "₹1,800", "₹1,500"] },
    { device: "Tablet", issues: ["Screen Repair", "Battery Replacement", "Charging Port", "Button Replacement"], prices: ["₹2,200", "₹1,500", "₹800", "₹600"] },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Common Issues & Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commonIssues.map((deviceIssues) => (
            <div key={deviceIssues.device} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-erepair-dark-blue text-white p-4">
                <h3 className="text-xl font-bold text-center">{deviceIssues.device}</h3>
              </div>
              <div className="p-6">
                <ul className="divide-y">
                  {deviceIssues.issues.map((issue, index) => (
                    <li key={issue} className="py-3 flex justify-between items-center">
                      <span>{issue}</span>
                      <span className="font-semibold text-erepair-green">{deviceIssues.prices[index]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8">
          *Prices may vary based on device model and complexity of the repair.
          Our technicians will provide a precise quote after diagnosis.
        </p>
      </div>
    </section>
  );
}

