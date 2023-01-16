import React, { FC } from 'react';
import Link from 'next/link';
import { URL_PAGE_SINGLE_KOVORKING } from '../../../constants';
import { ISpaceOffer } from '../../../models/ISpace';
import styles from '../Card.module.scss';
import { numberWithCommas } from '../../../helpers';

interface OffersListProps {
  offers: ISpaceOffer[];
  slug: string;
}

const OffersList: FC<OffersListProps> = ({ offers, slug }) => (
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
                  {numberWithCommas(Number(res.price))}
                  ₽
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

export default OffersList;
