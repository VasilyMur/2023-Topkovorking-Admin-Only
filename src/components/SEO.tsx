import React, { FC } from 'react';
import Head from 'next/head';

const siteName = 'Topkovorking.ru';
const title = 'Коворкинги Москвы 2023 (адрес, телефон, фото)';
const description =
  'Лучшие коворкинги Москвы - на карте города с указанием адреса, времени работы, контактами и ценами. Разбивка коворкингов по станциям метро.';
const canonical = 'https://topkovorking.ru';

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
