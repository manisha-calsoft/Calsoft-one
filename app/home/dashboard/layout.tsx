export default function DashboardLayout({ children }: any) {
  return (
    <div className="bg-gray-500 p-5">
      <h1>This is my Layout</h1>
      {children}
    </div>
  );
}
