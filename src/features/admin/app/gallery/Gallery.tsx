import AddBanner from "./components/AddBanner"
import GalleryInsights from "./components/GalleryInsights"
import GalleryList from "./components/GalleryList"
import GalleryTable from "./gallery_table/GalleryTable"

const Gallery = () => {
  return (
    <div className="h-full overflow-auto px-4 flex flex-col  gap-4">
      <GalleryInsights />
      <AddBanner />
      <GalleryList/>
      <GalleryTable />
    </div>
  )
}

export default Gallery
