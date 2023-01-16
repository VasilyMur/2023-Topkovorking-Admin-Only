import React, { FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useActions, useStateSelector } from '../../../../hooks';
import Card from '../../../../components/Card';
import CardWithControls from '../../../../components/CardWithControls';
import styles from '../../AdminFeature.module.scss';

const AdminContent: FC = () => {
  const state = useStateSelector((s) => s.admin);
  const actions = useActions((a) => a.admin);

  const { spaces } = state;

  useEffect(() => {
    actions.getUserSpaces();
  }, []);

  return (
    <div className={styles.adminContent}>
      {spaces && spaces.length ? null : (
        <>
          <Typography variant="body1" mb="16px">
            Активируйте ваш эккаунт, подтвердив свой email
          </Typography>

          <Typography variant="body1" mb="16px">
            Если ваше пространство уже добавлено на сайт - обратитесь к
            администратору, чтобы добавить его в ваш эккаунт (telegram:
            @topkovorking)
          </Typography>

          <Typography variant="body1" mb="16px">
            Если вы хотите добавить новое пространство - обратитесь к
            администратору, чтобы активировать вкладку "Добавить" (telegram:
            @topkovorking)
          </Typography>
        </>
      )}

      {spaces.map((s) => (
        <CardWithControls
          key={s._id}
          spaceId={s._id}
          publishStatus={s.publishStatus}
          slug={s.slug}
          adminDetails={s.adminDetails}
        >
          <Card data={s} />
        </CardWithControls>
      ))}
    </div>
  );
};

export default AdminContent;
