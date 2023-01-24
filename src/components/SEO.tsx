import React, { FC } from 'react';
import Head from 'next/head';

const siteName = 'Offizz.ru';
const title = 'Сервис управления офисными пространствами';
const description = 'Сервис управления офисными пространствами';
const canonical = 'https://offizz.ru';

interface SEOProps {
  pageMeta?: {
    title: string;
    description: string;
    canonical: string;
  };
}

const SEO: FC<SEOProps> = ({ pageMeta }) => {
  let metaDefault = {
    title,
    description,
    canonical
  };

  if (pageMeta) {
    metaDefault = {
      ...pageMeta
    };
  }

  return (
    <Head>
      <title key="title">{`${metaDefault.title} | ${siteName}`}</title>
      <meta name="description" content={metaDefault.description} />
      <link rel="canonical" href={metaDefault.canonical ?? canonical} />

      <link rel="shortcut icon" href="/crown.png" />
    </Head>
  );
};

export default SEO;
