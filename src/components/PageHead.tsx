import Head from "next/head";

type PageHeadProps = {
  title: string;
};

export default function PageHead({ title }: PageHeadProps) {
  return (
    <Head>
      <title>{title} | FeynMind</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta property="og:image" content="https://feynmind.ai/api/og" />
      <meta property="og:title" content="FeynMind" />
      <meta
        property="og:description"
        content="FeynMind is a finetuned GPT model based on the Feynman lectures. Dive deep into the enthralling world of physics and have conversations with Richard Feynman himself in a profound Caltech surrounding, where curiosity meets wisdom and the spirit of exploration is ever-present."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
