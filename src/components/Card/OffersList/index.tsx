import React, { FC } from 'react';
import Link from 'next/link';
import {
  URL_PAGE_SINGLE_KOVORKING,
  COUNTRY_CURRENCY_MAPPED
} from '../../../constants';
import { ISpaceOffer } from '../../../models/ISpace';
import styles from '../Card.module.scss';
import { numberWithCommas } from '../../../helpers';

interface OffersListProps {
  offers: ISpaceOffer[];
  slug: string;
  country: string;
}

const OffersList: FC<OffersListProps> = ({ offers, slug, country }) => {
  const currencySymbol =
    COUNTRY_CURRENCY_MAPPED[country as keyof typeof COUNTRY_CURRENCY_MAPPED];

  return (
    <div className={styles.offers}>
      <div className={styles.offersList}>
        {offers.map((res) => (
          <li key={res.uid}>
            <Link
              as={`${URL_PAGE_SINGLE_KOVORKING}/${slug}`}
              href={{
                pathname: URL_PAGE_SINGLE_KOVORKING,
                query: { slug }
              }}
            >
              <a>
                <div>
                  {res.title}
                  :
                </div>
                {' '}
                <div>
                  <strong>
                    {`${numberWithCommas(Number(res.price))} ${currencySymbol}`}
                  </strong>
                  /
                  {res.type}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default OffersList;
