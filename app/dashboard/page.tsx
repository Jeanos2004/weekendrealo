import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { ContentManager } from "@/components/dashboard/content-manager"
import { AnalyticsChart } from "@/components/dashboard/analytics-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { TalentRequests } from "@/components/dashboard/talent-requests"

export default function DashboardPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Stats Overview */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column - Analytics & Content */}
        <div className="xl:col-span-2 space-y-6 md:space-y-8">
          <AnalyticsChart />
          <ContentManager />
        </div>

        {/* Right Column - Activity & Requests */}
        <div className="space-y-6 md:space-y-8">
          <RecentActivity />
          <TalentRequests />
        </div>
      </div>
    </div>
  )
}
