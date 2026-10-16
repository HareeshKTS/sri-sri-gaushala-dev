
import banner_text from "@/assets/website_assets/images/banner_text.webp"
interface titleProps{
    title:string
}
function Text_banners({title}:titleProps) {
    return (
        <div>
           
                <img className='w-38 md:w-96' src={banner_text} alt="banner_text" />
                <p className='absolute top-[-2px] md:top-[-5px] left-[-7px] md:left-[-5px] uppercase font-saira font-medium w-full h-full flex flex-col justify-center items-center text-sm md:text-3xl text-white'>
                    {title}
                </p>
            </div>
       
    )
}
export default Text_banners