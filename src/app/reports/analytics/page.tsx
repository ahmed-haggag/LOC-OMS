import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function AnalyticsPage() {
  return (
    <>
      <Breadcrumb pageName="Analytics" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Analytics content goes here */}
      </div>
    </>
  );
}
