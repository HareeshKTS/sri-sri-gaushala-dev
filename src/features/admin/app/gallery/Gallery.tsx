import AddBanner from "./components/AddBanner"
import GalleryInsights from "./components/GalleryInsights"
import GalleryList from "./components/GalleryList"
import Header from "./components/Header"
import GalleryTable from "./gallery_table/GalleryTable"

const Gallery = () => {
  return (
    <div className="h-full overflow-auto px-4 flex flex-col  gap-4">
      <GalleryInsights />
      <AddBanner />
      <Header/>
      <GalleryList/>
      <GalleryTable />
    </div>
  )
}

export default Gallery
