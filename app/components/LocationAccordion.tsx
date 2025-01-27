"use client"
import { useState } from "react"
import { MapPin } from "lucide-react"
import { Accordion } from "./ui/accordion"

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

export default function LocationAccordion() {
  const [openLocation, setOpenLocation] = useState<string | null>(null)

  const items = [
    {
      title: "Filiallarimiz",
      content: (
        <Accordion
          items={locations.map((location) => ({
            title: location.name,
            content: (
              <div className="space-y-4">
                <p>
                  <strong>Manzil:</strong> {location.address}
                </p>
                <a
                  href={location.yandexMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-yellow-600 py-3 px-4 rounded hover:bg-yellow-50 transition-colors"
                  onClick={() => setOpenLocation(location.name)}
                >
                  <MapPin className="mr-2" size={20} />
                  Yandex Xaritada ko'rish
                </a>
                {openLocation === location.name && (
                  <div className="mt-4 h-64 w-full">
                    <iframe
                      src={location.yandexMapsLink}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ),
          }))}
        />
      ),
    },
  ]

  return <Accordion items={items} />
}

