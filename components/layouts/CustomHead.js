import Head from 'next/head';

export default function CustomHead({
  title = 'WEBSITE',
  description = 'Описание',
}) {
  return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
  );
}
