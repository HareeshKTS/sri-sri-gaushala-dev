import { useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import { EASE } from '@/shared/website_shared_cmpnts/animations/WebsiteAnimations'

interface GaushalaVideo {
  id: string
  title: string
}

const VIDEOS: GaushalaVideo[] = [
  { id: 'FAyYO-wh_X4', title: 'Why you should spend more time with cows' },
  { id: 'a7byMZ-AYAY', title: 'Art of Living New Gaushala | Gaushala Details' },
  { id: 'Ki8gf1OM9Qs', title: 'Sri Sri Gaushala, a Heaven on Earth for Cows' },
  { id: 'XMgV8XZEF2E', title: 'A day at the Gaushala' },
]

const embedUrl = (id: string) =>`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`

const VideoCard = ({video,reduceMotion}: {
  video: GaushalaVideo
  reduceMotion: boolean
}) => {
  const [loaded, setLoaded] = useState(false)
  const itemVariants: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: EASE },
    },
  }
  return (
    <motion.article variants={itemVariants}>
      <motion.div
        className="gv-frame"
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        {!loaded && <div className="gv-skeleton" aria-hidden="true" />}
        <motion.iframe
          src={embedUrl(video.id)}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          initial={false}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </motion.div>
    </motion.article>
  )
}

const GaushalaVideos = () => {
  const reduceMotion = useReducedMotion() ?? false
  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: 0.05,
      },
    },
  }
  return (
    <section className="gv-section">
      <style>{`
        .gv-section {
          max-width: 85%;
          margin: 0 auto;
          padding: 24px 16px;
        }
        .gv-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 950px) {
          .gv-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .gv-section { max-width: 90%; }
        }
        @media (max-width: 650px) {
          .gv-grid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .gv-section { max-width: 90%; }
        }
        .gv-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 14 / 9;
          border-radius: 0px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }
        .gv-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .gv-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            #1a1a1a 30%,
            #2b2b2b 50%,
            #1a1a1a 70%
          );
          background-size: 200% 100%;
          animation: gv-shimmer 1.4s linear infinite;
        }
        @keyframes gv-shimmer {
          from { background-position: 200% 0; }
          to { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gv-skeleton { animation: none; }
        }
      `}</style>
      <motion.div
        className="gv-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} reduceMotion={reduceMotion} />
        ))}
      </motion.div>
    </section>
  )
}
export default GaushalaVideos

// const VIDEOS: GaushalaVideo[] = [
//   { id: 'FAyYO-wh_X4', title: 'Why you should spend more time with cows' },
//   { id: 'a7byMZ-AYAY', title: 'Art of Living New Gaushala | Gaushala Details' },
//   { id: 'Ki8gf1OM9Qs', title: 'Sri Sri Gaushala, a Heaven on Earth for Cows' },
//   { id: 'XMgV8XZEF2E', title: 'A day at the Gaushala' },
// ]

// // const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`
// const embedUrl = (id: string) =>`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`

// const GaushalaVideos = () => {
//   return (
//     <section className="gv-section">
//       <style>{`
//         .gv-section {
//           max-width: 75%;
//           margin: 0 auto;
//           padding: 24px 16px;
//         }
//         .gv-grid {
//           display: grid;
//           grid-template-columns: repeat(2, minmax(0, 1fr));
//           gap: 24px;
//         }
//         @media (max-width: 700px) {
//           .gv-grid { grid-template-columns: 1fr; }
//           .gv-section { max-width: 90%;}
//         }
//         .gv-frame {
//           position: relative;
//           width: 100%;
//           aspect-ratio: 14 / 8;
//           border-radius:8px;
//           overflow: hidden;
//           background: #111;
//         }
//         .gv-frame iframe {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           border: 0;
//         }
//         .gv-title {
//           display: block;
//           margin-top: 10px;
//           font-size: 16px;
//           font-weight: 600;
//           line-height: 1.35;
//           color: inherit;
//           text-decoration: none;
//         }
//         .gv-title:hover,
//         .gv-title:focus-visible {
//           text-decoration: underline;
//         }
//       `}</style>

//       <div className="gv-grid">
//         {VIDEOS.map((video) => (
//           <article key={video.id}>
//             <div className="gv-frame">
//               <iframe
//                 src={embedUrl(video.id)}
//                 title={video.title}
//                 loading="lazy"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//               />
//             </div>
//             {/* <a
//               className="gv-title"
//               href={watchUrl(video.id)}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {video.title}
//             </a> */}
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }
// export default GaushalaVideos