type Props = { title: string; description?: string };

export default function PlaceholderPage({ title, description }: Props) {
  return (
    <div className="container mx-auto py-16">
      <div className="rounded-xl border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-urdu-heading mb-2">{title}</h1>
        {description ? (
          <p className="text-foreground/70">{description}</p>
        ) : (
          <p className="text-foreground/70">This page will be crafted next. Tell us the exact content you want and we’ll make it pixel-perfect.</p>
        )}
      </div>
    </div>
  );
}
