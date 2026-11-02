
function About() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID");
  const t = translations[language];

  return (
    <>
      <PageHeader index="02 / ABOUT" title="About." />

      <section className="container-page">
        {/* Language */}
        <div className="mb-10 flex items-center justify-between border-b pb-4">
          <p className="eyebrow">{t.label}</p>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              type="button"
              onClick={() => setLanguage("ID")}
              aria-pressed={language === "ID"}
              className={language === "ID" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
            >
              ID
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              type="button"
              onClick={() => setLanguage("EN")}
              aria-pressed={language === "EN"}
              className={language === "EN" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
            >
              EN
            </button>
          </div>
        </div>

        {/* Profile */}
        <div className="grid items-start gap-8 md:grid-cols-[minmax(220px,0.8fr)_1.2fr] lg:gap-16">
          <div>
            <img
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              width={896}
              height={1152}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale"
            />

            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>{site.name}</span>
              <span>2026</span>
            </div>
          </div>

          <div className="pt-1 md:pt-4">
            <h2 className="max-w-2xl text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              {t.headline}
            </h2>

            <div className="mt-7 max-w-xl space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
              {t.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {t.contact}
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-24 grid gap-8 border-t pt-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">{t.interests}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              {language === "ID"
                ? "Bidang yang saya eksplorasi dan kembangkan melalui berbagai karya dan proyek."
                : "Fields I explore and develop through different works and projects."}
            </p>
          </div>

          <div>
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="flex items-center justify-between gap-5 border-b py-4"
              >
                <span className="text-base font-medium tracking-tight sm:text-lg">
                  {interest}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-20 flex flex-col gap-5 border-t pt-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
            {t.closing}
          </h2>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-2 text-sm hover:text-accent"
          >
            {t.contact} ↗
          </Link>
        </div>
      </section>
    </>
  );
}
