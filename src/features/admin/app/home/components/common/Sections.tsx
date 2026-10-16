import { admin_route_name } from "@/app/router/RouteNameEnums"
import type { MainFormValues, RouteSections } from "../../Types"
import CommonHeader from "./CommonHeader"
import CommonBody from "./CommonBody"
import type { Control } from "react-hook-form"
import { useState } from "react"
import CustomModal from "@/shared/CustomModal"
import BreedsModal from "../modals/BreedsModal"
import VideoModal from "../modals/VideoModal"

type SectionProps = {
    control: Control<MainFormValues>;
}

const RouteHeaders: RouteSections[] = [
    { id: 1, title: "Who we are", route: "About Us", path: `/${admin_route_name}/about_us`, },
    { id: 2, title: "Visit Us", route: "CTAs", path: `/${admin_route_name}/CTAs`, },
    { id: 3, title: "Our Key Activities", route: "Gausewa", path: `/${admin_route_name}/gausewa`, },
    { id: 4, title: "Videos", route: "Videos", path: `/${admin_route_name}/videos`, },
    { id: 5, title: "Volunteer Now", route: "CTAs", path: `/${admin_route_name}/CTAs`, },
    { id: 6, title: "FAQs", route: "FAQs", path: `/${admin_route_name}/FAQs`, },
    { id: 7, title: "Donate Now", route: "FAQs", path: `/${admin_route_name}/CTAs`, },
    { id: 8, title: "Know the Breeds", route: "Breeds", path: `/${admin_route_name}/breeds`, },
    { id: 9, title: "Testimonials", route: "Testimonials", path: `/${admin_route_name}/testimonials`, },
];

const Sections: React.FC<SectionProps> = ({ control }) => {
    const [showBreeds, setShowBreeds] = useState<boolean>(false);
    const [showVideos, setShowVideos] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col gap-4">
                {
                    RouteHeaders.map((route) => {
                        const hideHeader =
                            route.title === "Know the Breeds" ||
                            route.title === "Testimonials" ||
                            route.title === "Visit Us" ||
                            route.title === "Videos" ||
                            route.title === "Volunteer Now" ||
                            route.title === "Donate Now"

                        const hideBody =
                            route.title === "FAQs" ||
                            route.title === "Who we are" ||
                            route.title === "Our Key Activities"

                        return (
                            <div
                                key={route.id}
                            >
                                {!hideHeader && (
                                    <div>
                                        <CommonHeader route={route} />
                                    </div>
                                )}
                                {!hideBody && (
                                    <div>
                                        <CommonBody
                                            route={route}
                                            control={control}
                                            setShowBreeds={setShowBreeds}
                                            setShowVideos={setShowVideos}
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    }
                    )
                }
                {

                }
            </div>
            {
                showBreeds && (
                    <CustomModal
                        open={showBreeds}
                        onOpenChange={setShowBreeds}
                    >
                        <BreedsModal
                            setOpen={setShowBreeds}
                        />
                    </CustomModal>
                )
            }
            {
                showVideos && (
                    <CustomModal
                        open={showVideos}
                        onOpenChange={setShowVideos}
                    >
                        <VideoModal
                            setOpen={setShowVideos}
                        />
                    </CustomModal>
                )
            }
        </>
    )
}

export default Sections
