const SectionTitle = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-shop_light_green">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-shop_dark_green md:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-sm text-dark-text">{description}</p>}
    </div>
  );
};

export default SectionTitle;
