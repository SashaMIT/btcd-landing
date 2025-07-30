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
      watchIntro: "Revolutionary Design",
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
          btcdCustody: "Bitcoin-native multi-sig",
          othersCustody: "Wrapped/Custodial",
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
      subtitle: "Participate in protocol security while earning Bitcoin rewards. Stake ELA to become a BeL2 arbiter providing dispute resolution and earning fees from Bitcoin transactions.",
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
        description: "Connect with us in our Telegram community and let us know what you need.",
        button: "Ask us on Telegram"
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
      watchIntro: "革命性设计",
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
      subtitle: "参与协议安全性的同时赚取比特币奖励。质押ELA成为BeL2仲裁者提供争议解决并从比特币交易中赚取费用。",
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
        description: "在我们的Telegram社区中联系我们，告诉我们你需要什么。",
        button: "在Telegram上询问我们"
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