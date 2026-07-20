type FeatureCardProps = {
  title: string;
};

export default function FeatureCard({
  title,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-gray-700 px-6 py-4">
      {title}
    </div>
  );
}

