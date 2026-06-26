export default async function PlaceholderPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const pageName = resolvedParams.slug[resolvedParams.slug.length - 1];
  
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] gap-4">
      <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-4xl mb-4">
        🚧
      </div>
      <h1 className="text-3xl font-bold capitalize">{pageName.replace("-", " ")}</h1>
      <p className="text-muted-foreground text-center max-w-md">
        This page is currently under construction. We are building out this feature in the upcoming phases.
      </p>
    </div>
  );
}
