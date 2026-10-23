import Activities from "./components/activities/Activities"
import Analytics from "./components/analytics/Analytics"

import Insights from "./components/insights/Insights"

const Dashboard = () => {
  return (
    <div className="h-full overflow-auto px-4 flex flex-col gap-4 pb-4">
      <Insights />
      <Analytics />
      <Activities/>
    </div>
  )
}

export default Dashboard