import VideoInsights from "./components/VideoInsights"
import VideoTables from "./video_tables/VideoTables"

const Videos = () => {
    return (
        <div className="h-full overflow-auto px-4 flex flex-col  gap-4">
            <VideoInsights />
            <VideoTables />
        </div>
    )
}
export default Videos
