import { getCategoryChartData, getOverview, getSalesChartData } from "@/utilies/action";
import SalesChart from "./SalesChart";
import CategoryPieChart from "./CategoryPieChart";

export default async function DashboardPage() {
  const overview = await getOverview();
  const ChartData = await getSalesChartData();
  const cateData = await getCategoryChartData();

  return (
    <div className="w-full p-4 sm:p-6 lg:p-10">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">{overview.totalUsers}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Total Artists</h3>
          <p className="text-2xl font-bold">{overview.totalArtists}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Artworks Sold</h3>
          <p className="text-2xl font-bold">{overview.totalArtworksSold}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Total Revenue</h3>
          <p className="text-2xl font-bold">${overview.totalRevenue}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SalesChart ChartData={ChartData} />
        <CategoryPieChart cateData={cateData} />
      </div>
    </div>
  );
}
