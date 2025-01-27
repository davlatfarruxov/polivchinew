"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

interface Location {
  name: string
  address: string
  yandexMapsLink: string
}

const locations: Location[] = [
  {
    name: "Toshkent filiali",
    address: "Amir Temur ko'chasi, 108, Toshkent, O'zbekiston",
    yandexMapsLink: "https://yandex.com/maps/-/CCUBiMxtsD",
  },
  {
    name: "Samarqand filiali",
    address: "Registon maydoni, 1, Samarqand, O'zbekiston",
    yandexMapsLink: "https://yandex.com/maps/-/CCUBiQx9KC",
  },
  {
    name: "Buxoro filiali",
    address: "Lyabi Hovuz, 10, Buxoro, O'zbekiston",
    yandexMapsLink: "https://yandex.com/maps/-/CCUBiUxRKD",
  },
]

export default function LocationSlider() {
  const [currentLocation, setCurrentLocation] = useState(0)

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % locations.length)
  }

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + locations.length) % locations.length)
  }

  const location = locations[currentLocation]

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <motion.div
        key={currentLocation}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
          <div className="space-y-4">
            <motion.a
              href={location.yandexMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-yellow-500 text-white py-3 px-4 rounded hover:bg-yellow-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="mr-2" size={20} />
              Yandex Xaritada ko'rish
            </motion.a>
            <div className="mt-4 text-gray-600">
              <p>
                <strong>Manzil:</strong> {location.address}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={prevLocation}
          className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
          aria-label="Previous location"
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
          onClick={nextLocation}
          className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
          aria-label="Next location"
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
        {locations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentLocation(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentLocation ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to location ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

