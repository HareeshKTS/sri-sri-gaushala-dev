import TodaySummary from "./components/TodaySummary"
import WebGrowth from "./components/WebGrowth"
import WebPages from "./components/WebPages"

const Analytics = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <TodaySummary />
            <WebGrowth />
            <WebPages />
        </div>
    )
}

export default Analytics
