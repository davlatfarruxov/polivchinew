import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#006699] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center">
 
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/polivchi/profilecard/?igsh=cHdncTY1ZGF4NXB4" className="text-white hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
        <p>&copy; 2018-2025 Polivchi. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

