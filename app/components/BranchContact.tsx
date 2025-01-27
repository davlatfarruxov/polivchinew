"use client"
import { Phone, Send } from "lucide-react"
import { motion } from "framer-motion"

interface ContactProps {
  phones: string[]
  telegrams: string[]
}

export default function BranchContact({ phones, telegrams }: ContactProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="space-y-6">
        {/* Phone numbers section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Bizning telefon</h3>
          <div className="space-y-2">
            {phones.map((phone, index) => (
              <motion.a
                key={phone}
                href={`tel:${phone}`}
                className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="mr-2" size={20} />
                {phone}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Telegram section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Bizning telegram</h3>
          <div className="space-y-2">
            {telegrams.map((telegram, index) => (
              <motion.a
                key={telegram}
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="mr-2" size={20} />
                Telegram guruhiga qo'shilish
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

