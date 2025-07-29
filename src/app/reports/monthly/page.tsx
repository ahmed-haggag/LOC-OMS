import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function MonthlySummaryPage() {
  return (
    <>
      <Breadcrumb pageName="Monthly Summary" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Monthly Summary content goes here */}
      </div>
    </>
  );
}
