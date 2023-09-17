import NavLink from '../components/NavLink'

const Footer = () => {
  return (
    <div className='mt-[100px] w-full py-4 px-8 gap-14 border-t border-gray-800 items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
      <div className='items-center flex flex-col text-center gap-y-4'>
        <h1 className='mt-2 font-semibold text-xl'>Ürünler</h1>
        <NavLink
          href='#'
          text='Ayakkabı'
        />
        <NavLink
          href='#'
          text='Giyim'
        />
        <NavLink
          href='#'
          text='Aksesuar'
        />
        <NavLink
          href='#'
          text='En Yeniler'
        />
        <NavLink
          href='#'
          text='En Çok Satanlar'
        />
      </div>
      <div className='items-center flex flex-col text-center gap-y-1'>
        <h1 className='mt-2 font-semibold text-xl'>Spor</h1>
        <NavLink
          href='#'
          text='Training'
        />
        <NavLink
          href='#'
          text='Koşu'
        />
        <NavLink
          href='#'
          text='Futbol'
        />
        <NavLink
          href='#'
          text='Outdoor'
        />
        <NavLink
          href='#'
          text='Basketbol'
        />
        <NavLink
          href='#'
          text='Yüzme'
        />
        <NavLink
          href='#'
          text='Tenis'
        />
      </div>
      <div className='items-center flex flex-col text-center gap-y-1'>
        <h1 className='mt-2 font-semibold text-xl'>Koleksiyonlar</h1>
        <NavLink
          href='#'
          text='Forum'
        />
        <NavLink
          href='#'
          text='Ultraboost'
        />
        <NavLink
          href='#'
          text='Superstar'
        />
        <NavLink
          href='#'
          text='Stan Smith'
        />
        <NavLink
          href='#'
          text='ZX'
        />
        <NavLink
          href='#'
          text='adicolor'
        />
        <NavLink
          href='#'
          text='Predator'
        />
        <NavLink
          href='#'
          text='NMD'
        />
      </div>
      <div className='items-center flex flex-col text-center gap-y-4'>
        <h1 className='mt-2 font-semibold text-xl'>
          Şirket Bilgileri
        </h1>
        <NavLink
          href='#'
          text='adiClub'
        />
        <NavLink
          href='#'
          text='Hakkımızda'
        />
        <NavLink
          href='#'
          text='Kariyer'
        />
        <NavLink
          href='#'
          text='Basın'
        />
      </div>
      <div className='items-center flex flex-col text-center gap-y-1'>
        <h1 className='mt-2 font-semibold text-xl'>Koleksiyonlar</h1>
        <NavLink
          href='#'
          text='Müşteri hizmetleri ve iletişim'
        />
        <NavLink
          href='#'
          text='Mağaza rehberi'
        />
        <NavLink
          href='#'
          text='Beden tablosu'
        />
        <NavLink
          href='#'
          text='Ödeme'
        />
        <NavLink
          href='#'
          text='Teslimat'
        />
        <NavLink
          href='#'
          text='İade ve geri ödeme'
        />
        <NavLink
          href='#'
          text='İşlem rehberi'
        />
        <NavLink
          href='#'
          text='Bilgi toplum merkezi'
        />
      </div>
    </div>
  )
}

export default Footer
