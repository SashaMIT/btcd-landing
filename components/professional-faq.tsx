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
      answer: "BTCD is the world's first fully Bitcoin-backed stablecoin. Unlike other stablecoins backed by fiat or centralized assets, every BTCD token is backed by real Bitcoin locked in verifiable locking scripts on the Bitcoin blockchain.",
      category: "Basics"
    },
    {
      question: "How is BTCD different from wrapped Bitcoin?",
      answer: "BTCD uses Bitcoin's native P2WSH locking scripts—your Bitcoin never leaves the Bitcoin blockchain. There are no bridges, no wrapped tokens, and no custodial intermediaries. You maintain complete control through cryptographic keys.",
      category: "Technology"
    },
    {
      question: "What happens if Bitcoin's price drops?",
      answer: "BTCD has a 135% minimum collateral ratio with a 90-day grace period. If your vault drops below this threshold, you have 90 days to add more Bitcoin or repay BTCD before any liquidation can occur—no surprise liquidations.",
      category: "Risk Management"
    },
    {
      question: "How do I know my Bitcoin is safe?",
      answer: "Your Bitcoin is secured by the same cryptographic principles that secure Bitcoin itself. The protocol provides real-time proof of reserves, and every Bitcoin backing BTCD is verifiable on-chain. You control your Bitcoin through your private keys.",
      category: "Security"
    },
    {
      question: "When does BTCD launch?",
      answer: "BTCD launches in August 2025 on Elastos Smart Chain, with broader expansion planned. The protocol has been audited by leading security firms and developed by Harvard alumni.",
      category: "Launch"
    },
    {
      question: "What is my liquidation price?",
      answer: "Your liquidation price depends on your collateral ratio. With a 135% minimum threshold, if you deposit $10,000 worth of Bitcoin, you can borrow up to $7,407 in BTCD. The system shows your exact liquidation price in real-time.",
      category: "Risk Management"
    },
    {
      question: "How can I avoid getting liquidated?",
      answer: "Maintain a healthy collateral ratio above 135%, monitor your vault regularly, and take advantage of the 90-day grace period to add more Bitcoin or repay BTCD if needed. The dashboard provides real-time alerts and health monitoring.",
      category: "Risk Management"
    },
    {
      question: "What are the transaction fees?",
      answer: "BTCD features minimal transaction fees typically ranging from 0.1% to 0.5% depending on the operation. We leverage Elastos Smart Chain's efficiency to keep costs low while maintaining Bitcoin-level security.",
      category: "Fees"
    },
    {
      question: "Can I use BTCD in DeFi protocols?",
      answer: "Yes! BTCD is designed to be fully compatible with DeFi protocols. You can use BTCD for lending, borrowing, yield farming, and as collateral in other protocols while your underlying Bitcoin remains secure.",
      category: "DeFi"
    }
  ],
  categories = ["All", "Basics", "Technology", "Security", "Risk Management", "DeFi & Fees", "Launch"],
  contactInfo = {
    title: "Still Have Questions?",
    description: "Connect with us in our Telegram community and let us know what you need.",
    buttonText: "Ask us on Telegram",
    onContact: () => {
      // Telegram link functionality
      window.open("https://t.me/btcd", "_blank");
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
          {filteredItems.map((item: any, index: number) => (
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
                          className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs order-2 sm:order-1"
                        >
                          {item.category}
                        </Badge>
                        <motion.div
                          animate={{ rotate: expandedItem === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 order-1 sm:order-2"
                        >
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                        </motion.div>
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
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.379 2.655-.566 3.118-.745 3.192-.381.156-.859-.218-.859-.218s-4.287-3.377-5.051-3.963c-.179-.138-.308-.26-.031-.55.982-.979 5.111-4.779 5.111-4.779.222-.204.146-.322-.05-.322-.487.032-6.819 4.86-7.835 5.416-.583.318-1.153.204-1.153.204s-1.2-.396-1.379-.63c-.232-.303.229-.586.229-.586 1.956-.805 7.247-2.824 9.514-3.727.887-.354 1.594-.469 1.594-.469s.567-.089.883.213c.316.302.268.708.25.862z"/>
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