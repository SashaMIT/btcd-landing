import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | BTCD',
  description: 'Terms of Service for BTCD - Bitcoin-backed stablecoin platform'
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-elastos-darker text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold heading-elastos">Terms of Service</h1>
            <p className="text-gray-400 text-lg">Effective Date: January 28, 2025</p>
            <p className="text-gray-400">Last Updated: January 28, 2025</p>
          </div>

          {/* Acceptance */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">Important Notice</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using the BTCD platform, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, do not use the platform. These terms constitute a legally 
              binding agreement between you and Creek Business Center.
            </p>
          </div>

          {/* Company Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">1. Platform Operator</h2>
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                The BTCD platform is operated by <strong>Creek Business Center</strong>, a business entity 
                registered in Dubai, United Arab Emirates.
              </p>
              <div className="text-gray-300">
                <p><strong>Trade License:</strong> No. 1293230</p>
                <p><strong>Jurisdiction:</strong> Dubai, United Arab Emirates</p>
                <p><strong>Regulator:</strong> Dubai Department of Economy and Tourism</p>
                <p><strong>Address:</strong> Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE</p>
                <p><strong>Contact:</strong> legal@btcd.finance</p>
              </div>
            </div>
          </div>

          {/* Platform Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">2. Platform Description</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              BTCD is a Bitcoin-backed stablecoin platform that enables users to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Lock Bitcoin as collateral in multi-signature scripts</li>
              <li>Mint BTCD stablecoins backed by Bitcoin reserves</li>
              <li>Participate in BeL2 arbitration network for dispute resolution</li>
              <li>Utilize dual-collateral (GSM) system with Bitcoin and ELA tokens</li>
              <li>Benefit from algorithmic options hedging for liquidation protection</li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">3. Eligibility and Restrictions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">3.1 Age and Capacity</h3>
                <p className="text-gray-300 leading-relaxed">
                  You must be at least 18 years old and have the legal capacity to enter into contracts 
                  in your jurisdiction.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">3.2 Geographic Restrictions</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  The platform is not available to residents of certain jurisdictions. You may not use 
                  the platform if you are located in or resident of:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>United States of America</li>
                  <li>Countries subject to international sanctions</li>
                  <li>Jurisdictions where cryptocurrency activities are prohibited</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.3 Compliance</h3>
                <p className="text-gray-300 leading-relaxed">
                  You represent that your use of the platform complies with all applicable laws 
                  and regulations in your jurisdiction.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Services */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">4. Platform Services</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">4.1 Bitcoin Collateral System</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Users lock Bitcoin in 2-of-3 multi-signature P2WSH scripts</li>
                  <li>Collateral remains on Bitcoin blockchain for maximum security</li>
                  <li>Multi-signature involves user, issuer, and BeL2 arbiter</li>
                  <li>Minimum 3 confirmations required for collateral verification</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4.2 BTCD Minting and Redemption</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>BTCD tokens minted 1:1 against Bitcoin collateral value</li>
                  <li>90-day loan terms with algorithmic options hedging</li>
                  <li>Redemption requires principal plus interest payment</li>
                  <li>Early redemption permitted subject to terms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4.3 BeL2 Arbitration Network</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Independent arbiters from Elastos network</li>
                  <li>Dispute resolution for borrower-issuer disagreements</li>
                  <li>Economic incentives ensure honest behavior</li>
                  <li>Arbiters stake ELA tokens as collateral</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Obligations */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">5. User Obligations and Restrictions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">5.1 Prohibited Activities</h3>
                <p className="text-gray-300 leading-relaxed mb-3">You agree not to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Use the platform for money laundering or terrorist financing</li>
                  <li>Provide false or misleading information</li>
                  <li>Attempt to manipulate platform operations or pricing</li>
                  <li>Interfere with platform security or other users' access</li>
                  <li>Use the platform for any illegal activities</li>
                  <li>Circumvent arbitration or dispute resolution processes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">5.2 Security Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Maintain secure custody of private keys and wallet access</li>
                  <li>Verify all transaction details before confirmation</li>
                  <li>Report security incidents promptly</li>
                  <li>Use supported wallets and software versions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">5.3 Loan Obligations</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Repay principal plus interest within 90-day term</li>
                  <li>Monitor collateral ratios and margin requirements</li>
                  <li>Understand liquidation triggers and timelock mechanisms</li>
                  <li>Participate in good faith in any dispute resolution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fees and Payments */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">6. Fees and Payments</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed mb-4">
                Platform fees include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Interest Rate:</strong> 4% annual (dynamically adjusted for market conditions)</li>
                <li><strong>Minting Fee:</strong> 0.2% of BTCD amount</li>
                <li><strong>Options Hedging:</strong> Covered by protocol through dynamic rate adjustments</li>
                <li><strong>Arbitration Fees:</strong> Paid to BeL2 arbiters for dispute resolution</li>
                <li><strong>Network Fees:</strong> Bitcoin and Elastos transaction costs</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                All fees are clearly disclosed before transaction execution. Fee structures may be 
                updated with advance notice.
              </p>
            </div>
          </div>

          {/* Risk Disclosure */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-red-400 mb-4">7. Risk Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Cryptocurrency and DeFi activities involve significant risks. By using BTCD, you acknowledge:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Bitcoin and cryptocurrency prices are highly volatile</li>
              <li>Smart contract and technical risks may result in loss of funds</li>
              <li>Liquidation may occur if loan terms are not met</li>
              <li>Blockchain transactions are irreversible</li>
              <li>Regulatory changes may affect platform operations</li>
              <li>Options hedging does not guarantee against all losses</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              For complete risk information, see our <a href="/risk-disclaimer" className="text-red-400 hover:text-red-300 underline">Risk Disclaimer</a>.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">8. Dispute Resolution</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">8.1 BeL2 Arbitration</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Platform-related disputes are resolved through the BeL2 arbitration system:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Independent arbiters selected from Elastos network</li>
                  <li>Economic incentives ensure fair resolution</li>
                  <li>Decisions are binding on platform participants</li>
                  <li>Appeals process available for significant disputes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">8.2 Legal Jurisdiction</h3>
                <p className="text-gray-300 leading-relaxed">
                  For disputes not resolved through BeL2 arbitration, these Terms are governed by 
                  UAE law, and any legal proceedings shall be conducted in Dubai courts.
                </p>
              </div>
            </div>
          </div>

          {/* Limitations of Liability */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">9. Limitations of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To the maximum extent permitted by UAE law:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Creek Business Center's liability is limited to direct damages only</li>
              <li>No liability for indirect, consequential, or speculative damages</li>
              <li>Maximum liability shall not exceed fees paid by user in preceding 12 months</li>
              <li>No warranty that platform will be uninterrupted or error-free</li>
              <li>Users assume risks inherent in cryptocurrency and DeFi activities</li>
            </ul>
          </div>

          {/* Platform Changes */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">10. Platform Modifications</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Modify platform features and functionality</li>
              <li>Update fee structures with 30 days notice</li>
              <li>Suspend or terminate services for maintenance or security</li>
              <li>Implement additional security or compliance measures</li>
              <li>Update these Terms with advance notice</li>
            </ul>
          </div>

          {/* Termination */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">11. Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">11.1 User Termination</h3>
                <p className="text-gray-300 leading-relaxed">
                  You may stop using the platform at any time, subject to fulfilling existing 
                  loan obligations and completing pending transactions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">11.2 Platform Termination</h3>
                <p className="text-gray-300 leading-relaxed">
                  We may suspend or terminate access for violations of these Terms, illegal activities, 
                  or security concerns. Active positions will be handled according to established protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Indemnification */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">12. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless Creek Business Center from any claims, 
              losses, or damages arising from your use of the platform, violation of these Terms, 
              or violation of applicable laws.
            </p>
          </div>

          {/* Force Majeure */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">13. Force Majeure</h2>
            <p className="text-gray-300 leading-relaxed">
              Creek Business Center shall not be liable for delays or failures in performance 
              resulting from circumstances beyond our reasonable control, including blockchain 
              network congestion, regulatory actions, or natural disasters.
            </p>
          </div>

          {/* Severability */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">14. Severability</h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is deemed invalid or unenforceable, the remaining 
              provisions shall continue in full force and effect.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">15. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms periodically. Material changes will be announced through 
              the platform with at least 30 days notice. Continued use after changes constitutes 
              acceptance of updated Terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">16. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For questions about these Terms of Service:
            </p>
            <div className="text-gray-300">
              <p><strong>Email:</strong> legal@btcd.finance</p>
              <p><strong>Address:</strong> Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE</p>
              <p><strong>Business Hours:</strong> Sunday - Thursday, 9:00 AM - 5:00 PM GST</p>
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