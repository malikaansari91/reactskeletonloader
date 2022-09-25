import { SkeletonLoader } from "../SkeletonLoader";
import "../../styles/dashboard.css";

export const DashboardSkeleton = () => {
  return (
    <div className="skeleton-loader-wrapper">
      <div className="d-flex flex-direction-column flex-items-center">
        <SkeletonLoader type="thumbnail" />
        <SkeletonLoader width="20%" type="title" />
        <SkeletonLoader width="100%" type="text" />
        <SkeletonLoader type="text" />
      </div>
      <hr />
      <div className="d-flex flex-direction-column flex-items-center">
        <SkeletonLoader width="20%" type="title" />
        <SkeletonLoader width="100%" type="text" />
        <SkeletonLoader width="100%" type="text" />
        <SkeletonLoader width="100%" type="text" />
        <SkeletonLoader type="text" />
      </div>
    </div>
  );
};
