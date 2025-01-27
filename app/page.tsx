import Header from "./components/Header"
import MainAccordion from "./components/MainAccordion"
import Footer from "./components/Footer"

const phones = [ "+998 77-705-99-88", "+998 77-706-99-88", "+998 77-708-99-88"]

const telegrams = ["https://t.me/polivchi", "https://t.me/polivchi1", "https://t.me/polivchi2"]
const website = ["www.polivchi.uz"]
const instagram = ["https://instagram.com/polivchi"]

const locations = [
  {
    name: "Polivchi - Саттепо филиал",
    address: "Самарканд, населённый пункт Навбогчиён, ул. Хумдон, 355",
    yandexMapsLink: "https://yandex.uz/map-widget/v1/?ll=66.920248%2C39.630569&mode=search&oid=5978197782&ol=biz&utm_source=share&z=17.06",
    phone: "+998 77-705-99-88",
  },
  {
    name: "Polivchi - Улугбек филиал",
    address: "Самаркандская кольцевая дорога, 1, Самаркандская область",
    yandexMapsLink: "https://yandex.uz/map-widget/v1/?azimuth=5.880259686894962&ll=67.013449%2C39.676149&mode=search&sctx=ZAAAAAgCEAAaKAoSCSO%2FfogNvlBAEQYP07650UNAEhIJasAg6dMqmj8RQBU3bjE%2Fhz8iBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9Ac%2FjdD2CAinQntCx0YHQtdGA0LLQsNGC0L7RgNC40Y8g0KPQu9GD0LPQsdC10LrQsIoCDDE2Mjg4ODE2NTI4M5ICAzE3MZoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=67.013449%2C39.676149&sspn=0.004424%2C0.001964&text=%D0%9E%D0%B1%D1%81%D0%B5%D1%80%D0%B2%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D0%A3%D0%BB%D1%83%D0%B3%D0%B1%D0%B5%D0%BA%D0%B0&tilt=0.03656880337511937&utm_source=share&whatshere%5Bpoint%5D=67.013332%2C39.676509&whatshere%5Bzoom%5D=17&z=18.8",
    phone: "+998 77-706-99-88",
  },
  {
    name: "Polivchi - Главный Офис",
    address: "Самарканд, населённый пункт Навбогчиён, ул. Хумдон, 355",
    yandexMapsLink: "https://yandex.uz/map-widget/v1/?ll=66.920248%2C39.630569&mode=search&oid=5978197782&ol=biz&utm_source=share&z=17.06",
    phone: "+998 77-705-99-88",
  },
  
]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Контакты</h2>
            <MainAccordion phones={phones} telegrams={telegrams} locations={locations} instagram={instagram} website={website}/>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

