import AddNewSiteCard from '@/components/Desktop/AddNewSiteCard'
import DashNav from '@/components/Desktop/Dashboard/DashNav'
import SideBar from '@/components/Desktop/SideBar'
import SiteCard from '@/components/Desktop/SiteCard'
import NewSiteModal from '@/components/Modal/NewSiteModal'

export default function Home() {
  const sites = [
    'My Portfolio',
    'document 1',
    'darft_portfolio_1',
    'prod portfolio 2',
  ]
  return (
    <div className='flex relative min-h-[100vh] w-full pl-[8vw] justify-between'>
      <SideBar />
      <div className='flex flex-col min-h-[100vh] w-full'>
        <DashNav />
        <div className='flex-grow gap-[2vw] flex p-[3%]'>
          {
            sites.map((site, i) => (
              <SiteCard name={site} key={i} />
            ))
          }
          <AddNewSiteCard />
        </div>
      </div>
    </div>
  )
}
