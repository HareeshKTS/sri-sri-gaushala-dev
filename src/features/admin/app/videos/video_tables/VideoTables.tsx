import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "../components/Header"
import AllVideosTable from "./all_videos/AllVideosTable"
import CustomModal from "@/shared/CustomModal";
import UploadVideos from "../components/modals/UploadVideos";

const VideoTables = () => {
  const [showUploadVideos, setShowUploadVideos] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Header 
        setShowUploadVideos={setShowUploadVideos}
      />
      <div>
        <Tabs defaultValue="All Videos">
          <TabsList variant="line" >
            <TabsTrigger value="All Videos" className="cursor-pointer">All Videos</TabsTrigger>
            <TabsTrigger value="Uploaded Videos" className="cursor-pointer">Uploaded Videos</TabsTrigger>
            <TabsTrigger value="YouTube Videos" className="cursor-pointer">YouTube Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="All Videos">
            <AllVideosTable />
          </TabsContent>
          <TabsContent value="Uploaded Videos">
            Uploaded Videos.
          </TabsContent>
          <TabsContent value="YouTube Videos">
            YouTube Videos.
          </TabsContent>
        </Tabs>
      </div>
      {
        showUploadVideos && (
          <CustomModal
            open={showUploadVideos}
            onOpenChange={setShowUploadVideos}
          >
            <UploadVideos
              setOpen={setShowUploadVideos}
            />
          </CustomModal>
        )
      }
    </div>
  )
}

export default VideoTables
