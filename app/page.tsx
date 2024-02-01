import AddNewSiteCard from '@/components/Desktop/AddNewSiteCard'
import DashNav from '@/components/Desktop/Dashboard/DashNav'
import MyDash from '@/components/Desktop/Dashboard/MyDash'
import SideBar from '@/components/Desktop/SideBar'
import SiteCard from '@/components/Desktop/SiteCard'
import NewSiteModal from '@/components/Modal/NewSiteModal'

export default function Home() {

  return (
    <div className='flex relative min-h-[100vh] w-full pl-[8vw] justify-between'>
      <SideBar />
      <div className='flex flex-col min-h-[100vh] w-full'>
        <DashNav />
        <MyDash />
      </div>
    </div>
  )
}
