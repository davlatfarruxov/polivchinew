"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionProps {
  items: {
    title: string
    content: React.ReactNode
  }[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="flex justify-between w-full p-4 text-left border-b transition-all hover:bg-gray-50"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDown
              className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && <div className="p-4">{item.content}</div>}
        </div>
      ))}
    </div>
  )
}

