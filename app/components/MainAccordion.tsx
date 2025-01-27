"use client"
import { useState } from "react"
import { Phone, Send, MapPin, PanelTop, Instagram } from "lucide-react"
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

export default function MainAccordion({ phones, telegrams, locations, website , instagram}: MainAccordionProps) {
  const [openLocation, setOpenLocation] = useState<string | null>(null)
  
  const items = [
    {
      title: (<div className="flex dispalay-flex items-center"><Phone className="h-5 mr-3"/><span>Телефон</span></div>),
      content: (
        <div className="space-y-2">
          {phones.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone}`}
              className="flex items-center text-black py-2 px-4 rounded hover:bg-gray-100 transition-colors"
              >
              <span className="mr-2 text-black-600"  />
              {phone}
            </a>
          ))}
        </div>
      ),
    },
    {
      title: (<div className="flex dispalay-flex items-center"><Send className="h-5 mr-3"/><span>Телеграм</span></div>),
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
              <span className="mr-2 text-blue-600"  />
              {telegram}
            </a>
          ))}
        </div>
      ),
    },
    {
      title: (<div className="flex dispalay-flex items-center"><MapPin className="h-5 mr-3"/><span>Локация</span></div>),
     
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
    {
      title: (<div className="flex dispalay-flex items-center"><PanelTop className="h-5 mr-3"/><span>Сайт</span></div>),
      content: (
        <div className="space-y-2">
          {website.map((web, index) => (
            <a
              key={index}
              href={web}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600  py-2 px-4 rounded hover:bg-green-50 transition-colors"
              
            >
              <span className="mr-2 text-blue-600" />
            
              {web}
            </a>
          ))}
        </div>
      ),
    },
    {
      title: (<div className="flex dispalay-flex items-center"><Instagram className="h-5 mr-3"/><span>Инстаграм</span></div>),
      content: (
        <div className="space-y-2">
          {instagram.map((insta, index) => (
            <a
              key={index}
              href={insta}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600  py-2 px-4 rounded hover:bg-green-50 transition-colors"
              
            >
              <span className="mr-2 text-blue-600" />
            
              {insta}
            </a>
          ))}
        </div>
      ),
    },
  ]
  
  return <Accordion items={items} />
}

