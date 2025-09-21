import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { ContentManager } from "@/components/dashboard/content-manager";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { TalentRequests } from "@/components/dashboard/talent-requests";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { PerformanceMetrics } from "@/components/dashboard/performance-metrics";

export default function DashboardPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Bienvenue sur votre Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Gérez efficacement vos contenus, talents et analytics WeekendRealo
        </p>
      </div>

      {/* Stats Overview */}
      <DashboardStats />

      {/* Quick Actions */}
      <QuickActions />

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
          <PerformanceMetrics />
        </div>
      </div>
    </div>
  );
}
