import React, { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import { ISpace } from '../../models/ISpace';
import {
  URL_PAGE_SINGLE_KOVORKING,
  COUNTRY_CURRENCY_MAPPED
} from '../../constants';
import { capetalize, cutAddress, getExcerpt } from '../../helpers';
import OffersList from './OffersList';
import styles from './Card.module.scss';

interface CardProps {
  data: ISpace;
}

const Card: FC<CardProps> = ({ data }) => {
  const {
    imgTitle,
    location,
    description,
    name,
    slug,
    subway,
    priceDay,
    offers,
    country
  } = data;
  const { address } = location;

  const currencySymbol =
    COUNTRY_CURRENCY_MAPPED[country as keyof typeof COUNTRY_CURRENCY_MAPPED];

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imgTitle.url} alt={name} />
      </div>

      <div>
        <div className={styles.cardHeader}>
          <Link
            as={`${URL_PAGE_SINGLE_KOVORKING}/${slug}`}
            href={{
              pathname: URL_PAGE_SINGLE_KOVORKING,
              query: { slug }
            }}
          >
            <a>
              <Typography variant="h4">{name}</Typography>
            </a>
          </Link>
        </div>

        {subway.name ? (
          <div className={styles.cardSubway}>
            <TrainIcon />
            {capetalize(subway.name)}
          </div>
        ) : null}

        {address ? <address>{cutAddress(address)}</address> : null}

        {priceDay ? (
          <div className={styles.cardRate}>
            {`от ${priceDay} ${currencySymbol} / День`}
          </div>
        ) : null}

        <div className={styles.description}>
          {description ? <p>{getExcerpt(description)}</p> : null}
          <Link
            as={`${URL_PAGE_SINGLE_KOVORKING}/${slug}`}
            href={{
              pathname: URL_PAGE_SINGLE_KOVORKING,
              query: { slug }
            }}
          >
            <a> ...далее</a>
          </Link>
        </div>
      </div>

      {offers && !!offers.length && (
        <OffersList offers={offers} country={country} slug={slug} />
      )}
    </div>
  );
};

export default Card;
