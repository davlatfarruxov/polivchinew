"use client"
import { Phone, Send } from "lucide-react"
import { Accordion } from "./ui/accordion"

interface ContactProps {
  phones: string[]
  telegrams: string[]
}

export default function ContactAccordion({ phones, telegrams }: ContactProps) {
  const items = [
    {
      title: "Телефон",
      content: (
        <div className="space-y-2">
          {phones.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone}`}
              className="flex items-center text-blue-600 py-2 px-4 rounded hover:bg-blue-50 transition-colors"
            >
              <Phone className="mr-2" size={20} />
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
              className="flex items-center text-green-600 py-2 px-4 rounded hover:bg-green-50 transition-colors"
            >
              <Send className="mr-2" size={20} />
              Telegram kanaliga qo'shilish
            </a>
          ))}
        </div>
      ),
    },
  ]

  return <Accordion items={items} />
}

