import * as withTypescript from '@zeit/next-typescript';
import * as compose from 'next-compose-plugins';

export default compose(
  [
    withTypescript,
    {
      useFileSystemPublicRoutes: false,
    },
  ],
  {
    publicRuntimeConfig: {},
  },
);
