import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Risk Disclaimer | BTCD',
  description: 'Risk Disclaimer for BTCD - Understanding cryptocurrency and DeFi risks'
}

export default function RiskDisclaimer() {
  return (
    <div className="min-h-screen bg-elastos-darker text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold heading-elastos">Risk Disclaimer</h1>
            <p className="text-gray-400 text-lg">Effective Date: January 28, 2025</p>
            <p className="text-gray-400">Last Updated: January 28, 2025</p>
          </div>

          {/* Critical Warning */}
          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <h2 className="text-2xl font-semibold text-red-400">Critical Risk Warning</h2>
            </div>
            <p className="text-gray-200 leading-relaxed text-lg mb-4">
              <strong>CRYPTOCURRENCY AND DEFI INVESTMENTS CARRY EXTREME RISK OF LOSS.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed">
              The BTCD platform involves highly risky activities including cryptocurrency lending, 
              collateralization, and exposure to volatile digital assets. You may lose some or all 
              of your funds. Only invest what you can afford to lose completely.
            </p>
          </div>

          {/* About This Document */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">About This Risk Disclaimer</h2>
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                This Risk Disclaimer is issued by <strong>Creek Business Center</strong> (Trade License No. 1293230), 
                a business entity registered in Dubai, United Arab Emirates, operator of the BTCD platform.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using the BTCD platform, you acknowledge that you have read, understood, and accepted 
                all risks outlined in this document. This disclaimer does not constitute financial, 
                investment, or legal advice.
              </p>
            </div>
          </div>

          {/* Cryptocurrency Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">1. Cryptocurrency and Digital Asset Risks</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">1.1 Extreme Price Volatility</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Bitcoin and other cryptocurrencies are extremely volatile and can experience:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Daily price swings of 10% or more</li>
                  <li>Sudden and significant crashes (50%+ losses)</li>
                  <li>Extended bear markets lasting months or years</li>
                  <li>Market manipulation by large holders ("whales")</li>
                  <li>Complete loss of value in extreme scenarios</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">1.2 Regulatory and Legal Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Governments may ban or restrict cryptocurrency activities</li>
                  <li>New regulations may impact platform operations</li>
                  <li>Tax treatment may change unexpectedly</li>
                  <li>Cross-border transactions may face additional restrictions</li>
                  <li>Legal status varies significantly between jurisdictions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">1.3 Market and Liquidity Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Limited liquidity during market stress</li>
                  <li>Wide bid-ask spreads in volatile conditions</li>
                  <li>Potential inability to exit positions quickly</li>
                  <li>Market closure or suspension risks</li>
                  <li>Price manipulation in smaller markets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BTCD Platform Specific Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">2. BTCD Platform-Specific Risks</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">2.1 Liquidation Risks</h3>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-3">
                  <p className="text-gray-300 leading-relaxed mb-3">
                    <strong>Critical:</strong> While BTCD's options hedging eliminates price liquidations 
                    during the 90-day term, you still face liquidation risks:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Maturity Liquidation:</strong> Automatic liquidation if loan not repaid by term end</li>
                    <li><strong>Default Risk:</strong> Loss of collateral if unable to meet repayment obligations</li>
                    <li><strong>Options Protection Limits:</strong> Protection may not cover extreme market conditions</li>
                    <li><strong>System Failure:</strong> Technical failures could impact liquidation protection</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">2.2 Multi-Signature and Custody Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Key Loss:</strong> Losing access to your private keys means permanent fund loss</li>
                  <li><strong>Multi-Sig Complexity:</strong> Errors in multi-signature operations can lock funds</li>
                  <li><strong>Arbiter Risk:</strong> BeL2 arbiters may make unfavorable decisions</li>
                  <li><strong>Technical Errors:</strong> Mistakes in Bitcoin script creation or execution</li>
                  <li><strong>Counterparty Risk:</strong> Issuer or arbiter may become unavailable or hostile</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">2.3 BeL2 Arbitration Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Arbiters may make biased or incorrect decisions</li>
                  <li>Arbitration process may be slow during disputes</li>
                  <li>Economic incentives may not prevent collusion</li>
                  <li>Appeals process may not reverse unfair decisions</li>
                  <li>Arbiters may lose their staked ELA, affecting dispute resolution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">2.4 GSM Dual-Collateral Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>ELA Token Risk:</strong> ELA tokens may lose value or become illiquid</li>
                  <li><strong>Correlation Risk:</strong> Bitcoin and ELA may decline simultaneously</li>
                  <li><strong>Cross-Chain Risk:</strong> Elastos Smart Chain technical failures</li>
                  <li><strong>Complexity Risk:</strong> More complex systems have more failure points</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical and Operational Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">3. Technical and Operational Risks</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">3.1 Smart Contract and Code Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Bugs and Vulnerabilities:</strong> Code errors may result in permanent fund loss</li>
                  <li><strong>Hacking and Exploits:</strong> Malicious attacks on smart contracts</li>
                  <li><strong>Audit Limitations:</strong> Security audits cannot guarantee bug-free code</li>
                  <li><strong>Upgrade Risks:</strong> Platform updates may introduce new vulnerabilities</li>
                  <li><strong>Oracle Failures:</strong> Price feed manipulations or failures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">3.2 Blockchain and Network Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Bitcoin Network:</strong> Congestion, high fees, or consensus failures</li>
                  <li><strong>Elastos Network:</strong> Technical issues or reduced hash power</li>
                  <li><strong>Fork Risks:</strong> Blockchain splits may affect operations</li>
                  <li><strong>51% Attacks:</strong> Network security compromises</li>
                  <li><strong>Transaction Failures:</strong> Failed or delayed blockchain transactions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">3.3 Platform Operational Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Server downtime or system maintenance issues</li>
                  <li>Database corruption or data loss</li>
                  <li>Cybersecurity breaches or data theft</li>
                  <li>Human error in platform operations</li>
                  <li>Third-party service provider failures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial and Economic Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">4. Financial and Economic Risks</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">4.1 Interest Rate and Fee Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Interest rates may increase during your loan term</li>
                  <li>Additional fees may be introduced</li>
                  <li>Network transaction fees may spike unexpectedly</li>
                  <li>Options hedging costs may exceed projections</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">4.2 Stablecoin and Peg Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Depeg Risk:</strong> BTCD may trade below $1.00</li>
                  <li><strong>Liquidity Risk:</strong> Difficulty selling BTCD in secondary markets</li>
                  <li><strong>Redemption Risk:</strong> Delays or failures in BTCD redemption</li>
                  <li><strong>Market Confidence:</strong> Loss of confidence may affect BTCD value</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">4.3 Macroeconomic Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Global financial crises affecting cryptocurrency markets</li>
                  <li>Central bank policies impacting digital assets</li>
                  <li>Economic sanctions affecting cross-border transactions</li>
                  <li>Currency devaluation in your local jurisdiction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business and Regulatory Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">5. Business and Regulatory Risks</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">5.1 Platform Business Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Business Failure:</strong> Creek Business Center may cease operations</li>
                  <li><strong>Insolvency:</strong> Financial difficulties may affect platform operations</li>
                  <li><strong>Key Personnel:</strong> Loss of critical team members</li>
                  <li><strong>Funding:</strong> Inability to secure necessary operational funding</li>
                  <li><strong>Competition:</strong> Superior competing platforms may emerge</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">5.2 Regulatory and Compliance Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>UAE regulatory changes affecting cryptocurrency businesses</li>
                  <li>International sanctions or restrictions</li>
                  <li>Tax law changes in UAE or your jurisdiction</li>
                  <li>Compliance failures resulting in penalties or closure</li>
                  <li>License revocation or regulatory action</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User-Specific Risks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">6. User-Specific Risks</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">6.1 Personal Security Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Private Key Security:</strong> Loss, theft, or compromise of private keys</li>
                  <li><strong>Phishing Attacks:</strong> Fraudulent websites or communications</li>
                  <li><strong>Device Security:</strong> Malware or compromise of your devices</li>
                  <li><strong>Social Engineering:</strong> Manipulation to reveal sensitive information</li>
                  <li><strong>Physical Security:</strong> Theft or coercion related to cryptocurrency holdings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">6.2 Knowledge and Experience Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Insufficient understanding of cryptocurrency and DeFi concepts</li>
                  <li>Mistakes in transaction execution or wallet operations</li>
                  <li>Poor risk management and position sizing</li>
                  <li>Emotional decision-making during market volatility</li>
                  <li>Failure to understand platform mechanics and risks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">6.3 Legal and Tax Risks</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Cryptocurrency activities may be illegal in your jurisdiction</li>
                  <li>Unexpected tax liabilities on gains or transactions</li>
                  <li>Inability to access legal remedies for losses</li>
                  <li>Compliance failures with local reporting requirements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Mitigation */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Risk Mitigation Measures</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While BTCD implements several risk mitigation measures, these do not eliminate all risks:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Options Hedging:</strong> Algorithmic protection against price liquidations (90-day term only)</li>
              <li><strong>Multi-Signature Security:</strong> 2-of-3 architecture prevents single points of failure</li>
              <li><strong>BeL2 Arbitration:</strong> Independent dispute resolution with economic incentives</li>
              <li><strong>Progressive Decentralization:</strong> Reducing platform centralization over time</li>
              <li><strong>Security Audits:</strong> Regular code reviews and vulnerability assessments</li>
              <li><strong>Regulatory Compliance:</strong> Operating under Dubai business license</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Important:</strong> These measures significantly reduce but do not eliminate risks. 
              Users must still exercise extreme caution and proper risk management.
            </p>
          </div>

          {/* Regulatory Status */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-elastos-orange">7. Regulatory and Legal Status</h2>
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Important Legal Information:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>BTCD and related services are not regulated financial products in most jurisdictions</li>
                <li>No government agency has reviewed or approved this platform</li>
                <li>Users have limited legal protections compared to traditional financial services</li>
                <li>Creek Business Center operates under UAE commercial law, not financial services regulation</li>
                <li>Regulatory status may change, potentially affecting platform operations</li>
              </ul>
            </div>
          </div>

          {/* Professional Advice */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">Professional Advice Recommended</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before using the BTCD platform, we strongly recommend consulting with qualified professionals:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Financial Advisor:</strong> To assess suitability for your financial situation</li>
              <li><strong>Tax Professional:</strong> To understand tax implications in your jurisdiction</li>
              <li><strong>Legal Counsel:</strong> To review legal and regulatory compliance</li>
              <li><strong>Risk Management Expert:</strong> To develop appropriate risk management strategies</li>
            </ul>
          </div>

          {/* Final Acknowledgment */}
          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-red-400 mb-4">Final Risk Acknowledgment</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              <strong>By using the BTCD platform, you acknowledge and accept that:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
              <li>You have read and understood all risks outlined in this disclaimer</li>
              <li>You may lose some or all of your funds</li>
              <li>You are using the platform at your own risk</li>
              <li>You have sufficient knowledge and experience with cryptocurrency and DeFi</li>
              <li>You can afford to lose your entire investment</li>
              <li>You will not hold Creek Business Center liable for any losses</li>
              <li>You understand this is not financial advice</li>
            </ul>
            <p className="text-red-400 leading-relaxed mt-6 text-lg font-semibold">
              If you do not accept these risks, do not use the BTCD platform.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-elastos-orange mb-4">Questions About Risks</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For questions about the risks outlined in this disclaimer:
            </p>
            <div className="text-gray-300">
              <p><strong>Email:</strong> risk@btcd.finance</p>
              <p><strong>Address:</strong> Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE</p>
              <p className="text-red-400 mt-4 font-semibold">
                Note: We cannot provide financial, investment, or legal advice. Consult qualified professionals.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2025 Creek Business Center. All rights reserved.<br/>
              Licensed in Dubai, United Arab Emirates (Trade License No. 1293230)<br/>
              This disclaimer is part of our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 