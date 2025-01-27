"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Send, MapPin } from "lucide-react"

interface Branch {
  name: string
  phone: string
  telegram: string
  address: string
  yandexMapsLink: string
}

const branches: Branch[] = [
  {
    name: "Toshkent filiali",
    phone: "+998 90 123 45 67",
    telegram: "https://t.me/toshkentfiliali",
    address: "Amir Temur ko'chasi, 108, Toshkent, O'zbekiston",
    yandexMapsLink: "https://yandex.com/maps/-/CCUBiMxtsD",
  },
  {
    name: "Samarqand filiali",
    phone: "+998 93 765 43 21",
    telegram: "https://t.me/samarqandfiliali",
    address: "Registon maydoni, 1, Samarqand, O'zbekiston",
    yandexMapsLink: "https://yandex.com/maps/-/CCUBiQx9KC",
  },
  {
    name: "Buxoro filiali",
    phone: "+998 95 555 55 55",
    telegram: "https://t.me/buxorofiliali",
    address: "Lyabi Hovuz, 10, Buxoro, O'zbekiston",
    yandexMapsLink: "https://yandex.com/maps/-/CCUBiUxRKD",
  },
]

export default function BranchSlider() {
  const [currentBranch, setCurrentBranch] = useState(0)

  const nextBranch = () => {
    setCurrentBranch((prev) => (prev + 1) % branches.length)
  }

  const prevBranch = () => {
    setCurrentBranch((prev) => (prev - 1 + branches.length) % branches.length)
  }

  const branch = branches[currentBranch]

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <motion.div
        key={currentBranch}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{branch.name}</h2>
          <div className="flex flex-col space-y-4">
            <motion.a
              href={`tel:${branch.phone}`}
              className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2" size={20} />
              Qo'ng'iroq qilish
            </motion.a>
            <motion.a
              href={branch.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="mr-2" size={20} />
              Telegram guruhiga qo'shilish
            </motion.a>
            <motion.a
              href={branch.yandexMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="mr-2" size={20} />
              Yandex Xaritalarda ko'rish
            </motion.a>
          </div>
          <div className="mt-4 text-gray-600">
            <p>
              <strong>Manzil:</strong> {branch.address}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={prevBranch}
          className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
          aria-label="Previous branch"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextBranch}
          className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
          aria-label="Next branch"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {branches.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBranch(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentBranch ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to branch ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

