"use client";
import PageTransition from "@/components/layout/PageTransition";
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-4xl mx-auto w-full">
<PageTransition>
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Settings</h1>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Account Preferences</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <h3 className="font-medium">Audio Pronunciation</h3>
                  <p className="text-sm text-gray-500">Auto-play audio during lessons</p>
                </div>
                <div className="w-12 h-6 bg-brand-500 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-gray-500">System default applied automatically</p>
                </div>
                <div className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">Auto</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-red-200">
            <h2 className="text-xl font-bold mb-4 text-red-500">Danger Zone</h2>
            <p className="text-sm text-gray-500 mb-4">Resetting your progress cannot be undone. All XP, streaks, and completed lessons will be lost.</p>
            <Button variant="danger" onClick={() => {
              if (window.confirm("Are you sure you want to reset all progress?")) {
                localStorage.removeItem('sabai-thai-storage');
                window.location.reload();
              }
            }}>Reset All Progress</Button>
          </Card>
        </div>
      </PageTransition>
</main>
      <BottomNav />
    </div>
  );
}
