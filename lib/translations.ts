export const translations = {
  en: {
    // Navigation
    nav: {
      howItWorks: "How it works",
      protocol: "Protocol", 
      liquidations: "Liquidations",
      faq: "FAQ",
      about: "About",
      launchApp: "Launch App"
    },
    
    // Hero Section
    hero: {
      watchIntro: "Watch Intro Video",
      headline: "Finally, put your",
      bitcoin: "Bitcoin", 
      headlineEnd: "to work without selling it",
      subtitle: "The world's first fully Bitcoin-backed stablecoin. Unlock liquidity from your BTC—no wrapped tokens, no bridges, maximum Bitcoin-native security.",
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
        description: "Your Bitcoin goes into a secure multi-signature vault with three parties: you, the issuer, and an independent collateralized arbiter node. No single party can control your funds.",
        points: [
          "Multi-sig eliminates single points of control",
          "Arbiters stake equal collateral for aligned incentives", 
          "Multiple failsafe recovery mechanisms"
        ]
      },

      step2: {
        title: "Collateral Verification & Cross-Chain",
        description: "Cryptographic proofs verify your Bitcoin collateral and securely communicate with smart contracts to enable BTCD minting and stablecoin services.",
        points: [
          "Verifies Bitcoin is properly collateralized",
          "Secure messaging to EVM smart contracts",
          "Enables cross-chain stablecoin functionality"
        ]
      },

      step3: {
        title: "Mint & Use Your BTCD", 
        description: "Receive BTCD stablecoins backed 1:1 by your secured Bitcoin. Use your BTCD across DeFi while multiple recovery mechanisms ensure you can always reclaim your Bitcoin.",
        points: [
          "Instant liquidity from your Bitcoin",
          "Multiple failsafe recovery options",
          "Full DeFi compatibility maintained"
        ]
      },

      step4: {
        title: "Smart Risk Management",
        description: "Our intelligent dashboard tracks your collateral health in real-time. Unlike other protocols with sudden liquidations, BTCD gives you 90 days to manage your position if Bitcoin's price drops. You're always in control.",
        points: [
          "90-day grace period—no surprise liquidations",
          "Real-time health monitoring", 
          "Multiple ways to maintain your position"
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
        description: "BTCD employs industry-standard 2-of-3 multi-signature P2WSH scripts with three independent parties: borrower, issuer, and BeL2 arbiter. This architecture ensures no single entity can control user funds while maintaining Bitcoin-native security.",
        smartContractsTitle: "Multi-Sig P2WSH Architecture",
        codeComment: "// Decentralized 2-of-3 multi-signature security",
        codeDescription: "Your Bitcoin is secured by a three-party system: you control one key, the issuer holds another, and independent BeL2 arbiters provide dispute resolution. Multiple cryptographic timelocks ensure you can always recover your Bitcoin."
      },

      btcdToken: {
        title: "BTCD Stablecoin", 
        description: "The world's first fully Bitcoin-backed stablecoin. Every BTCD token is backed by real Bitcoin locked in verifiable locking scripts.",
        backingAsset: "Backing Asset",
        bitcoin100: "100% Bitcoin",
        collateralRatio: "Collateral Ratio", 
        ratioRequired: "135%+ Required",
        liquidation: "Liquidation",
        gracePeriod: "90-Day Grace Period",
        comparison: {
          title: "vs. Other Stablecoins",
          btcd: "BTCD",
          others: "Others",
          custody: "Custody",
          btcdCustody: "Non-custodial",
          othersCustody: "Custodial",
          backing: "Backing",
          btcdBacking: "100% Bitcoin",
          othersBacking: "USD/Fiat",
          grace: "Grace Period",
          btcdGrace: "90 days",
          othersGrace: "None"
        }
      },



      elastos: {
        title: "Progressive Decentralization on Elastos",
        description: "We built BTCD on the Elastos SmartWeb—the only blockchain secured by Bitcoin's hashpower. BTCD follows a structured decentralization roadmap, currently operating with a single issuer model transitioning to a fully distributed BPOS node network while maintaining security guarantees.",
        codeDescription: "BeL2 arbiters inherit over 50% of Bitcoin's hash power through merge mining. Economic staking incentives and anti-collusion measures ensure honest behavior in dispute resolution.",
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
      title: "Earn Yield as a BTCD Liquidator & Arbiter", 
      subtitle: "Participate in protocol security while earning Bitcoin rewards. Become a liquidator buying discounted Bitcoin, or stake ELA to become a BeL2 arbiter providing dispute resolution.",
      
      howItWorks: "How You Can Earn",
      purchaseDesc: "Liquidator: When a vault's collateral drops below 135% and the 90-day grace period expires, purchase Bitcoin at 2-8% discount to restore system health.",
      earnDesc: "Arbiter: Stake ELA tokens and earn fees for providing independent dispute resolution when borrowers and issuers disagree",
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
          answer: "BTCD is the world's first fully Bitcoin-backed stablecoin. Unlike other stablecoins backed by fiat or centralized assets, every BTCD token is backed by real Bitcoin locked in verifiable locking scripts on the Bitcoin blockchain.",
          category: "Basics"
        },
        {
          question: "How is BTCD different from wrapped Bitcoin?",
          answer: "Wrapped Bitcoin requires trust in custodians and bridges. BTCD uses Bitcoin's native locking scripts (P2WSH) directly on the Bitcoin blockchain. Your Bitcoin never leaves the Bitcoin network, ensuring maximum security and decentralization.",
          category: "Technology"
        },
        {
          question: "What happens if Bitcoin's price drops?",
          answer: "BTCD has a 90-day grace period system. If your vault's collateral ratio drops below 135%, you have 90 days to either add more Bitcoin or repay some BTCD to restore health. No sudden liquidations like other protocols.",
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
          question: "Who is behind BTCD?",
          answer: "BTCD is issued by Creek Business Center, a Dubai-licensed entity (Trade License No. 1293230) specializing in digital asset infrastructure. The protocol is built on Elastos SmartWeb infrastructure and follows a progressive decentralization roadmap.",
          category: "Launch"
        },
        {
          question: "When does BTCD launch?",
          answer: "BTCD launches in August 2025 on Elastos Smart Chain, with broader expansion planned. The protocol follows a progressive decentralization model, starting with a single issuer and transitioning to a distributed BPOS node network while maintaining security guarantees.",
          category: "Launch"
        },
        {
          question: "What is my liquidation price?",
          answer: "Your liquidation price depends on your collateral ratio. With a 135% minimum ratio, if you mint $1000 BTCD, your Bitcoin needs to stay above ~$1350 value. Our dashboard shows real-time liquidation prices and health ratios.",
          category: "Risk Management"
        },
        {
          question: "How can I avoid getting liquidated?",
          answer: "Monitor your vault health regularly, maintain a higher collateral ratio than the minimum 135%, add more Bitcoin when prices drop, or repay BTCD to improve your ratio. You have 90 days to respond to any liquidation warnings.",
          category: "Risk Management"
        },
        {
          question: "What are the transaction fees?",
          answer: "BTCD has minimal protocol fees: 0.5% annual stability fee, small minting/burning fees (~0.1%), and standard Bitcoin network fees for transactions. All fees are transparent and published.",
          category: "DeFi & Fees"
        },
        {
          question: "Can I use BTCD in DeFi protocols?",
          answer: "Yes! BTCD is designed to work seamlessly across all major DeFi protocols. Trade on DEXs, provide liquidity, lend, borrow, or use in yield farming - all while your underlying Bitcoin remains secure.",
          category: "DeFi & Fees"
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
      product: {
        title: "Product",
        howItWorks: "How it Works",
        security: "Security",
        liquidations: "Liquidations",
        documentation: "Documentation"
      },
            company: {
        title: "Company", 
        about: "About Creek Business Center",
        careers: "Careers",
        press: "Press Kit",
        contact: "Contact"
      },
      developers: {
        title: "Developers",
        github: "GitHub",
        docs: "API Docs", 
        sdk: "SDK",
        whitepaper: "Whitepaper"
      },
      community: {
        title: "Community",
        discord: "Discord",
        telegram: "Telegram", 
        twitter: "Twitter",
        blog: "Blog"
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        disclaimer: "Risk Disclaimer"
      },
      copyright: "© 2024 NBW Labs. All rights reserved. Launching August 2025."
    }
  },

  zh: {
    // Navigation - 导航
    nav: {
      howItWorks: "工作原理",
      protocol: "协议",
      liquidations: "清算", 
      faq: "常见问题",
      about: "关于我们",
      launchApp: "启动应用"
    },

    // Hero Section - 主页
    hero: {
      watchIntro: "观看介绍视频",
      headline: "终于可以让你的",
      bitcoin: "比特币",
      headlineEnd: "发挥作用而无需出售",
      subtitle: "世界上第一个完全由比特币支持的稳定币。释放您的BTC流动性——无包装代币，无桥接，最大化比特币原生安全性。",
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
        description: "您的比特币进入安全的多重签名金库，涉及三方：您、发行方和独立的抵押仲裁节点。任何单方都无法控制您的资金。",
        points: [
          "多重签名消除单点控制",
          "仲裁者质押等额抵押品以确保激励一致",
          "多重故障安全恢复机制"
        ]
      },

      step2: {
        title: "抵押品验证与跨链",
        description: "密码学证明验证您的比特币抵押品，并与智能合约安全通信，以启用BTCD铸造和稳定币服务。",
        points: [
          "验证比特币已正确抵押",
          "与EVM智能合约安全通信",
          "启用跨链稳定币功能"
        ]
      },

      step3: {
        title: "铸造和使用您的BTCD",
        description: "接收由您的安全比特币1:1支持的BTCD稳定币。在DeFi中使用您的BTCD，同时多重恢复机制确保您始终可以取回比特币。",
        points: [
          "从您的比特币获得即时流动性",
          "多重故障安全恢复选项",
          "保持完整的DeFi兼容性"
        ]
      },

      step4: {
        title: "智能风险管理",
        description: "我们的智能仪表板实时跟踪你的抵押品健康状况。与其他突然清算的协议不同，如果比特币价格下跌，BTCD给你90天来管理你的头寸。你始终掌控一切。",
        points: [
          "90天宽限期——无意外清算",
          "实时健康监控",
          "多种方式维持你的头寸"
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
        description: "BTCD采用行业标准的2-3多重签名P2WSH脚本，涉及三个独立方：借款人、发行方和BeL2仲裁者。这种架构确保任何单一实体都无法控制用户资金，同时保持比特币原生安全性。",
        smartContractsTitle: "多重签名P2WSH架构",
        codeComment: "// 去中心化2-3多重签名安全",
        codeDescription: "您的比特币由三方系统保护：您控制一个密钥，发行方持有另一个，独立的BeL2仲裁者提供争议解决。多重加密时间锁确保您始终可以恢复您的比特币。"
      },

      btcdToken: {
        title: "BTCD稳定币",
        description: "世界上第一个完全由比特币支持的稳定币。每个BTCD代币都由锁定在可验证锁定脚本中的真实比特币支持。",
        backingAsset: "支持资产",
        bitcoin100: "100% 比特币",
        collateralRatio: "抵押比率",
        ratioRequired: "需要135%+",
        liquidation: "清算",
        gracePeriod: "90天宽限期",
        comparison: {
          title: "对比其他稳定币",
          btcd: "BTCD",
          others: "其他",
          custody: "托管",
          btcdCustody: "非托管",
          othersCustody: "托管",
          backing: "支持",
          btcdBacking: "100% 比特币",
          othersBacking: "美元/法币",
          grace: "宽限期",
          btcdGrace: "90天",
          othersGrace: "无"
        }
      },



      elastos: {
        title: "在Elastos上的渐进式去中心化",
        description: "我们在Elastos SmartWeb上构建了BTCD——唯一由比特币算力保护的区块链。BTCD遵循结构化的去中心化路线图，目前采用单一发行者模式，正在过渡到完全分布式的BPOS节点网络，同时保持安全保证。",
        codeDescription: "BeL2仲裁者通过合并挖矿继承超过50%的比特币算力。经济质押激励和反合谋措施确保争议解决中的诚实行为。",
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
      title: "作为BTCD清算人和仲裁者赚取收益",
      subtitle: "参与协议安全性的同时赚取比特币奖励。成为清算人购买折扣比特币，或质押ELA成为BeL2仲裁者提供争议解决。",
      
      howItWorks: "如何赚取收益",
      purchaseDesc: "清算人：当金库抵押品降至135%以下且90天宽限期到期时，以2-8%折扣购买比特币恢复系统健康。",
      earnDesc: "仲裁者：质押ELA代币，为借款人与发行方争议提供独立争议解决服务赚取费用",
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
          answer: "BTCD是世界上第一个完全由比特币支持的稳定币。与其他由法币或中心化资产支持的稳定币不同，每个BTCD代币都由锁定在比特币区块链上可验证锁定脚本中的真实比特币支持。",
          category: "基础知识"
        },
        {
          question: "BTCD与包装比特币有什么不同？",
          answer: "包装比特币需要信任托管人和桥接器。BTCD直接在比特币区块链上使用比特币的原生锁定脚本（P2WSH）。你的比特币从不离开比特币网络，确保最大的安全性和去中心化。",
          category: "技术"
        },
        {
          question: "如果比特币价格下跌会怎样？",
          answer: "BTCD有90天宽限期系统。如果你的金库抵押比率降至135%以下，你有90天时间添加更多比特币或偿还一些BTCD来恢复健康。不像其他协议那样突然清算。",
          category: "风险管理"
        },
        {
          question: "我如何知道我的比特币是安全的？",
          answer: "你的比特币由加密证明和比特币自身的安全模型保障。所有抵押品都可以在链上验证，你通过私钥维持控制。没有托管人或第三方接触你的比特币。",
          category: "安全性"
        },
        {
          question: "BTCD什么时候发布？",
          answer: "BTCD计划在2025年8月发布，在经过领先公司的全面安全审计后。早期访问和测试阶段将首先向我们的社区公布。",
          category: "发布"
        },
        {
          question: "我的清算价格是多少？",
          answer: "你的清算价格取决于你的抵押比率。在135%最低比率下，如果你铸造1000美元BTCD，你的比特币价值需要保持在约1350美元以上。我们的仪表板显示实时清算价格和健康比率。",
          category: "风险管理"
        },
        {
          question: "我如何避免被清算？",
          answer: "定期监控你的金库健康状况，维持高于最低135%的抵押比率，价格下跌时添加更多比特币，或偿还BTCD来改善比率。你有90天时间响应任何清算警告。",
          category: "风险管理"
        },
        {
          question: "交易费用是多少？",
          answer: "BTCD有最低的协议费用：0.5%年度稳定费，小额铸造/销毁费用（约0.1%），以及标准的比特币网络交易费用。所有费用都是透明和公开的。",
          category: "DeFi和费用"
        },
        {
          question: "我可以在DeFi协议中使用BTCD吗？",
          answer: "可以！BTCD设计为无缝兼容所有主要DeFi协议。在DEX上交易，提供流动性，借贷，或用于收益农业——所有这些都能保持你的底层比特币安全。",
          category: "DeFi和费用"
        },
        {
          question: "谁是BTCD的幕后团队？",
          answer: "BTCD由Creek Business Center发行，这是一个迪拜持牌实体（贸易执照号1293230），专门从事数字资产基础设施。该协议建立在Elastos SmartWeb基础设施上，并遵循渐进式去中心化路线图。",
          category: "发布"
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
      product: {
        title: "产品",
        howItWorks: "工作原理",
        security: "安全性",
        liquidations: "清算",
        documentation: "文档"
      },
      company: {
        title: "公司",
        about: "关于Creek Business Center",
        careers: "招聘", 
        press: "媒体资料",
        contact: "联系我们"
      },
      developers: {
        title: "开发者",
        github: "GitHub",
        docs: "API文档",
        sdk: "SDK",
        whitepaper: "白皮书"
      },
      community: {
        title: "社区",
        discord: "Discord",
        telegram: "Telegram",
        twitter: "Twitter", 
        blog: "博客"
      },
      legal: {
        title: "法律",
        privacy: "隐私政策",
        terms: "服务条款",
        disclaimer: "风险声明"
      },
      copyright: "© 2024 NBW Labs. 保留所有权利。2025年8月启动。"
    }
  }
}

export type Language = 'en' | 'zh'
export type TranslationKey = keyof typeof translations.en 