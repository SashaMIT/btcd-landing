export const translations = {
  en: {
    // Navigation
    nav: {
      howItWorks: "How it works",
      protocol: "Protocol", 
      liquidations: "Liquidations",
      faq: "FAQ",
      launchApp: "Launch App"
    },
    
    // Hero Section
    hero: {
      watchIntro: "Watch Intro Video",
      headline: "Finally, put your",
      bitcoin: "Bitcoin", 
      headlineEnd: "to work without selling it",
      subtitle: "The world's first fully Bitcoin-backed stablecoin. Unlock liquidity from your BTC while maintaining complete control—no custodians, no wrapped tokens, no compromises.",
      mintToday: "Mint today",
      securedBy: "Secured by leading Bitcoin infrastructure providers"
    },

    // How BTCD Works
    howWorks: {
      badge: "THE BREAKTHROUGH",
      title: "How BTCD Works",
      subtitle: "The first Bitcoin-native stablecoin that doesn't require you to trust anyone with your Bitcoin. Here's how we solved the impossible.",
      
      step1: {
        title: "Lock Your Bitcoin Securely",
        description: "Your Bitcoin goes into a P2WSH address—Bitcoin's native locking script format. You maintain complete control through cryptographic keys. No custodians, no wrapped tokens, no counterparty risk.",
        points: [
          "Your keys, your Bitcoin—always",
          "Native Bitcoin security model", 
          "Withdraw anytime you want"
        ]
      },

      step2: {
        title: "Zero-Knowledge Verification",
        description: "BTCD Miners use advanced cryptography to prove your Bitcoin exists without revealing private details. This breakthrough enables Bitcoin's locking scripts to communicate with smart contracts across ecosystems while maintaining complete privacy and security.",
        points: [
          "Mathematical proof of collateral",
          "Privacy-preserving verification",
          "Real-time proof of reserves"
        ]
      },

      step3: {
        title: "Mint BTCD Stablecoin", 
        description: "Once verified, the protocol automatically mints BTCD tokens backed by your Bitcoin. Use your BTCD across DeFi protocols, trade on exchanges, or hold as a stable store of value—all while your Bitcoin remains safely locked and earning.",
        points: [
          "Instant liquidity from your Bitcoin",
          "Use across all DeFi protocols",
          "Backed by real Bitcoin, not promises"
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
        title: "Bitcoin-Native Architecture",
        description: "The first stablecoin that works directly with Bitcoin's native locking scripts. No wrapped tokens, no bridges, no compromises—just pure Bitcoin security.",
        smartContractsTitle: "P2WSH Locking Scripts",
        codeComment: "// Bitcoin native execution",
        codeDescription: "Your Bitcoin stays on Bitcoin. Bitcoin's locking scripts use the native P2WSH format, ensuring maximum security and compatibility with the Bitcoin ecosystem."
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
        title: "Elastos Infrastructure",
        description: "We built BTCD on Elastos'—the only blockchain secured by Bitcoin's hashpower. Your BTCD benefits from the combined security of Bitcoin mining and cross-ecosystem smart contract innovation.",
        codeDescription: "Your Bitcoin stays on Bitcoin. Bitcoin's locking scripts use the native P2WSH format, ensuring maximum security and compatibility with the Bitcoin ecosystem.",
        hashpowerLabel: "Bitcoin Hashpower",
        securityLabel: "Bitcoin-Level Security", 
        mergedLabel: "Merge-Mined Since 2018",
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
            title: "Always Your Bitcoin",
            description: "You control your Bitcoin through cryptographic keys, not corporate promises."
          }
        ]
      },

      bottomBanner: {
        title: "The First Bitcoin-Native Stablecoin is Here",
        description: "Join the revolution that's putting Bitcoin's $2 trillion market cap to work in DeFi—without compromising on security or decentralization."
      }
    },

    // Liquidations
    liquidations: {
      badge: "EARN REWARDS",
      title: "Earn Yield as a BTCD Liquidator", 
      subtitle: "Help maintain the protocol's health while earning Bitcoin rewards. Buy discounted Bitcoin from liquidated vaults and keep BTCD's peg stable.",
      
      howItWorks: "How Liquidation Works",
      purchaseDesc: "When a vault's collateral drops below 135% and the 90-day grace period expires, liquidators can purchase the Bitcoin at a discount to restore system health.",
      earnDesc: "Earn 2-8% profit on each liquidation",
      pegDesc: "Help maintain BTCD's dollar peg", 
      sustainDesc: "Contribute to protocol sustainability"
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
          answer: "Your Bitcoin is secured by cryptographic proofs and Bitcoin's own security model. All collateral is verifiable on-chain, and you maintain control through your private keys. No custodians or third parties ever touch your Bitcoin.",
          category: "Security"
        },
        {
          question: "When does BTCD launch?",
          answer: "BTCD is scheduled to launch in August 2025 after comprehensive security audits by leading firms. Early access and testing phases will be announced to our community first.",
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
        about: "About NBW Labs",
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
      launchApp: "启动应用"
    },

    // Hero Section - 主页
    hero: {
      watchIntro: "观看介绍视频",
      headline: "终于可以让你的",
      bitcoin: "比特币",
      headlineEnd: "发挥作用而无需出售",
      subtitle: "世界上第一个完全由比特币支持的稳定币。释放你的BTC流动性，同时保持完全控制——无托管人，无包装代币，无妥协。",
      mintToday: "立即铸造",
      securedBy: "由领先的比特币基础设施提供商保障"
    },

    // How BTCD Works - BTCD工作原理
    howWorks: {
      badge: "突破性创新",
      title: "BTCD 工作原理",
      subtitle: "第一个不需要你信任任何人的比特币原生稳定币。这就是我们如何解决不可能的问题。",
      
      step1: {
        title: "安全锁定你的比特币",
        description: "你的比特币进入P2WSH地址——比特币的原生锁定脚本格式。你通过加密密钥保持完全控制。无托管人，无包装代币，无交易对手风险。",
        points: [
          "你的密钥，你的比特币——永远",
          "原生比特币安全模型",
          "随时可以提取"
        ]
      },

      step2: {
        title: "零知识验证",
        description: "BTCD矿工使用先进的密码学来证明你的比特币存在，而不透露私人细节。这一突破使比特币的锁定脚本能够与跨生态系统的智能合约通信，同时保持完全的隐私和安全。",
        points: [
          "抵押品的数学证明",
          "隐私保护验证",
          "实时储备证明"
        ]
      },

      step3: {
        title: "铸造BTCD稳定币",
        description: "一旦验证，协议会自动铸造由你的比特币支持的BTCD代币。在DeFi协议中使用你的BTCD，在交易所交易，或作为稳定的价值存储——同时你的比特币保持安全锁定并赚取收益。",
        points: [
          "从你的比特币获得即时流动性",
          "在所有DeFi协议中使用",
          "由真实比特币支持，而非承诺"
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
        title: "比特币原生架构",
        description: "第一个直接与比特币原生锁定脚本工作的稳定币。无包装代币，无桥接，无妥协——只有纯粹的比特币安全性。",
        smartContractsTitle: "P2WSH锁定脚本",
        codeComment: "// 比特币原生执行",
        codeDescription: "你的比特币留在比特币网络上。比特币的锁定脚本使用原生的P2WSH格式，确保最大的安全性和与比特币生态系统的兼容性。"
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
        title: "Elastos基础设施",
        description: "我们在Elastos上构建了BTCD——唯一由比特币算力保障的区块链。你的BTCD受益于比特币挖矿和跨生态系统智能合约创新的综合安全性。",
        codeDescription: "你的比特币留在比特币网络上。比特币的锁定脚本使用原生的P2WSH格式，确保最大的安全性和与比特币生态系统的兼容性。",
        hashpowerLabel: "比特币算力",
        securityLabel: "比特币级安全性",
        mergedLabel: "自2018年以来联合挖矿",
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
            title: "始终是你的比特币",
            description: "你通过加密密钥控制你的比特币，而不是企业承诺。"
          }
        ]
      },

      bottomBanner: {
        title: "第一个比特币原生稳定币已经到来",
        description: "加入这场革命，将比特币2万亿美元的市值投入DeFi工作——无需在安全性或去中心化方面妥协。"
      }
    },

    // Liquidations - 清算
    liquidations: {
      badge: "赚取奖励",
      title: "作为BTCD清算人赚取收益",
      subtitle: "在帮助维护协议健康的同时赚取比特币奖励。从清算金库购买折扣比特币，保持BTCD的锚定稳定。",
      
      howItWorks: "清算如何工作",
      purchaseDesc: "当金库的抵押品降至135%以下且90天宽限期到期时，清算人可以折扣价购买比特币以恢复系统健康。",
      earnDesc: "每次清算赚取2-8%利润",
      pegDesc: "帮助维护BTCD的美元锚定",
      sustainDesc: "为协议可持续性做贡献"
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
        about: "关于NBW Labs",
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