"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface BitcoinFAQSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  items?: {
    question: string;
    answer: string;
    category: string;
  }[];
  categories?: string[];
  contactInfo?: {
    title: string;
    description?: string;
    buttonText: string;
    onContact?: () => void;
  };
}

export const BitcoinFAQSection: React.FC<BitcoinFAQSectionProps> = ({
  title = "We've Got the Answers",
  subtitle = "Everything you need to know about BTCD",
  badge = "FAQs",
  items = [
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
  categories = ["All", "Basics", "Technology", "Security", "Risk Management", "DeFi & Fees"],
  contactInfo = {
    title: "Still Have Questions?",
    description: "Connect with us on X and let us know what you need.",
    buttonText: "Ask us on X",
    onContact: () => {
      // X/Twitter link functionality
      window.open("https://twitter.com/btcd", "_blank");
    }
  }
}) => {
  // Use passed props as the display values
  const displayTitle = title
  const displaySubtitle = subtitle  
  const displayBadge = badge
  const displayItems = items

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [expandedItem, setExpandedItem] = React.useState<number | null>(null);
  const [isExpanding, setIsExpanding] = React.useState(false);

  const filteredItems = React.useMemo(() => {
    return displayItems.filter(item => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesCategory;
    });
  }, [displayItems, selectedCategory]);

  const toggleItem = async (index: number) => {
    if (isExpanding) return;
    
    setIsExpanding(true);
    
    // Small delay for smooth animation
    await new Promise(resolve => setTimeout(resolve, 100));
    
    setExpandedItem(expandedItem === index ? null : index);
    setIsExpanding(false);
  };

  return (
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#141414]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
                          <div className="w-6 h-6 border-2 border-[#5C8EFF] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#5C8EFF] rounded-full"></div>
            </div>
                          <span className="text-[#5C8EFF] text-sm font-medium tracking-wider">{displayBadge}</span>
          </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
              {displayTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              {displaySubtitle}
            </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12 px-4"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                  "border backdrop-blur-sm",
                  selectedCategory === category
                    ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/25"
                    : "bg-gray-900/60 text-gray-300 border-gray-700 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-300"
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 sm:space-y-4 px-4"
        >
          {filteredItems.map((item: FAQItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-4 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-orange-300 transition-colors duration-300 flex-1 leading-snug">
                        {item.question}
                      </h3>
                      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 flex-shrink-0">
                        <Badge
                          className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs"
                        >
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedItem === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-3 sm:mb-4" />
                          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Contact Section */}
        {contactInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-12 lg:mt-16 text-center px-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F6921A]/8 to-[#5C8EFF]/8 rounded-3xl blur-xl" />
              <div className="relative bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {contactInfo.title}
                </h3>
                {contactInfo.description && (
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                    {contactInfo.description}
                  </p>
                )}
                <Button
                  onClick={contactInfo.onContact}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium flex items-center space-x-2 mx-auto"
                >
                                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>{contactInfo.buttonText}</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}; 