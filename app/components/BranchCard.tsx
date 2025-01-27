"use client"
import { motion } from "framer-motion"
import { Phone, Send, MapPin } from "lucide-react"

interface BranchCardProps {
  name: string
  phone: string
  telegram: string
  address: string
  yandexMapsLink: string
}

export default function BranchCard({ name, phone, telegram, address, yandexMapsLink }: BranchCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <div className="flex flex-col space-y-4">
          <motion.a
            href={`tel:${phone}`}
            className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-2" size={20} />
            Call Now
          </motion.a>
          <motion.a
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="mr-2" size={20} />
            Join Telegram
          </motion.a>
          <motion.a
            href={yandexMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="mr-2" size={20} />
            View on Yandex Maps
          </motion.a>
        </div>
        <div className="mt-4 text-gray-600">
          <p>
            <strong>Address:</strong> {address}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

