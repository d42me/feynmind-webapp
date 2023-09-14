import Head from "next/head";

type PageHeadProps = {
  title: string;
};

export default function PageHead({ title }: PageHeadProps) {
  const pageTitle = title + " | FeynMind";

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta
        property="og:image"
        content="https://www.feynmind.ai/feynman-logo.jpg"
      />
      <meta property="og:title" content="FeynMind" />
      <meta
        property="og:description"
        content="FeynMind is a fine-tuned GPT model based on the Feynman lectures. Dive deep into the enthralling world of physics and have conversations with Richard Feynman himself in a profound Caltech surrounding, where curiosity meets wisdom and the spirit of exploration is ever-present."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="FeynMind Banner" />
      <meta
        name="twitter:title"
        content="FeynMind is a fine-tuned GPT model based on the Feynman lectures. "
      />
      <meta
        name="twitter:description"
        content="Dive deep into the enthralling world of physics and have conversations with Richard Feynman himself in a profound Caltech surrounding, where curiosity meets wisdom and the spirit of exploration is ever-present."
      />
      <meta
        name="twitter:image"
        content="https://www.feynmind.ai/feynman-logo.jpg"
      />
    </Head>
  );
}
