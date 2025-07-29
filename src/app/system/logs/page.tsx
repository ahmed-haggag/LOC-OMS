import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function LogsPage() {
  return (
    <>
      <Breadcrumb pageName="Logs" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Logs content goes here */}
      </div>
    </>
  );
}
