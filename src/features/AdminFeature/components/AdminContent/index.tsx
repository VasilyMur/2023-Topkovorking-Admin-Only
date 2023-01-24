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
          <Typography variant="body1" mb="16px" sx={{ color: '#fe7968' }}>
            У вас пока нет доступных пространств
          </Typography>

          <Typography variant="body1" mb="16px">
            1. Активируйте ваш эккаунт, подтвердив свой email
          </Typography>

          <Typography variant="body1" mb="16px">
            2. После активации вы сможете добавить новое пространство - через
            вкладку "Добавить"
          </Typography>

          <Typography variant="body1" mb="16px">
            3. Модерация нового пространства занимает около 24 часов. Если
            требуется ускорить процесс - обратитесь к администратору (telegram:
            @topkovorking)
          </Typography>

          <Typography variant="body1" mb="16px">
            4. Если ваше пространство уже добавлено на сайт - обратитесь к
            администратору, чтобы добавить его в ваш эккаунт (telegram:
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
