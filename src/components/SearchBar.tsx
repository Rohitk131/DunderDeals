"use client"

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Search, Loader2 } from 'lucide-react'
import { scrapeAndStoreProduct } from '@/lib/actions'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes('amazon.com') || 
      hostname.includes('amazon.') || 
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}

const Searchbar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const isValidLink = isValidAmazonProductURL(inputValue)

    if (!isValidLink) return alert('Please provide a valid link')

    try {
      setIsLoading(true)
      const product = await scrapeAndStoreProduct(inputValue);
     
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto mt-12"
    >
      <form onSubmit={handleSubmit} className="relative group">
        <input
          type="text"
          placeholder="Paste product link here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-16 px-6 py-3 text-lg text-gray-700 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out pr-32 group-hover:shadow-lg"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-2 top-2 h-12 px-8 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Search className="w-5 h-5 mr-2" />
              Search
            </>
          )}
        </motion.button>
        {inputValue && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute right-36 top-5 text-gray-400 hover:text-gray-600 bg-white rounded-sm mr-1 "
            onClick={() => setInputValue('')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}
      </form>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-4 text-center text-sm text-gray-500"
      >
        Enter an Amazon product link to track its price and history
      </motion.div>
    </motion.div>
  )
}

export default Searchbar
