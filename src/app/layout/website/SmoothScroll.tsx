import { useEffect } from "react";
import { useLocation } from "react-router";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const NAVBAR_OFFSET = -80;

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function ScrollOnNavigate() {
    const lenis = useLenis();
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const id = setTimeout(() => {
            if (hash) {
                const el = document.querySelector(hash);

                if (!el) return;

                if (lenis) {
                    lenis.scrollTo(el as HTMLElement, {
                        offset: NAVBAR_OFFSET,
                        duration: 1.8,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                } else {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            } else if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }, 100);

        return () => clearTimeout(id);
    }, [pathname, hash, lenis]);

    return null;
}

const SmoothScroll = () => {
    const reducedMotion = prefersReducedMotion();

    return (
        <>
            {!reducedMotion && (
                <ReactLenis
                    root
                    options={{
                        lerp: 0.075,
                        smoothWheel: true,
                        syncTouch: false,
                        wheelMultiplier: 0.8,
                        touchMultiplier: 1,
                        autoRaf: true,
                    }}
                />
            )}

            <ScrollOnNavigate />
        </>
    );
};

export default SmoothScroll;





// import { useEffect } from "react";
// import { useLocation } from "react-router";
// import { ReactLenis, useLenis } from "lenis/react";
// import "lenis/dist/lenis.css";

// const NAVBAR_OFFSET = -80; // ← set to your navbar height (negative number)

// const prefersReducedMotion = () =>
//     typeof window !== "undefined" &&
//     window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// /** On route change: go to top, or glide to #hash targets. */
// function ScrollOnNavigate() {
//     const lenis = useLenis();
//     const { pathname, hash } = useLocation();
//     useEffect(() => {
//         // small delay so lazy-loaded pages have rendered their content
//         const id = setTimeout(() => {
//             if (hash) {
//                 const el = document.querySelector(hash);
//                 if (!el) return;
//                 if (lenis) lenis.scrollTo(el as HTMLElement, { offset: NAVBAR_OFFSET });
//                 else el.scrollIntoView();
//             } else if (lenis) {
//                 lenis.scrollTo(0, { immediate: true });
//             } else {
//                 window.scrollTo(0, 0);
//             }
//         }, 100);
//         return () => clearTimeout(id);
//     }, [pathname, hash, lenis]);

//     return null;
// }
// const SmoothScroll = () => (
//     <>
//         {/* skipped for users who turned off animations in their OS */}
//         {!prefersReducedMotion() && (
//             <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }} />
//         )}
//         <ScrollOnNavigate />
//     </>
// );
// export default SmoothScroll;



