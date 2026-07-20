type PrimaryButtonProps = {
  title: string;
};

export default function PrimaryButton({
  title,
}: PrimaryButtonProps) {
  return (
    <button className="rounded-xl bg-cyan-300 px-8 py-4 font-semibold text-black">
      {title}
    </button>
  );
}