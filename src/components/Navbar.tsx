import { Search, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center group">
              <div className="relative w-8 h-8 overflow-hidden  rounded-full hover:scale-110 transition-colors duration-200">
                <Image
                  src={'./logo.svg'}
                  width={27}
                  height={27}
                  alt="logo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-colors duration-200">
                DunderDeals
              </span>
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center items-center">
            <div className="flex items-center space-x-4">
              <div className="relative items-center">
                <input
                  type="text"
                  placeholder="Search deals..."
                  className="bg-gray-50 rounded-full py-2 px-4 pl-10 pr-12 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300 transition-all duration-200 ease-in-out"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <button className="absolute right-2 top-2 bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600 transition-colors duration-200">
                  <Search className="h-4 w-4" />
                </button>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favorites</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}