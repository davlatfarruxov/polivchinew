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
    yandexMapsLink: "https://yandex.uz/map-widget/v1/?from=mapframe&ll=67.014089%2C39.675946&mode=search&oid=158428626285&ol=biz&pt=66.975836%2C39.654397&sctx=ZAAAAAgCEAAaKAoSCRgFwePbwFBAETpa1ZKO1kNAEhIJNwhQpQvhrT8RIq629DL%2Fpj8iBgABAgMEBSgKOABA3lBIAWIec291cmNlPWJ1c2luZXNzX2FkdmVydDpleHBfcmVmagJ1ep0BzczMPaABAKgBAL0Bz%2BN0PYICKdCe0LHRgdC10YDQstCw0YLQvtGA0LjRjyDQo9C70YPQs9Cx0LXQutCwigIMMTYyODg4MTY1MjgzkgIDMTcxmgIMZGVza3RvcC1tYXBz&sll=67.014089%2C39.675946&source=mapframe&sspn=0.003852%2C0.001710&text=%D0%9E%D0%B1%D1%81%D0%B5%D1%80%D0%B2%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D0%A3%D0%BB%D1%83%D0%B3%D0%B1%D0%B5%D0%BA%D0%B0&utm_source=mapframe&z=19",
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

