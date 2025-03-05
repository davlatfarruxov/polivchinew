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
    yandexMapsLink: "https://yandex.uz/map-widget/v1/?from=mapframe&ll=67.013812%2C39.676324&mode=poi&poi%5Bpoint%5D=67.013340%2C39.676502&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D169980616659&z=20.73",
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

