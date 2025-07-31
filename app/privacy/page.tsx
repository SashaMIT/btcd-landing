import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | BTCD',
  description: 'Privacy Policy for BTCD - Bitcoin-backed stablecoin platform'
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-elastos-darker text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold heading-elastos">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">Effective Date: January 28, 2025</p>
            <p className="text-gray-400">Last Updated: January 28, 2025</p>
          </div>

          {/* Company Info */}
          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-elastos-orange">1. About Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This Privacy Policy applies to the BTCD platform operated by <strong>Creek Business Center</strong>, 
              a business entity registered in Dubai, United Arab Emirates (Trade License No. 1293230).
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Contact Information:</strong><br/>
              Creek Business Center<br/>
              Office G-01-MEZZ, Al Sabkha, The Creek Business Center<br/>
              Dubai, United Arab Emirates<br/>
              Email: privacy@btcd.finance
            </p>
          </div>

          {/* Information Collection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">2. Information We Collect</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  When you use the BTCD platform, we may collect:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Email address for account creation and communications</li>
                  <li>Wallet addresses for Bitcoin transactions and collateral management</li>
                  <li>Transaction data related to BTCD minting, redemption, and arbitration</li>
                  <li>Identity verification information as required by UAE regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.2 Technical Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Usage analytics and platform interaction data</li>
                  <li>Blockchain transaction data (which is publicly available)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.3 Cryptocurrency Data</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Bitcoin addresses and transaction histories</li>
                  <li>ELA token holdings for dual-collateral (GSM) system</li>
                  <li>Multi-signature script data for security purposes</li>
                  <li>Arbitration and dispute resolution records</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
              <li><strong>Platform Operations:</strong> To facilitate BTCD minting, redemption, and collateral management</li>
              <li><strong>Security:</strong> To implement multi-signature security and monitor for suspicious activity</li>
              <li><strong>Arbitration:</strong> To enable BeL2 dispute resolution and arbiter selection</li>
              <li><strong>Compliance:</strong> To meet UAE regulatory requirements and anti-money laundering obligations</li>
              <li><strong>Communication:</strong> To send important updates about your positions and platform changes</li>
              <li><strong>Analytics:</strong> To improve platform performance and user experience</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
              <li><strong>BeL2 Arbiters:</strong> Limited transaction data for dispute resolution purposes</li>
              <li><strong>Regulatory Authorities:</strong> As required by UAE law or court orders</li>
              <li><strong>Service Providers:</strong> Trusted partners who assist in platform operations (under strict confidentiality)</li>
              <li><strong>Legal Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of company assets</li>
            </ul>
          </div>

          {/* Blockchain Transparency */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">5. Blockchain Data Transparency</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Important Notice:</strong> Bitcoin and Elastos blockchain transactions are public and permanently recorded. 
              This includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>All Bitcoin transactions and wallet addresses</li>
              <li>Multi-signature script details and collateral locks</li>
              <li>BTCD minting and redemption activities</li>
              <li>Smart contract interactions on Elastos Smart Chain</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              While we implement privacy measures where possible, blockchain data is inherently transparent 
              and cannot be deleted or modified once recorded.
            </p>
          </div>

          {/* Data Security */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">6. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Multi-signature cryptographic security (2-of-3 architecture)</li>
              <li>Encrypted data transmission and storage</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication protocols</li>
              <li>Compliance with UAE cybersecurity regulations</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">7. Your Rights and Choices</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Under UAE law, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal and operational requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to certain processing of your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Note:</strong> Some data cannot be deleted due to blockchain immutability and regulatory requirements.
            </p>
          </div>

          {/* International Transfers */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">8. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              As a blockchain-based platform, your data may be processed across multiple jurisdictions. 
              We ensure appropriate safeguards are in place for any international transfers, including 
              compliance with UAE data protection laws and international best practices.
            </p>
          </div>

          {/* Data Retention */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">9. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide BTCD platform services</li>
              <li>Comply with UAE legal and regulatory requirements (typically 7 years)</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Protect against fraud and abuse</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Blockchain data is permanent and cannot be deleted from public ledgers.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices, 
              technology, or legal requirements. We will notify you of any material changes through 
              the platform or via email. Your continued use of the BTCD platform after changes 
              constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise your rights, contact us:
            </p>
            <div className="text-gray-300">
              <p><strong>Email:</strong> privacy@btcd.finance</p>
              <p><strong>Address:</strong> Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE</p>
              <p><strong>Response Time:</strong> We will respond to privacy requests within 30 days</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2025 Creek Business Center. All rights reserved.<br/>
              Licensed in Dubai, United Arab Emirates (Trade License No. 1293230)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 