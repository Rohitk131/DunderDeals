"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bell, BarChart2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Searchbar from "@/components/SearchBar";
import HeroCarousel from '@/components/HeroCarousel';

export default function HeroSection() {
  const [productUrl, setProductUrl] = useState("");

  return (
    <div className="bg-white min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 py-20">
    <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-10"
      >
          <div className="space-y-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Unlock Savings</span>
              <span className="block text-blue-600">Like Never Before!</span>
            </motion.h1>
            <motion.p
              className="mt-3 text-xl text-gray-600 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Say goodbye to overpaying! Track prices, monitor products, and get instant alerts. 
              Never miss a deal again—shop smart with <span className="font-bold text-orange-600">DunderDeals!</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full max-w-md"
          >
            <Searchbar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { icon: BarChart2, title: "Price History" },
              { icon: Bell, title: "Price Alerts" },
              { icon: DollarSign, title: "Best Deal Finder" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-4 flex flex-row items-center text-center ">
                  <feature.icon className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-md font-semibold text-gray-900">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-xl" // Adjusted to take full width within its container
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </div>
  );
}