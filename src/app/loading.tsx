import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Skeleton for Welcome Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <Skeleton className="h-64 md:h-auto md:w-1/2 rounded-lg" />
        <div className="md:w-1/2 space-y-4">
          <Skeleton className="h-8 w-3/4 rounded" />
          <Skeleton className="h-6 w-full rounded" />
          <Skeleton className="h-6 w-5/6 rounded" />
        </div>
      </div>

      {/* Skeleton for Course Listing */}
      <div>
        <Skeleton className="h-8 w-1/3 mx-auto mb-8 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-5/6 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-full rounded" />
               <Skeleton className="h-10 w-full rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Skeleton for Contact Section */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="space-y-4">
            <Skeleton className="h-8 w-1/2 rounded" />
            <Skeleton className="h-6 w-full rounded" />
            <Skeleton className="h-6 w-3/4 rounded" />
            <Skeleton className="h-6 w-4/5 rounded" />
         </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/2 rounded" />
            <Skeleton className="h-10 w-full rounded" />
            <Skeleton className="h-10 w-full rounded" />
            <Skeleton className="h-10 w-full rounded" />
            <Skeleton className="h-20 w-full rounded" />
            <Skeleton className="h-10 w-full rounded" />
          </div>
       </div>
    </div>
  );
}
