"use client"
import { useState } from "react"
import { Phone, Send, MapPin } from "lucide-react"
import { Accordion } from "./ui/accordion"

interface MainAccordionProps {
  phones: string[]
  telegrams: string[]
  locations: {
    name: string
    address: string
    yandexMapsLink: string
  }[]
}

export default function MainAccordion({ phones, telegrams, locations }: MainAccordionProps) {
  const [openLocation, setOpenLocation] = useState<string | null>(null)

  const items = [
    {
      title: "Телефон",
      content: (
        <div className="space-y-2">
          {phones.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone}`}
              className="flex items-center text-black py-2 px-4 rounded hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 text-black-600" size={20} />
              {phone}
            </a>
          ))}
        </div>
      ),
    },
    {
      title: "Телеграм",
      content: (
        <div className="space-y-2">
          {telegrams.map((telegram, index) => (
            <a
              key={index}
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600  py-2 px-4 rounded hover:bg-green-50 transition-colors"
              
            >
              <Send className="mr-2 text-blue-600" size={20} />
              {telegram}
            </a>
          ))}
        </div>
      ),
    },
    {
      title: "Филиали",
      content: (
        <Accordion
          items={locations.map((location) => ({
            title: location.name,
            content: (
              <div className="space-y-4">
                <p>
                  <strong>Адрес:</strong> <span>{location.address}</span> <br/>
                  <strong>Тел:</strong> <span>{location.phone}</span>
                  
                </p>
               
                <div className="mt-4 h-64 w-full">
                  <iframe
                    src={location.yandexMapsLink}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ),
          }))}
        />
      ),
    },
  ]

  return <Accordion items={items} />
}

