import { Navigate, Route, Routes } from "react-router";
import { MotionConfig } from "motion/react";
import BlogsHome from "./BlogsHome";
import ReadArtclesCmpnt from "./ReadArtclesCmpnt";
const BlogAndArticles = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route index element={<BlogsHome />} />
        <Route path=":id" element={<ReadArtclesCmpnt />} />
        <Route path="*" element={<Navigate to="/resources/blogs_articles" replace />} />
      </Routes>
    </MotionConfig>
  );
};
export default BlogAndArticles;
