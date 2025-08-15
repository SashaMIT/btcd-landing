export const translations = {
  en: {
    // Navigation
    nav: {
      howItWorks: "How it works",
      protocol: "Why BTCD", 
      liquidations: "Earn Yield",
      faq: "FAQ",
      about: "About",
      launchApp: "Launch App"
    },
    
    // Hero Section
    hero: {
      watchIntro: "BTC's Next Chapter",
      headline: "Finally, put your",
      bitcoin: "Bitcoin", 
      headlineEnd: "to work without selling it",
      subtitle: "The only Bitcoin-backed stablecoin with zero price liquidation risk during the loan term. Unlock liquidity from your BTC—no wrapped tokens, no bridges, maximum Bitcoin-native security.",
      mintToday: "Mint today",
      securedBy: "Secured by leading Bitcoin infrastructure providers"
    },

    // How BTCD Works
    howWorks: {
      badge: "THE BREAKTHROUGH",
      title: "How BTCD Works",
      subtitle: "The first Bitcoin-native stablecoin with minimal trust requirements through cryptographic design. Here's how our system works.",
      
      step1: {
        title: "Lock Your Bitcoin Securely",
        description: "Create your BTCD order by choosing amount and duration, then pick an independent arbiter from our network. Your Bitcoin goes into a secure P2WSH multi-signature script with three parties: you, the issuer, and your chosen arbiter.",
        points: [
          "Create order with custom amount and duration",
          "Choose your preferred arbiter from order list",
          "Lock BTC in P2WSH script on Bitcoin mainnet"
        ]
      },

      step2: {
        title: "Collateral Verification & Cross-Chain",
        description: "After your Bitcoin transaction receives 3 confirmations on the blockchain, submit cryptographic proof of your collateral. This verifies your Bitcoin is properly locked and securely communicates with smart contracts.",
        points: [
          "Wait for 3 Bitcoin confirmations",
          "Submit cryptographic proof of collateral",
          "Secure verification enables cross-chain functionality"
        ]
      },

      step3: {
        title: "Mint & Use Your BTCD", 
        description: "Claim your BTCD stablecoins once verification is complete. Your BTCD is backed 1:1 by your secured Bitcoin and can be spent anywhere - DeFi, exchanges, or payments.",
        points: [
          "Claim BTCD after successful verification",
          "Spend anywhere - DeFi, CEX, payments",
          "Always backed 1:1 by your locked Bitcoin"
        ]
      },

      step4: {
        title: "Smart Risk Management",
        description: "Our intelligent dashboard tracks your collateral health in real-time. When ready, repay your principal plus interest in BTCD to unlock your Bitcoin. Options hedging protects you from liquidation throughout the loan term.",
        points: [
          "Repay principal + interest to unlock BTC",
          "Options hedging eliminates liquidation risk",
          "Real-time monitoring of your position"
        ]
      }
    },

    // Protocol Section
    protocol: {
      badge: "TECHNICAL EXCELLENCE",
      title: "Why BTCD is Different",
      subtitle: "Built by Harvard alumni and secured by Bitcoin's own mining network. This isn't just another stablecoin—it's the future of Bitcoin finance.",
      
      bitcoinNative: {
        title: "2-of-3 Multi-Signature Security",
        description: "BTCD employs industry-standard 2-of-3 multi-signature P2WSH scripts with three independent parties: borrower, issuer, and BeL2 arbiter. This architecture ensures no single entity can control user funds while maintaining Bitcoin-native security. Dual-collateral support with ELA tokens boosts capital efficiency up to 65% LTV.",
        smartContractsTitle: "Multi-Sig P2WSH Architecture",
        codeComment: "// Decentralized 2-of-3 multi-signature security",
        codeDescription: "Triple-signature security where no single party controls your Bitcoin: you control one key, the issuer holds another, and independent BeL2 arbiters provide dispute resolution that can't be manipulated. Multiple cryptographic timelocks ensure you can always recover your Bitcoin."
      },

      btcdToken: {
        title: "BTCD Stablecoin", 
        description: "Revolutionary Bitcoin-backed stablecoin with built-in volatility protection. Every BTCD is backed by Bitcoin locked in verifiable scripts, protected by algorithmic options hedging that eliminates liquidation risk.",
        backingAsset: "Backing Asset",
        bitcoin100: "100% Bitcoin + Options Protection",
        collateralRatio: "Capital Efficiency", 
        ratioRequired: "Up to 65% LTV",
        liquidation: "Liquidation Risk",
        gracePeriod: "Eliminated via Put Options",
        comparison: {
          title: "vs. Other Stablecoins",
          btcd: "BTCD",
          others: "Others",
          custody: "Custody",
          btcdCustody: "Multi-sig",
          othersCustody: "Custodial",
          backing: "Protection",
          btcdBacking: "Options hedging",
          othersBacking: "None",
          grace: "Liquidation Risk",
          btcdGrace: "Eliminated",
          othersGrace: "High"
        }
      },



      elastos: {
        title: "Progressive Decentralization on Elastos",
        description: "We built BTCD on the Elastos SmartWeb—the only blockchain secured by Bitcoin's hashpower. BTCD follows a structured decentralization roadmap, currently operating with a single issuer model transitioning to a fully distributed BPOS node network while maintaining security guarantees.",
        codeDescription: "BeL2 arbiters inherit over 50% of Bitcoin's hash power through merge mining. Economic staking incentives and anti-collusion measures ensure honest behavior in dispute resolution.",
        stakeElaButton: "Stake ELA Tokens",
        hashpowerLabel: "Bitcoin Hashpower",
        securityLabel: "Progressive Decentralization", 
        mergedLabel: "BeL2 Arbitration Network",
        poolsLabel: "Major Mining Pools",
        annualSecurity: "Annual Mining Security",
        features: [
          {
            title: "100% Transparent",
            description: "Every Bitcoin backing BTCD is verifiable on-chain. Real-time proof of reserves you can audit yourself."
          },
          {
            title: "Bitcoin-Grade Security",
            description: "Protected by the same miners securing Bitcoin. The most battle-tested security model in crypto."
          },
          {
            title: "Self-Sustaining", 
            description: "Designed for long-term stability. Mining rewards and protocol fees create sustainable economics."
          },
          {
            title: "Cryptographically Protected",
            description: "2-of-3 multi-signature security with multiple failsafe recovery mechanisms."
          }
        ]
      },

      bottomBanner: {
        title: "The First Bitcoin-Native Stablecoin is Here",
        description: "Join the revolution that's putting Bitcoin's $2 trillion market cap to work in DeFi through progressive decentralization and Bitcoin-native security."
      }
    },

    // About Section
    about: {
      badge: "COMPANY",
      title: "About BTCD",
      subtitle: "BTCD is developed and issued by Creek Business Center, a Dubai-licensed entity specializing in digital asset infrastructure.",
      
      company: {
        title: "Creek Business Center",
        subtitle: "Licensed Digital Asset Infrastructure Provider",
        description: "Creek Business Center is a Dubai-registered business entity specializing in digital asset infrastructure and blockchain technology solutions.",
        details: {
          license: "Trade License No. 1293230",
          jurisdiction: "Dubai, United Arab Emirates", 
          regulator: "Dubai Department of Economy and Tourism",
          businessType: "Sole Establishment",
          focus: "Digital asset infrastructure and blockchain solutions",
          licenseLink: "View Business License"
        }
      },
      

      
      transparency: {
        title: "Regulatory Transparency",
        description: "We believe in full transparency about our business structure and regulatory compliance.",
        points: [
          "Licensed entity in crypto-friendly Dubai jurisdiction",
          "Clear business registration and regulatory compliance", 
          "Built on proven Elastos SmartWeb infrastructure",
          "Progressive decentralization roadmap with institutional backing"
        ]
      }
    },

    // Liquidations
    liquidations: {
      badge: "EARN REWARDS",
      title: "Earn Yield as a BTCD Arbiter", 
      subtitle: "Participate in protocol security while earning Bitcoin rewards. Stake ELA to become a BeL2 arbiter providing dispute resolution and earning BTC fees from Bitcoin transactions.",
      detailsButton: "Details Soon",
      
      howItWorks: "How You Can Earn",
      purchaseDesc: "Stake ELA tokens for dispute resolution and buy discounted Bitcoin (2-8% off) when vaults need rebalancing.",
      earnDesc: "Multiple revenue streams: dispute fees, discounted Bitcoin purchases, and protocol security rewards.",
      pegDesc: "Help maintain BTCD's dollar peg and protocol decentralization", 
      sustainDesc: "Contribute to protocol sustainability through economic security"
    },

    // Testimonials  
    testimonials: {
      badge: "TESTIMONIALS",
      title: "What Bitcoin Leaders Are Saying",
      subtitle: "Leading voices in the Bitcoin and cryptocurrency space are saying about BTCD"
    },

    // FAQ
    faq: {
      badge: "FAQs",
      title: "We've Got the Answers",
      subtitle: "Everything you need to know about BTCD",
      
      categories: {
        basics: "Basics",
        technology: "Technology", 
        riskManagement: "Risk Management",
        security: "Security",
        launch: "Launch",
        usage: "DeFi & Fees"
      },

      items: [
        {
          question: "What is BTCD?",
          answer: "BTCD is a revolutionary Bitcoin-backed stablecoin with built-in volatility protection. Every BTCD is backed by Bitcoin locked in verifiable scripts, protected by algorithmic options hedging that eliminates price liquidations during the 90-day loan term.",
          category: "Basics"
        },
        {
          question: "How is BTCD different from wrapped Bitcoin?",
          answer: "BTCD uses Bitcoin's native 2-of-3 multi-signature P2WSH scripts—your Bitcoin never leaves the Bitcoin blockchain. Unlike wrapped Bitcoin's custodial model, BTCD's triple-signature security ensures no single entity controls your funds while providing built-in volatility protection.",
          category: "Technology"
        },
        {
          question: "What is options hedging and how does it protect me?",
          answer: "BTCD uses algorithmic options hedging with protective put options to eliminate price liquidations during the loan term. The protocol automatically purchases put options that protect against market downturns for the full 90-day period. Unlike traditional DeFi, you cannot be margin called during this time.",
          category: "Risk Management"
        },
        {
          question: "How do I know my Bitcoin is safe?",
          answer: "Your Bitcoin is protected by a 2-of-3 multi-signature system with multiple security scenarios: normal repayment requires borrower + issuer cooperation, disputes are resolved by independent BeL2 arbiters, loan defaults trigger cryptographic timelocks, and extended timelocks ensure you can always recover your Bitcoin even if the issuer fails.",
          category: "Security"
        },
        {
          question: "What is the BeL2 arbitration system?",
          answer: "BeL2 arbiters are independent third parties selected from the Elastos network who stake ELA tokens to provide dispute resolution. They earn fees for honest behavior and face economic penalties for collusion, ensuring unbiased resolution when borrowers and issuers disagree.",
          category: "Security"
        },
        {
          question: "How can I become a BTCD arbiter?",
          answer: "Stake ELA tokens on the BeL2 network to become an eligible arbiter. Arbiters are selected by borrowers and earn fees for providing dispute resolution services. Strong economic incentives and anti-collusion measures ensure the network remains secure and decentralized.",
          category: "Security"
        },
        {
          question: "What are the different security scenarios?",
          answer: "BTCD protects through multiple scenarios: Normal Repayment (requires borrower + issuer signatures), Dispute Resolution (BeL2 arbiters provide independent verification), Loan Default (cryptographic timelocks enable programmatic liquidation), and Issuer Failure (extended timelocks ensure borrowers can always recover their Bitcoin).",
          category: "Security"
        },
        {
          question: "What is GSM (Gold-Silver Bimetallic) dual-collateral?",
          answer: "GSM allows you to use both Bitcoin (gold) and ELA tokens (silver) as collateral, boosting your capital efficiency up to 65% LTV. Your Bitcoin stays in Bitcoin-native scripts while ELA tokens are held in separate smart contracts, maximizing your borrowing power.",
          category: "Technology"
        },
        {
          question: "How do I create a BTCD loan?",
          answer: "Create an order with your desired amount and duration, choose an arbiter from the network, lock your Bitcoin in a P2WSH script, wait for 3 confirmations, submit proof, then claim your BTCD. The entire process is transparent and Bitcoin-native.",
          category: "Basics"
        },
        {
          question: "Who is behind BTCD?",
          answer: "BTCD is issued by Creek Business Center, a Dubai-licensed entity (Trade License No. 1293230) specializing in digital asset infrastructure. The protocol is built on Elastos SmartWeb infrastructure and follows a progressive decentralization roadmap.",
          category: "Basics"
        },
        {
          question: "Can I get liquidated with BTCD?",
          answer: "No price liquidations during the 90-day term! BTCD's algorithmic options hedging eliminates margin call risk entirely. Unlike other protocols that liquidate your collateral during market downturns, BTCD's put options protect your Bitcoin regardless of price movements for the full loan term. However, if you don't repay by maturity, automatic liquidation occurs.",
          category: "Risk Management"
        },
        {
          question: "What's my maximum borrowing capacity?",
          answer: "With Bitcoin-only collateral, you can borrow up to 60% LTV. With GSM dual-collateral (Bitcoin + ELA tokens), you can reach up to 65% LTV, significantly higher than traditional lending protocols while maintaining full protection.",
          category: "Risk Management"
        },
        {
          question: "What are the fees for using BTCD?",
          answer: "BTCD features transparent pricing: 4% annual interest rate (dynamically adjusted based on volatility), 0.2% minting fee, and minimal transaction fees on Elastos Smart Chain. Options hedging costs are covered by the protocol through dynamic rate adjustments.",
          category: "DeFi & Fees"
        },
        {
          question: "What's the difference between price liquidations and maturity liquidations?",
          answer: "BTCD eliminates price liquidations (margin calls) during the 90-day term through options hedging - your Bitcoin cannot be liquidated due to price movements. However, maturity liquidation occurs if you don't repay your loan by the end of the 90-day term. This is fundamentally different from traditional DeFi where you can lose your collateral anytime the price drops.",
          category: "Risk Management"
        },
        {
          question: "Can I use BTCD in DeFi protocols?",
          answer: "Absolutely! BTCD is fully EVM-compatible and works seamlessly across all major DeFi protocols. Trade on DEXs, provide liquidity, lend, borrow, or use in yield farming - all while your underlying Bitcoin remains protected by options hedging.",
          category: "DeFi & Fees"
        },
        {
          question: "When does BTCD launch?",
          answer: "BTCD launches in August 2025 on Elastos Smart Chain, with broader expansion planned. The protocol follows a progressive decentralization model, starting with a single issuer and transitioning to a distributed BPOS node network while maintaining security guarantees.",
          category: "Basics"
        }
      ],
      
      contact: {
        title: "Still Have Questions?",
        description: "Connect with us on X and let us know what you need.",
        button: "Ask us on X"
      }
    },

    // Legal Pages
    legal: {
      privacy: {
        title: "Privacy Policy",
        effectiveDate: "Effective Date: August 1, 2025",
        lastUpdated: "Last Updated: August 1, 2025",
        sections: {
          aboutUs: {
            title: "1. About Us",
            content: "This Privacy Policy applies to the BTCD platform operated by Creek Business Center, a business entity registered in Dubai, United Arab Emirates (Trade License No. 1293230).",
            contact: "Contact Information:"
          },
          informationCollection: {
            title: "2. Information We Collect",
            personalInfo: {
              title: "2.1 Personal Information",
              intro: "When you use the BTCD platform, we may collect:",
              items: [
                "Account information for platform access and communications",
                "Wallet addresses for Bitcoin transactions and collateral management", 
                "Transaction data related to BTCD minting, redemption, and arbitration",
                "Identity verification information as required by UAE regulations"
              ]
            },
            technicalInfo: {
              title: "2.2 Technical Information",
              intro: "We automatically collect technical data including:",
              items: [
                "Device and browser information for security and optimization",
                "IP addresses and location data for compliance and fraud prevention",
                "Platform usage patterns and performance metrics",
                "Blockchain transaction records and smart contract interactions"
              ]
            }
          },
          dataUsage: {
            title: "3. How We Use Your Information",
            intro: "We use collected information to:",
            items: [
              "Facilitate BTCD minting, redemption, and arbitration processes",
              "Ensure platform security and prevent fraudulent activities",
              "Comply with UAE regulatory requirements and international standards",
              "Improve platform functionality and user experience",
              "Communicate important updates and security notifications"
            ]
          },
          dataSharing: {
            title: "4. Information Sharing and Disclosure",
            intro: "We may share your information:",
            items: [
              "With blockchain networks for transaction verification",
              "With regulatory authorities as required by UAE law",
              "With service providers who assist in platform operations",
              "In response to legal requests or to protect our rights"
            ],
            noSale: "We never sell your personal information to third parties."
          },
          userRights: {
            title: "5. Your Rights and Choices",
            intro: "Under UAE data protection laws, you have the right to:",
            items: [
              "Access and review your personal information",
              "Request correction of inaccurate data",
              "Request deletion of your account and associated data",
              "Object to certain processing activities",
              "Receive a copy of your data in portable format"
            ]
          },
          security: {
            title: "6. Data Security",
            content: "We implement industry-standard security measures including encryption, access controls, and regular security audits. However, no system is completely secure, and we cannot guarantee absolute security."
          },
          updates: {
            title: "7. Policy Updates",
            content: "We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes through the platform. Your continued use of the BTCD platform after changes constitutes acceptance of the updated policy."
          },
          contact: {
            title: "8. Contact Us",
            address: "Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE",
            responseTime: "We will respond to privacy requests within 30 days"
          }
        }
      },
      terms: {
        title: "Terms of Service",
        effectiveDate: "Effective Date: August 1, 2025", 
        lastUpdated: "Last Updated: August 1, 2025",
        sections: {
          importantNotice: {
            title: "Important Notice",
            content: "By accessing or using the BTCD platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform. These terms constitute a legally binding agreement between you and Creek Business Center."
          },
          aboutUs: {
            title: "1. About Us",
            content: "These Terms of Service govern your use of the BTCD platform operated by Creek Business Center, registered in Dubai, UAE (Trade License No. 1293230)."
          },
          platform: {
            title: "2. Platform Description", 
            content: "BTCD is a Bitcoin-backed stablecoin platform utilizing multi-signature security and BeL2 arbitration for secure, non-liquidatable Bitcoin-backed lending."
          },
          eligibility: {
            title: "3. Eligibility",
            content: "You must be at least 18 years old and legally capable of entering into binding agreements to use this platform."
          },
          services: {
            title: "4. Platform Services",
            bitcoinCollateral: {
              title: "4.1 Bitcoin Collateral System",
              items: [
                "Users lock Bitcoin in 2-of-3 multi-signature P2WSH scripts",
                "Collateral remains on Bitcoin blockchain for maximum security", 
                "Multi-signature involves user, issuer, and BeL2 arbiter",
                "Minimum 3 confirmations required for collateral verification"
              ]
            },
            minting: {
              title: "4.2 BTCD Minting and Redemption",
              items: [
                "BTCD tokens minted 1:1 against Bitcoin collateral value",
                "90-day loan terms with algorithmic options hedging",
                "Redemption requires principal plus interest payment",
                "Early redemption permitted subject to terms"
              ]
            },
            arbitration: {
              title: "4.3 BeL2 Arbitration Network", 
              items: [
                "Independent arbiters from Elastos network",
                "Dispute resolution for borrower-issuer disagreements",
                "Economic incentives ensure honest behavior",
                "Arbiters stake ELA tokens as collateral"
              ]
            }
          },
          userObligations: {
            title: "5. User Obligations and Restrictions",
            prohibited: {
              title: "5.1 Prohibited Activities",
              intro: "You agree not to:",
              items: [
                "Use the platform for money laundering or terrorist financing",
                "Provide false or misleading information",
                "Attempt to manipulate platform operations or pricing",
                "Interfere with platform security or other users' access",
                "Use the platform for any illegal activities",
                "Circumvent arbitration or dispute resolution processes"
              ]
            },
            security: {
              title: "5.2 Security Responsibilities",
              items: [
                "Maintain secure custody of private keys and wallet access",
                "Verify all transaction details before confirmation",
                "Report security incidents promptly",
                "Use supported wallets and software versions"
              ]
            },
            loan: {
              title: "5.3 Loan Obligations",
              items: [
                "Repay principal plus interest within 90-day term",
                "Monitor collateral ratios and margin requirements",
                "Understand liquidation triggers and timelock mechanisms",
                "Participate in good faith in any dispute resolution"
              ]
            }
          },
          fees: {
            title: "6. Fees and Payments",
            intro: "Platform fees include:",
            items: [
              "Interest Rate: 4% annual (dynamically adjusted for market conditions)",
              "Minting Fee: 0.2% of BTCD amount",
              "Options Hedging: Covered by protocol through dynamic rate adjustments",
              "Arbitration Fees: Paid to BeL2 arbiters for dispute resolution",
              "Network Fees: Bitcoin and Elastos transaction costs"
            ],
            disclosure: "All fees are clearly disclosed before transaction execution. Fee structures may be updated with advance notice."
          },
          riskDisclosure: {
            title: "7. Risk Disclosure",
            intro: "Cryptocurrency and DeFi activities involve significant risks. By using BTCD, you acknowledge:",
            items: [
              "Bitcoin and cryptocurrency prices are highly volatile",
              "Smart contract and technical risks may result in loss of funds",
              "Liquidation may occur if loan terms are not met",
              "Blockchain transactions are irreversible",
              "Regulatory changes may affect platform operations",
              "Options hedging does not guarantee against all losses"
            ],
            reference: "For complete risk information, see our Risk Disclaimer."
          },
          disputeResolution: {
            title: "8. Dispute Resolution",
            bel2: {
              title: "8.1 BeL2 Arbitration",
              intro: "Platform-related disputes are resolved through the BeL2 arbitration system:",
              items: [
                "Independent arbiters selected from Elastos network",
                "Economic incentives ensure fair resolution",
                "Decisions are binding on platform participants",
                "Appeals process available for significant disputes"
              ]
            },
            legal: {
              title: "8.2 Legal Jurisdiction",
              content: "For disputes not resolved through BeL2 arbitration, these Terms are governed by UAE law, and any legal proceedings shall be conducted in Dubai courts."
            }
          },
          liability: {
            title: "9. Limitations of Liability",
            intro: "To the maximum extent permitted by UAE law:",
            items: [
              "Creek Business Center's liability is limited to direct damages only",
              "No liability for indirect, consequential, or speculative damages",
              "Maximum liability shall not exceed fees paid by user in preceding 12 months",
              "No warranty that platform will be uninterrupted or error-free",
              "Users assume risks inherent in cryptocurrency and DeFi activities"
            ]
          },
          modifications: {
            title: "10. Platform Modifications",
            intro: "We reserve the right to:",
            items: [
              "Modify platform features and functionality",
              "Update fee structures with 30 days notice",
              "Suspend or terminate services for maintenance or security",
              "Implement additional security or compliance measures",
              "Update these Terms with advance notice"
            ]
          },
          termination: {
            title: "11. Termination",
            user: {
              title: "11.1 User Termination",
              content: "You may stop using the platform at any time, subject to fulfilling existing loan obligations and completing pending transactions."
            },
            platform: {
              title: "11.2 Platform Termination",
              content: "We may suspend or terminate access for violations of these Terms, illegal activities, or security concerns. Active positions will be handled according to established protocols."
            }
          },
          finalSections: {
            indemnification: {
              title: "12. Indemnification",
              content: "You agree to indemnify and hold harmless Creek Business Center from any claims, losses, or damages arising from your use of the platform, violation of these Terms, or violation of applicable laws."
            },
            forceMajeure: {
              title: "13. Force Majeure",
              content: "Creek Business Center shall not be liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including blockchain network congestion, regulatory actions, or natural disasters."
            },
            severability: {
              title: "14. Severability",
              content: "If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall continue in full force and effect."
            },
            changes: {
              title: "15. Changes to Terms",
              content: "We may update these Terms periodically. Material changes will be announced through the platform with at least 30 days notice. Continued use after changes constitutes acceptance of updated Terms."
            }
          },
          footer: {
            copyright: "© 2025 Creek Business Center. All rights reserved.",
            license: "Licensed in Dubai, United Arab Emirates (Trade License No. 1293230)"
          }
        }
      },
      riskDisclaimer: {
        title: "Risk Disclaimer",
        effectiveDate: "Effective Date: August 1, 2025",
        lastUpdated: "Last Updated: August 1, 2025",
        sections: {
          criticalWarning: {
            title: "Critical Risk Warning",
            content: "CRYPTOCURRENCY AND DEFI INVESTMENTS CARRY EXTREME RISK OF LOSS.\n\nThe BTCD platform involves highly risky activities including cryptocurrency lending, collateralization, and exposure to volatile digital assets. You may lose some or all of your funds. Only invest what you can afford to lose completely."
          },
          aboutDisclaimer: {
            title: "About This Risk Disclaimer",
            content: "This Risk Disclaimer is issued by Creek Business Center (Trade License No. 1293230), a business entity registered in Dubai, United Arab Emirates, operator of the BTCD platform.\n\nBy using the BTCD platform, you acknowledge that you have read, understood, and accepted all risks outlined in this document. This disclaimer does not constitute financial, investment, or legal advice."
          },
          cryptoRisks: {
            title: "1. Cryptocurrency and Digital Asset Risks",
            volatility: {
              title: "1.1 Extreme Price Volatility",
              intro: "Bitcoin and other cryptocurrencies are extremely volatile and can experience:",
              items: [
                "Daily price swings of 10% or more",
                "Sudden and significant crashes (50%+ losses)",
                "Extended bear markets lasting months or years",
                "Market manipulation by large holders (\"whales\")",
                "Complete loss of value in extreme scenarios"
              ]
            },
            regulatory: {
              title: "1.2 Regulatory and Legal Risks",
              items: [
                "Governments may ban or restrict cryptocurrency activities",
                "New regulations may impact platform operations",
                "Tax treatment may change unexpectedly",
                "Cross-border transactions may face additional restrictions",
                "Legal status varies significantly between jurisdictions"
              ]
            },
            market: {
              title: "1.3 Market and Liquidity Risks",
              items: [
                "Limited liquidity during market stress",
                "Wide bid-ask spreads in volatile conditions",
                "Potential inability to exit positions quickly",
                "Market closure or suspension risks",
                "Price manipulation in smaller markets"
              ]
            }
          },
          platformRisks: {
            title: "2. BTCD Platform-Specific Risks",
            liquidation: {
              title: "2.1 Liquidation Risks",
              intro: "Critical: While BTCD's options hedging eliminates price liquidations during the 90-day term, you still face liquidation risks:",
              items: [
                "Maturity Liquidation: Automatic liquidation if loan not repaid by term end",
                "Default Risk: Loss of collateral if unable to meet repayment obligations",
                "Options Protection Limits: Protection may not cover extreme market conditions",
                "System Failure: Technical failures could impact liquidation protection"
              ]
            },
            custody: {
              title: "2.2 Multi-Signature and Custody Risks",
              items: [
                "Key Loss: Losing access to your private keys means permanent fund loss",
                "Multi-Sig Complexity: Errors in multi-signature operations can lock funds",
                "Arbiter Risk: BeL2 arbiters may make unfavorable decisions",
                "Technical Errors: Mistakes in Bitcoin script creation or execution",
                "Counterparty Risk: Issuer or arbiter may become unavailable or hostile"
              ]
            },
            bel2: {
              title: "2.3 BeL2 Arbitration Risks",
              items: [
                "Arbiters may make biased or incorrect decisions",
                "Arbitration process may be slow during disputes",
                "Economic incentives may not prevent collusion",
                "Appeals process may not reverse unfair decisions",
                "Arbiters may lose their staked ELA, affecting dispute resolution"
              ]
            },
            gsm: {
              title: "2.4 GSM Dual-Collateral Risks",
              items: [
                "ELA Token Risk: ELA tokens may lose value or become illiquid",
                "Correlation Risk: Bitcoin and ELA may decline simultaneously",
                "Cross-Chain Risk: Elastos Smart Chain technical failures",
                "Complexity Risk: More complex systems have more failure points"
              ]
            }
          },
          technicalRisks: {
            title: "3. Technical and Operational Risks",
            smartContract: {
              title: "3.1 Smart Contract and Code Risks",
              items: [
                "Bugs and Vulnerabilities: Code errors may result in permanent fund loss",
                "Hacking and Exploits: Malicious attacks on smart contracts",
                "Audit Limitations: Security audits cannot guarantee bug-free code",
                "Upgrade Risks: Platform updates may introduce new vulnerabilities",
                "Oracle Failures: Price feed manipulations or failures"
              ]
            },
            blockchain: {
              title: "3.2 Blockchain and Network Risks",
              items: [
                "Bitcoin Network: Congestion, high fees, or consensus failures",
                "Elastos Network: Technical issues or reduced hash power",
                "Fork Risks: Blockchain splits may affect operations",
                "51% Attacks: Network security compromises",
                "Transaction Failures: Failed or delayed blockchain transactions"
              ]
            },
            operational: {
              title: "3.3 Platform Operational Risks",
              items: [
                "Server downtime or system maintenance issues",
                "Database corruption or data loss",
                "Cybersecurity breaches or data theft",
                "Human error in platform operations",
                "Third-party service provider failures"
              ]
            }
          },
          financialRisks: {
            title: "4. Financial and Economic Risks",
            interestRate: {
              title: "4.1 Interest Rate and Fee Risks",
              items: [
                "Interest rates may increase during your loan term",
                "Additional fees may be introduced",
                "Network transaction fees may spike unexpectedly",
                "Options hedging costs may exceed projections"
              ]
            },
            stablecoin: {
              title: "4.2 Stablecoin and Peg Risks",
              items: [
                "Depeg Risk: BTCD may trade below $1.00",
                "Liquidity Risk: Difficulty selling BTCD in secondary markets",
                "Redemption Risk: Delays or failures in BTCD redemption",
                "Market Confidence: Loss of confidence may affect BTCD value"
              ]
            },
            macroeconomic: {
              title: "4.3 Macroeconomic Risks",
              items: [
                "Global financial crises affecting cryptocurrency markets",
                "Central bank policies impacting digital assets",
                "Economic sanctions affecting cross-border transactions",
                "Currency devaluation in your local jurisdiction"
              ]
            }
          },
          businessRisks: {
            title: "5. Business and Regulatory Risks",
            business: {
              title: "5.1 Platform Business Risks",
              items: [
                "Business Failure: Creek Business Center may cease operations",
                "Insolvency: Financial difficulties may affect platform operations",
                "Key Personnel: Loss of critical team members",
                "Funding: Inability to secure necessary operational funding",
                "Competition: Superior competing platforms may emerge"
              ]
            },
            regulatory: {
              title: "5.2 Regulatory and Compliance Risks",
              items: [
                "UAE regulatory changes affecting cryptocurrency businesses",
                "International sanctions or restrictions",
                "Tax law changes in UAE or your jurisdiction",
                "Compliance failures resulting in penalties or closure",
                "License revocation or regulatory action"
              ]
            }
          },
          userRisks: {
            title: "6. User-Specific Risks",
            security: {
              title: "6.1 Personal Security Risks",
              items: [
                "Private Key Security: Loss, theft, or compromise of private keys",
                "Phishing Attacks: Fraudulent websites or communications",
                "Device Security: Malware or compromise of your devices",
                "Social Engineering: Manipulation to reveal sensitive information",
                "Physical Security: Theft or coercion related to cryptocurrency holdings"
              ]
            },
            knowledge: {
              title: "6.2 Knowledge and Experience Risks",
              items: [
                "Insufficient understanding of cryptocurrency and DeFi concepts",
                "Mistakes in transaction execution or wallet operations",
                "Poor risk management and position sizing",
                "Emotional decision-making during market volatility",
                "Failure to understand platform mechanics and risks"
              ]
            },
            legal: {
              title: "6.3 Legal and Tax Risks",
              items: [
                "Cryptocurrency activities may be illegal in your jurisdiction",
                "Unexpected tax liabilities on gains or transactions",
                "Inability to access legal remedies for losses",
                "Compliance failures with local reporting requirements"
              ]
            }
          },
          mitigation: {
            title: "Risk Mitigation Measures",
            intro: "While BTCD implements several risk mitigation measures, these do not eliminate all risks:",
            items: [
              "Options Hedging: Algorithmic protection against price liquidations (90-day term only)",
              "Multi-Signature Security: 2-of-3 architecture prevents single points of failure",
              "BeL2 Arbitration: Independent dispute resolution with economic incentives",
              "Progressive Decentralization: Reducing platform centralization over time",
              "Security Audits: Regular code reviews and vulnerability assessments",
              "Regulatory Compliance: Operating under Dubai business license"
            ],
            warning: "Important: These measures significantly reduce but do not eliminate risks. Users must still exercise extreme caution and proper risk management."
          },
          regulatoryStatus: {
            title: "7. Regulatory and Legal Status",
            intro: "Important Legal Information:",
            items: [
              "BTCD and related services are not regulated financial products in most jurisdictions",
              "No government agency has reviewed or approved this platform",
              "Users have limited legal protections compared to traditional financial services",
              "Creek Business Center operates under UAE commercial law, not financial services regulation",
              "Regulatory status may change, potentially affecting platform operations"
            ]
          },
          professionalAdvice: {
            title: "Professional Advice Recommended",
            intro: "Before using the BTCD platform, we strongly recommend consulting with qualified professionals:",
            items: [
              "Financial Advisor: To assess suitability for your financial situation",
              "Tax Professional: To understand tax implications in your jurisdiction",
              "Legal Counsel: To review legal and regulatory compliance",
              "Risk Management Expert: To develop appropriate risk management strategies"
            ]
          },
          finalAcknowledgment: {
            title: "Final Risk Acknowledgment",
            intro: "By using the BTCD platform, you acknowledge and accept that:",
            items: [
              "You have read and understood all risks outlined in this disclaimer",
              "You may lose some or all of your funds",
              "You are using the platform at your own risk",
              "You have sufficient knowledge and experience with cryptocurrency and DeFi",
              "You can afford to lose your entire investment",
              "You will not hold Creek Business Center liable for any losses",
              "You understand this is not financial advice"
            ],
            warning: "If you do not accept these risks, do not use the BTCD platform."
          },
          contact: {
            title: "Contact Information",
            address: "Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE",
            note: "We cannot provide financial, investment, or legal advice. Please consult qualified professionals."
          }
        }
      }
    },

    // Final CTA
    finalCta: {
      title: "Leverage your BTC",
      titleSpan: "today",
      subtitle: "Ready to unlock your Bitcoin?",
      description: "Join the revolution. Put your Bitcoin to work without selling it.",
      launchApp: "Launch App",
      disclaimer: "Launching August 2025 • Audited by leading security firms"
    },

    // Footer
    footer: {
      tagline: "The first Bitcoin-native stablecoin",
      description: "The world's first fully Bitcoin-backed stablecoin. Developed by NBW Labs and secured by Bitcoin's own mining network.",
      descriptionParts: {
        beforeLink: "The world's first fully Bitcoin-backed stablecoin. Developed by ",
        linkText: "NBW Labs",
        afterLink: " and secured by Bitcoin's own mining network."
      },
      product: {
        title: "Product",
        howItWorks: "How it Works",
        protocol: "Why BTCD",
        liquidations: "Earn Yield",
        documentation: "Documentation"
      },
            company: {
        title: "Company", 
        about: "About Creek Business Center"
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        disclaimer: "Risk Disclaimer"
      },
      copyright: "© 2025 The Creek Business Center. All rights reserved.",
      businessAddress: "Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, United Arab Emirates",
      businessAddressArabic: "مكتب G-01-MEZZ، السبخة، مركز العمال ذي كريك، دبي، الإمارات العربية المتحدة"
    }
  },

  zh: {
    // Navigation - 导航
    nav: {
      howItWorks: "工作原理",
      protocol: "为什么选择BTCD",
      liquidations: "赚取收益", 
      faq: "常见问题",
      about: "关于我们",
      launchApp: "启动应用"
    },

    // Hero Section - 主页
    hero: {
      watchIntro: "BTC的新篇章",
      headline: "终于可以让你的",
      bitcoin: "比特币",
      headlineEnd: "发挥作用而无需出售",
      subtitle: "唯一在借贷期间零价格清算风险的比特币支持稳定币。释放您的BTC流动性——无包装代币，无桥接，最大化比特币原生安全性。",
      mintToday: "立即铸造",
      securedBy: "由领先的比特币基础设施提供商保障"
    },

    // How BTCD Works - BTCD工作原理
    howWorks: {
      badge: "突破性创新",
      title: "BTCD 工作原理",
      subtitle: "通过密码学设计实现最小信任要求的第一个比特币原生稳定币。这就是我们的系统如何工作。",
      
      step1: {
        title: "安全锁定你的比特币",
        description: "通过选择金额和期限创建你的BTCD订单，然后从我们的网络中选择一个独立仲裁者。你的比特币进入一个安全的P2WSH多重签名脚本，涉及三方：你、发行方和你选择的仲裁者。",
        points: [
          "创建自定义金额和期限的订单",
          "从订单列表中选择你偏好的仲裁者",
          "在比特币主网的P2WSH脚本中锁定BTC"
        ]
      },

      step2: {
        title: "抵押品验证与跨链",
        description: "在你的比特币交易在区块链上收到3次确认后，提交你的抵押品的加密证明。这验证你的比特币已正确锁定并与智能合约安全通信。",
        points: [
          "等待3次比特币确认",
          "提交抵押品的加密证明",
          "安全验证启用跨链功能"
        ]
      },

      step3: {
        title: "铸造和使用您的BTCD",
        description: "验证完成后领取你的BTCD稳定币。你的BTCD由你的安全比特币1:1支持，可以在任何地方使用——DeFi、交易所或支付。",
        points: [
          "成功验证后领取BTCD",
          "随处使用——DeFi、CEX、支付",
          "始终由你锁定的比特币1:1支持"
        ]
      },

      step4: {
        title: "智能风险管理",
        description: "我们的智能仪表板实时跟踪你的抵押品健康状况。准备好时，用BTCD偿还本金加利息来解锁你的比特币。期权对冲在整个贷款期间保护你免受清算。",
        points: [
          "偿还本金+利息以解锁BTC",
          "期权对冲消除清算风险",
          "实时监控你的头寸"
        ]
      }
    },

    // Protocol Section - 协议部分
    protocol: {
      badge: "技术卓越",
      title: "为什么BTCD与众不同",
      subtitle: "由哈佛校友构建，由比特币自己的挖矿网络保障。这不仅仅是另一个稳定币——这是比特币金融的未来。",
      
      bitcoinNative: {
        title: "2-3多重签名安全性",
        description: "BTCD采用行业标准的2-3多重签名P2WSH脚本，涉及三个独立方：借款人、发行方和BeL2仲裁者。这种架构确保任何单一实体都无法控制用户资金，同时保持比特币原生安全性。双重抵押支持ELA代币，将资本效率提升至65% LTV。",
        smartContractsTitle: "多重签名P2WSH架构",
        codeComment: "// 去中心化2-3多重签名安全",
        codeDescription: "三重签名安全确保任何单方无法控制您的比特币：您控制一个密钥，发行方持有另一个，独立的BeL2仲裁者提供无法操控的争议解决。多重加密时间锁确保您始终可以恢复您的比特币。"
      },

      btcdToken: {
        title: "BTCD稳定币",
        description: "革命性的比特币支持稳定币，内置波动性保护。每个BTCD都由锁定在可验证脚本中的比特币支持，通过算法期权对冲保护，消除清算风险。",
        backingAsset: "支持资产",
        bitcoin100: "100% 比特币 + 期权保护",
        collateralRatio: "资本效率",
        ratioRequired: "高达65% LTV",
        liquidation: "清算风险",
        gracePeriod: "通过看跌期权消除",
        comparison: {
          title: "对比其他稳定币",
          btcd: "BTCD",
          others: "其他",
          custody: "托管",
          btcdCustody: "比特币原生多重签名",
          othersCustody: "包装/托管",
          backing: "保护",
          btcdBacking: "期权对冲",
          othersBacking: "无",
          grace: "清算风险",
          btcdGrace: "已消除",
          othersGrace: "高"
        }
      },



      elastos: {
        title: "在Elastos上的渐进式去中心化",
        description: "我们在Elastos SmartWeb上构建了BTCD——唯一由比特币算力保护的区块链。BTCD遵循结构化的去中心化路线图，目前采用单一发行者模式，正在过渡到完全分布式的BPOS节点网络，同时保持安全保证。",
        codeDescription: "BeL2仲裁者通过合并挖矿继承超过50%的比特币算力。经济质押激励和反合谋措施确保争议解决中的诚实行为。",
        stakeElaButton: "质押ELA代币",
        hashpowerLabel: "比特币算力",
        securityLabel: "渐进式去中心化",
        mergedLabel: "BeL2仲裁网络",
        poolsLabel: "主要矿池",
        annualSecurity: "年度挖矿安全保障",
        features: [
          {
            title: "100% 透明",
            description: "支持BTCD的每个比特币都可以在链上验证。你可以自己审计的实时储备证明。"
          },
          {
            title: "比特币级安全性",
            description: "由保障比特币的同一批矿工保护。加密货币中最经过实战检验的安全模型。"
          },
          {
            title: "自我维持",
            description: "为长期稳定而设计。挖矿奖励和协议费用创造可持续的经济模式。"
          },
          {
            title: "密码学保护",
            description: "2-3多重签名安全性，具有多重故障安全恢复机制。"
          }
        ]
      },

      bottomBanner: {
        title: "第一个比特币原生稳定币已经到来",
        description: "加入这场革命，通过渐进式去中心化和比特币原生安全性，将比特币2万亿美元的市值投入DeFi工作。"
      }
    },

    // About Section - 关于我们
    about: {
      badge: "公司信息",
      title: "关于BTCD",
      subtitle: "BTCD由Creek Business Center开发和发行，这是一家专门从事数字资产基础设施的迪拜持牌实体。",
      
      company: {
        title: "Creek Business Center",
        subtitle: "持牌数字资产基础设施提供商",
        description: "Creek Business Center是一家在迪拜注册的商业实体，专门从事数字资产基础设施和区块链技术解决方案。",
        details: {
          license: "贸易执照号：1293230",
          jurisdiction: "阿拉伯联合酋长国迪拜", 
          regulator: "迪拜经济和旅游部",
          businessType: "独资企业",
          focus: "数字资产基础设施和区块链解决方案",
          licenseLink: "查看营业执照"
        }
      },
      

      
      transparency: {
        title: "监管透明度",
        description: "我们相信在业务结构和监管合规方面保持完全透明。",
        points: [
          "在加密货币友好的迪拜司法管辖区的持牌实体",
          "明确的商业注册和监管合规", 
          "建立在经过验证的Elastos SmartWeb基础设施上",
          "具有机构支持的渐进式去中心化路线图"
        ]
      }
    },

    // Liquidations - 清算
    liquidations: {
      badge: "赚取奖励",
      title: "作为BTCD仲裁者赚取收益",
      subtitle: "参与协议安全性的同时赚取比特币奖励。质押ELA成为BeL2仲裁者提供争议解决并从比特币交易中赚取BTC费用。",
      detailsButton: "详情即将发布",
      
      howItWorks: "如何赚取收益",
      purchaseDesc: "质押ELA代币进行争议解决，并在金库需要重新平衡时购买折扣比特币（2-8%折扣）。",
      earnDesc: "多重收入流：争议费用、折扣比特币购买和协议安全奖励。",
      pegDesc: "帮助维护BTCD美元锚定和协议去中心化",
      sustainDesc: "通过经济安全为协议可持续性做贡献"
    },

    // Testimonials - 推荐
    testimonials: {
      badge: "推荐",
      title: "比特币领袖的评价",
      subtitle: "比特币和加密货币领域的领军人物对BTCD的评价"
    },

    // FAQ - 常见问题
    faq: {
      badge: "常见问题",
      title: "我们有答案",
      subtitle: "关于BTCD你需要知道的一切",
      
      categories: {
        basics: "基础知识",
        technology: "技术", 
        riskManagement: "风险管理",
        security: "安全性",
        launch: "发布",
        usage: "DeFi和费用"
      },

      items: [
        {
          question: "什么是BTCD？",
          answer: "BTCD是革命性的比特币支持稳定币，内置波动性保护。每个BTCD都由锁定在可验证脚本中的比特币支持，通过算法期权对冲保护，在90天借贷期间消除价格清算。",
          category: "基础知识"
        },
        {
          question: "BTCD与包装比特币有什么不同？",
          answer: "BTCD使用比特币原生的2-3多重签名P2WSH脚本——您的比特币永远不会离开比特币区块链。与包装比特币的托管模式不同，BTCD的三重签名安全确保没有单一实体控制您的资金，同时提供内置波动性保护。",
          category: "技术"
        },
        {
          question: "什么是期权对冲，它如何保护我？",
          answer: "BTCD使用算法期权对冲和保护性看跌期权在借贷期间消除价格清算。协议自动购买看跌期权，在整个90天期间保护免受市场下跌影响。与传统DeFi不同，在此期间您不会被追加保证金。",
          category: "风险管理"
        },
        {
          question: "我如何知道我的比特币是安全的？",
          answer: "您的比特币受到2-3多重签名系统保护，具有多种安全场景：正常还款需要借款人+发行方合作，争议由独立BeL2仲裁者解决，贷款违约触发加密时间锁，延长时间锁确保即使发行方失败您也能始终恢复比特币。",
          category: "安全性"
        },
        {
          question: "什么是GSM（金银双重抵押）系统？",
          answer: "GSM允许您同时使用比特币（金）和ELA代币（银）作为抵押品，将资本效率提升至65% LTV。您的比特币保留在比特币原生脚本中，而ELA代币存储在独立智能合约中，最大化您的借贷能力。",
          category: "技术"
        },
        {
          question: "如何创建BTCD贷款？",
          answer: "创建订单并选择所需金额和期限，从网络中选择仲裁者，将比特币锁定在P2WSH脚本中，等待3次确认，提交证明，然后领取您的BTCD。整个过程透明且比特币原生。",
          category: "基础知识"
        },
        {
          question: "我会被清算吗？",
          answer: "90天期间内无价格清算！BTCD的算法期权对冲完全消除追加保证金风险。与其他在市场下跌时清算您抵押品的协议不同，BTCD的看跌期权在整个借贷期间内无论价格如何变动都能保护您的比特币。但是，如果到期未还款，将发生自动清算。",
          category: "风险管理"
        },
        {
          question: "我的最大借贷能力是多少？",
          answer: "仅使用比特币抵押，您可以借贷高达60% LTV。使用GSM双重抵押（比特币+ELA代币），您可以达到65% LTV，比传统借贷协议显著更高，同时保持全面保护。",
          category: "风险管理"
        },
        {
          question: "使用BTCD的费用是多少？",
          answer: "BTCD具有透明定价：4%年利率（根据波动性动态调整），0.2%铸造费，以及Elastos智能链上的最低交易费。期权对冲成本通过协议动态利率调整覆盖。",
          category: "DeFi和费用"
        },
        {
          question: "价格清算和到期清算有什么区别？",
          answer: "BTCD通过期权对冲在90天期间内消除价格清算（追加保证金）——您的比特币不会因价格变动而被清算。但是，如果您在90天期限结束时未偿还贷款，则会发生到期清算。这与传统DeFi根本不同，传统DeFi中价格下跌时您随时可能失去抵押品。",
          category: "风险管理"
        },
        {
          question: "我可以在DeFi协议中使用BTCD吗？",
          answer: "当然可以！BTCD完全兼容EVM，与所有主要DeFi协议无缝配合。在DEX上交易，提供流动性，借贷或用于收益农业——所有这些都受到期权对冲保护您的底层比特币。",
          category: "DeFi和费用"
        },
        {
          question: "谁是BTCD的幕后团队？",
          answer: "BTCD由Creek Business Center发行，这是一个迪拜持牌实体（贸易执照号1293230），专门从事数字资产基础设施。该协议建立在Elastos SmartWeb基础设施上，并遵循渐进式去中心化路线图。",
          category: "基础知识"
        },
        {
          question: "BTCD什么时候发布？",
          answer: "BTCD将于2025年8月在Elastos智能链上发布，并计划进一步扩展。该协议遵循渐进式去中心化模式，从单一发行者开始，过渡到分布式BPOS节点网络，同时保持安全保证。",
          category: "基础知识"
        },
        {
          question: "有哪些不同的安全场景？",
          answer: "BTCD通过多种场景提供保护：正常还款（需要借款人+发行方签名），争议解决（BeL2仲裁者提供独立验证），贷款违约（加密时间锁启用程序化清算），以及发行方故障（延长时间锁确保借款人始终可以恢复比特币）。",
          category: "安全性"
        }
      ],
      
      contact: {
        title: "还有问题？",
        description: "在X上联系我们，告诉我们你需要什么。",
        button: "在X上询问我们"
      }
    },

    // Legal Pages
    legal: {
      privacy: {
        title: "隐私政策",
        effectiveDate: "生效日期：2025年8月1日",
        lastUpdated: "最后更新：2025年8月1日",
        sections: {
          aboutUs: {
            title: "1. 关于我们",
            content: "本隐私政策适用于由Creek Business Center运营的BTCD平台，这是一家在阿拉伯联合酋长国迪拜（贸易执照号1293230）注册的企业实体。",
            contact: "联系方式："
          },
          informationCollection: {
            title: "2. 我们收集的信息",
            personalInfo: {
              title: "2.1 个人信息",
              intro: "当您使用BTCD平台时，我们可能会收集：",
              items: [
                "平台访问和通信的账户信息",
                "比特币交易和抵押品管理的钱包地址", 
                "BTCD铸造、赎回和仲裁相关的交易数据",
                "根据阿联酋法规要求的身份验证信息"
              ]
            },
            technicalInfo: {
              title: "2.2 技术信息",
              intro: "我们自动收集技术数据，包括：",
              items: [
                "为安全性和优化收集的设备和浏览器信息",
                "为合规和反欺诈目的收集的IP地址和位置数据",
                "平台使用模式和性能指标",
                "区块链交易记录和智能合约交互"
              ]
            }
          },
          dataUsage: {
            title: "3. 我们如何使用您的信息",
            intro: "我们使用收集到的信息：",
            items: [
              "促进BTCD铸造、赎回和仲裁流程",
              "确保平台安全和防止欺诈活动",
              "遵守阿联酋法规要求和国际标准",
              "改进平台功能和用户体验",
              "传达重要更新和安全通知"
            ]
          },
          dataSharing: {
            title: "4. 信息共享和披露",
            intro: "我们可能会共享您的信息：",
            items: [
              "与区块链网络进行交易验证",
              "根据阿联酋法律要求向监管机构披露",
              "与协助平台运营的服务提供商共享",
              "在法律要求或保护我们的权利时做出回应"
            ],
            noSale: "我们永远不会向第三方出售您的个人信息。"
          },
          userRights: {
            title: "5. 您的权利和选择",
            intro: "根据阿联酋数据保护法律，您有权：",
            items: [
              "访问和审查您的个人资料",
              "请求更正不准确的数据",
              "请求删除您的账户及相关数据",
              "反对某些处理活动",
              "接收可移植格式的数据副本"
            ]
          },
          security: {
            title: "6. 数据安全",
            content: "我们实施行业标准的加密、访问控制和定期安全审计。然而，没有任何系统是完全安全的，我们无法保证绝对安全。"
          },
          updates: {
            title: "7. 政策更新",
            content: "我们可能会定期更新本隐私政策，以反映我们的实践、技术或法律要求的变化。我们将在平台上通知您任何重大变更。您在变更后继续使用BTCD平台即表示您接受更新后的政策。"
          },
          contact: {
            title: "8. 联系我们",
            address: "Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE",
            responseTime: "我们将在30天内响应隐私请求"
          }
        }
      },
      terms: {
        title: "服务条款",
        effectiveDate: "生效日期：2025年8月1日", 
        lastUpdated: "最后更新：2025年8月1日",
        sections: {
          importantNotice: {
            title: "重要通知",
            content: "通过访问或使用BTCD平台，您同意受这些服务条款的约束。如果您不同意这些条款，请勿使用该平台。这些条款构成您与Creek Business Center之间的具有法律约束力的协议。"
          },
          aboutUs: {
            title: "1. 关于我们",
            content: "这些服务条款适用于由Creek Business Center运营的BTCD平台，这是一家在阿拉伯联合酋长国迪拜（贸易执照号1293230）注册的企业实体。"
          },
          platform: {
            title: "2. 平台描述", 
            content: "BTCD 是一个利用多重签名安全性和 BeL2 仲裁机制的比特币支持稳定币平台，用于安全、非清算的比特币支持借贷。"
          },
          eligibility: {
            title: "3. 资格",
            content: "您必须年满 18 岁，并具有法律能力签订具有约束力的协议才能使用此平台。"
          },
          services: {
            title: "4. 平台服务",
            bitcoinCollateral: {
              title: "4.1 比特币抵押系统",
              items: [
                "用户在2-3多重签名P2WSH脚本中锁定比特币",
                "抵押品保留在比特币区块链上以确保最大安全性", 
                "多重签名涉及用户、发行方和BeL2仲裁者",
                "抵押品验证需要至少3次确认"
              ]
            },
            minting: {
              title: "4.2 BTCD铸造和赎回",
              items: [
                "BTCD代币按1:1比例铸造，与比特币抵押品价值相对应",
                "90天借贷期限，带算法期权对冲",
                "赎回需要支付本金加利息",
                "提前赎回需符合条款"
              ]
            },
            arbitration: {
              title: "4.3 BeL2仲裁网络", 
              items: [
                "来自Elastos网络的独立仲裁者",
                "解决借款方与发行方之间的争议",
                "经济激励确保诚实行为",
                "仲裁者质押ELA代币作为抵押品"
              ]
            }
          },
          userObligations: {
            title: "5. 用户义务和限制",
            prohibited: {
              title: "5.1 禁止活动",
              intro: "您同意不：",
              items: [
                "使用平台进行洗钱或恐怖主义融资",
                "提供虚假或误导性信息",
                "试图操纵平台运营或定价",
                "干扰平台安全或其他用户的访问权限",
                "将平台用于任何非法活动",
                "规避仲裁或争议解决程序"
              ]
            },
            security: {
              title: "5.2 安全责任",
              items: [
                "维护私钥和钱包访问的安全保管",
                "在确认前验证所有交易详情",
                "及时报告安全事件",
                "使用受支持的钱包和软件版本"
              ]
            },
            loan: {
              title: "5.3 借贷义务",
              items: [
                "在90天期限内偿还本金加利息",
                "监控抵押品比率和保证金要求",
                "了解清算触发器和时间锁定机制",
                "诚信参与任何争议解决"
              ]
            }
          },
          fees: {
            title: "6. 费用和付款",
            intro: "平台费用包括：",
            items: [
              "利率：4%年利率（根据市场条件动态调整）",
              "铸造费：BTCD金额的0.2%",
              "期权对冲：通过协议动态费率调整覆盖",
              "仲裁费：支付给BeL2仲裁者的争议解决费用",
              "网络费：比特币和Elastos交易成本"
            ],
            disclosure: "所有费用在交易执行前均有明确披露。费用结构可能会提前通知更新。"
          },
          riskDisclosure: {
            title: "7. 风险披露",
            intro: "加密货币和DeFi活动涉及重大风险。通过使用BTCD，您承认：",
            items: [
              "比特币和加密货币价格高度波动",
              "智能合约和技术风险可能导致资金损失",
              "如果不满足借贷条款可能发生清算",
              "区块链交易不可逆转",
              "监管变化可能影响平台运营",
              "期权对冲不能保证防范所有损失"
            ],
            reference: "有关完整的风险信息，请参阅我们的风险声明。"
          },
          disputeResolution: {
            title: "8. 争议解决",
            bel2: {
              title: "8.1 BeL2仲裁",
              intro: "平台相关争议通过BeL2仲裁系统解决：",
              items: [
                "从Elastos网络选择的独立仲裁者",
                "经济激励确保公平解决",
                "决定对平台参与者具有约束力",
                "重大争议可申请上诉程序"
              ]
            },
            legal: {
              title: "8.2 法律管辖权",
              content: "对于未通过BeL2仲裁解决的争议，这些条款受阿联酋法律管辖，任何法律程序应在迪拜法院进行。"
            }
          },
          liability: {
            title: "9. 责任限制",
            intro: "在阿联酋法律允许的最大范围内：",
            items: [
              "Creek Business Center的责任仅限于直接损害",
              "对间接、后果性或投机性损害不承担责任",
              "最大责任不应超过用户在前12个月支付的费用",
              "不保证平台将不间断或无错误",
              "用户承担加密货币和DeFi活动的固有风险"
            ]
          },
          modifications: {
            title: "10. 平台修改",
            intro: "我们保留以下权利：",
            items: [
              "修改平台功能和特性",
              "提前30天通知更新费用结构",
              "因维护或安全原因暂停或终止服务",
              "实施额外的安全或合规措施",
              "提前通知更新这些条款"
            ]
          },
          termination: {
            title: "11. 终止",
            user: {
              title: "11.1 用户终止",
              content: "您可以随时停止使用平台，但须履行现有借贷义务并完成待处理交易。"
            },
            platform: {
              title: "11.2 平台终止",
              content: "我们可能因违反这些条款、非法活动或安全问题而暂停或终止访问权限。活跃仓位将根据既定协议处理。"
            }
          },
          finalSections: {
            indemnification: {
              title: "12. 赔偿",
              content: "您同意赔偿并使Creek Business Center免受因您使用平台、违反这些条款或违反适用法律而产生的任何索赔、损失或损害。"
            },
            forceMajeure: {
              title: "13. 不可抗力",
              content: "Creek Business Center不对因超出我们合理控制范围的情况（包括区块链网络拥堵、监管行动或自然灾害）导致的延迟或履行失败承担责任。"
            },
            severability: {
              title: "14. 可分割性",
              content: "如果这些条款的任何条款被认定为无效或不可执行，其余条款应继续具有完全效力。"
            },
            changes: {
              title: "15. 条款变更",
              content: "我们可能会定期更新这些条款。重大变更将通过平台宣布，至少提前30天通知。变更后继续使用即构成接受更新条款。"
            }
          },
          contact: {
            title: "联系方式",
            address: "Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE",
            businessHours: "星期日 - 星期四，上午 9:00 - 下午 5:00 阿联酋标准时间"
          },
          footer: {
            copyright: "© 2025 Creek Business Center. 版权所有。",
            license: "在阿拉伯联合酋长国迪拜获得许可（贸易执照号1293230）"
          }
        }
      },
      riskDisclaimer: {
        title: "风险声明",
        effectiveDate: "生效日期：2025年8月1日",
        lastUpdated: "最后更新：2025年8月1日",
        sections: {
          criticalWarning: {
            title: "关键风险警告",
            content: "加密货币和DeFi投资涉及重大损失风险，并非所有投资者都适合。价格可能极其波动。\n\nBTCD平台涉及高度风险活动，包括加密货币借贷、抵押化以及对波动性数字资产的暴露。您可能会损失部分或全部资金。仅投资您能够承受完全损失的资金。"
          },
          aboutDisclaimer: {
            title: "关于此风险声明",
            content: "本风险声明由Creek Business Center（贸易执照号1293230）发布，这是一家在阿拉伯联合酋长国迪拜注册的企业实体，运营BTCD平台。\n\n通过使用BTCD平台，您承认已阅读、理解并接受本文件中列明的所有风险。此声明不构成财务、投资或法律建议。"
          },
          cryptoRisks: {
            title: "1. 加密货币和数字资产风险",
            volatility: {
              title: "1.1 极端价格波动",
              intro: "比特币和其他加密货币极其波动，可能会经历：",
              items: [
                "每日价格波动超过10%",
                "突然和显著的崩溃（50%+损失）",
                "持续数月或数年的熊市",
                "大型持有者（\"鲸鱼\"）的市场操纵",
                "极端情况下完全价值损失"
              ]
            },
            regulatory: {
              title: "1.2 监管和法律风险",
              items: [
                "政府可能会禁止或限制加密货币活动",
                "新法规可能会影响平台运营",
                "税收待遇可能出乎意料地改变",
                "跨境交易可能面临额外限制",
                "不同司法管辖区之间的法律地位差异显著"
              ]
            },
            market: {
              title: "1.3 市场和流动性风险",
              items: [
                "市场压力期间流动性有限",
                "波动性条件下宽买卖价差",
                "可能无法快速退出仓位",
                "市场关闭或暂停风险",
                "小型市场中的价格操纵"
              ]
            }
          },
          platformRisks: {
            title: "2. BTCD平台特定风险",
            liquidation: {
              title: "2.1 清算风险",
              intro: "关键：虽然BTCD的期权对冲在整个90天期间内消除了价格清算，您仍然面临清算风险：",
              items: [
                "到期清算：如果贷款未在到期日偿还，将自动清算",
                "违约风险：无法履行还款义务导致的抵押品损失",
                "期权保护限制：保护可能无法覆盖极端市场条件",
                "系统故障：技术故障可能影响清算保护"
              ]
            },
            custody: {
              title: "2.2 多重签名和托管风险",
              items: [
                "密钥丢失：丢失私钥意味着永久资金损失",
                "多重签名复杂性：多重签名操作中的错误可能导致资金锁定",
                "仲裁者风险：BeL2仲裁者可能做出不利决定",
                "技术错误：比特币脚本创建或执行中的错误",
                "对手方风险：发行方或仲裁者可能变得不可用或敌对"
              ]
            },
            bel2: {
              title: "2.3 BeL2仲裁风险",
              items: [
                "仲裁者可能做出有偏见或错误的决定",
                "争议期间仲裁过程可能缓慢",
                "经济激励可能无法防止串通",
                "上诉过程可能无法推翻不公平决定",
                "仲裁者可能失去其质押的ELA，影响争议解决"
              ]
            },
            gsm: {
              title: "2.4 GSM双重抵押风险",
              items: [
                "ELA代币风险：ELA代币可能失去价值或变得流动性不足",
                "相关性风险：比特币和ELA可能同时下跌",
                "跨链风险：Elastos智能链技术故障",
                "复杂性风险：更复杂的系统有更多故障点"
              ]
            }
          },
          technicalRisks: {
            title: "3. 技术和运营风险",
            smartContract: {
              title: "3.1 智能合约和代码风险",
              items: [
                "漏洞和弱点：代码错误可能导致永久资金损失",
                "黑客攻击和漏洞利用：对智能合约的恶意攻击",
                "审计局限性：安全审计无法保证代码无漏洞",
                "升级风险：平台更新可能引入新的漏洞",
                "预言机故障：价格馈送操纵或故障"
              ]
            },
            blockchain: {
              title: "3.2 区块链和网络风险",
              items: [
                "比特币网络：拥堵、高费用或共识故障",
                "Elastos网络：技术问题或哈希算力降低",
                "分叉风险：区块链分裂可能影响运营",
                "51%攻击：网络安全妥协",
                "交易失败：失败或延迟的区块链交易"
              ]
            },
            operational: {
              title: "3.3 平台运营风险",
              items: [
                "服务器停机或系统维护问题",
                "数据库损坏或数据丢失",
                "网络安全漏洞或数据盗窃",
                "平台运营中的人为错误",
                "第三方服务提供商故障"
              ]
            }
          },
          financialRisks: {
            title: "4. 金融和经济风险",
            interestRate: {
              title: "4.1 利率和费用风险",
              items: [
                "贷款期间利率可能增加",
                "可能引入额外费用",
                "网络交易费用可能意外飙升",
                "期权对冲成本可能超出预期"
              ]
            },
            stablecoin: {
              title: "4.2 稳定币和锚定风险",
              items: [
                "脱锚风险：BTCD可能低于1.00美元交易",
                "流动性风险：在二级市场上出售BTCD困难",
                "赎回风险：BTCD赎回中的延迟或失败",
                "市场信心：信心丧失可能影响BTCD价值"
              ]
            },
            macroeconomic: {
              title: "4.3 宏观经济风险",
              items: [
                "影响加密货币市场的全球金融危机",
                "影响数字资产的央行政策",
                "影响跨境交易的经济制裁",
                "您当地司法管辖区的货币贬值"
              ]
            }
          },
          businessRisks: {
            title: "5. 业务和监管风险",
            business: {
              title: "5.1 平台业务风险",
              items: [
                "业务失败：Creek Business Center可能停止运营",
                "破产：财务困难可能影响平台运营",
                "关键人员：失去关键团队成员",
                "资金：无法获得必要的运营资金",
                "竞争：可能出现更优秀的竞争平台"
              ]
            },
            regulatory: {
              title: "5.2 监管和合规风险",
              items: [
                "阿联酋影响加密货币业务的监管变化",
                "国际制裁或限制",
                "阿联酋或您管辖区的税法变化",
                "导致处罚或关闭的合规失败",
                "许可证撤销或监管行动"
              ]
            }
          },
          userRisks: {
            title: "6. 用户特定风险",
            security: {
              title: "6.1 个人安全风险",
              items: [
                "私钥安全：私钥的丢失、盗窃或泄露",
                "钓鱼攻击：欺诈性网站或通信",
                "设备安全：您设备的恶意软件或泄露",
                "社会工程：操纵以揭示敏感信息",
                "物理安全：与加密货币持有相关的盗窃或胁迫"
              ]
            },
            knowledge: {
              title: "6.2 知识和经验风险",
              items: [
                "对加密货币和DeFi概念理解不足",
                "交易执行或钱包操作中的错误",
                "糟糕的风险管理和仓位规模",
                "市场波动期间的情绪化决策",
                "未能理解平台机制和风险"
              ]
            },
            legal: {
              title: "6.3 法律和税务风险",
              items: [
                "加密货币活动在您的管辖区可能是非法的",
                "收益或交易的意外税务负债",
                "无法获得损失的法律救济",
                "当地报告要求的合规失败"
              ]
            }
          },
          mitigation: {
            title: "风险缓解措施",
            intro: "虽然BTCD实施了几项风险缓解措施，但这些并不能消除所有风险：",
            items: [
              "期权对冲：针对价格清算的算法保护（仅限90天期限）",
              "多重签名安全：2-3架构防止单点故障",
              "BeL2仲裁：具有经济激励的独立争议解决",
              "渐进式去中心化：随时间减少平台中心化",
              "安全审计：定期代码审查和漏洞评估",
              "监管合规：在迪拜商业许可下运营"
            ],
            warning: "重要：这些措施显著降低但不能消除风险。用户仍必须极其谨慎并进行适当的风险管理。"
          },
          regulatoryStatus: {
            title: "7. 监管和法律地位",
            intro: "重要法律信息：",
            items: [
              "BTCD和相关服务在大多数司法管辖区不是受监管的金融产品",
              "没有政府机构审查或批准这个平台",
              "与传统金融服务相比，用户的法律保护有限",
              "Creek Business Center在阿联酋商法下运营，而非金融服务法规",
              "监管地位可能改变，可能影响平台运营"
            ]
          },
          professionalAdvice: {
            title: "建议咨询专业人士",
            intro: "在使用BTCD平台之前，我们强烈建议咨询合格的专业人士：",
            items: [
              "财务顾问：评估您财务状况的适合性",
              "税务专业人士：了解您管辖区的税务影响",
              "法律顾问：审查法律和监管合规性",
              "风险管理专家：制定适当的风险管理策略"
            ]
          },
          finalAcknowledgment: {
            title: "最终风险确认",
            intro: "通过使用BTCD平台，您承认并接受：",
            items: [
              "您已阅读并理解本声明中概述的所有风险",
              "您可能会损失部分或全部资金",
              "您使用平台承担自己的风险",
              "您对加密货币和DeFi有足够的知识和经验",
              "您能够承受失去全部投资",
              "您不会让Creek Business Center对任何损失承担责任",
              "您理解这不是财务建议"
            ],
            warning: "如果您不接受这些风险，请勿使用BTCD平台。"
          },
          contact: {
            title: "联系方式",
            address: "Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, UAE",
            note: "我们无法提供财务、投资或法律建议。请咨询合格的专业人士。"
          }
        }
      }
    },

    // Final CTA - 最终行动号召
    finalCta: {
      title: "今天就利用你的BTC",
      titleSpan: "",
      subtitle: "准备好释放你的比特币了吗？",
      description: "加入革命。让你的比特币发挥作用而无需出售。",
      launchApp: "启动应用",
      disclaimer: "2025年8月启动 • 由领先安全公司审计"
    },

    // Footer - 页脚
    footer: {
      tagline: "第一个比特币原生稳定币",
      description: "世界上第一个完全由比特币支持的稳定币。由NBW Labs开发，由比特币自己的挖矿网络保障。",
      descriptionParts: {
        beforeLink: "世界上第一个完全由比特币支持的稳定币。由 ",
        linkText: "NBW Labs",
        afterLink: " 开发，由比特币自己的挖矿网络保障。"
      },
      product: {
        title: "产品",
        howItWorks: "工作原理",
        protocol: "为什么选择BTCD",
        liquidations: "赚取收益",
        documentation: "文档"
      },
      company: {
        title: "公司",
        about: "关于Creek Business Center"
      },
      legal: {
        title: "法律",
        privacy: "隐私政策",
        terms: "服务条款",
        disclaimer: "风险声明"
      },
      copyright: "© 2025 The Creek Business Center. 保留所有权利。",
      businessAddress: "Office G-01-MEZZ, Al Sabkha, The Creek Business Center, Dubai, United Arab Emirates",
      businessAddressArabic: "مكتب G-01-MEZZ، السبخة، مركز العمال ذي كريك، دبي، الإمارات العربية المتحدة"
    }
  }
}

export type Language = 'en' | 'zh'
export type TranslationKey = keyof typeof translations.en 