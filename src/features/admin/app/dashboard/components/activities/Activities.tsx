import BreedDetails from "./components/BreedDetails"
import MostViewed from "./components/MostViewed"
import RecentActivities from "./components/RecentActivities"

const Activities = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-4">
      <BreedDetails/>
      <MostViewed/>
      <RecentActivities/>
    </div>
  )
}

export default Activities
