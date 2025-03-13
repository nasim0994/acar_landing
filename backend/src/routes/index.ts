import { Router } from 'express';
const router = Router();
import { authRoute } from '../modules/auth/authRoute';
import { adminRoute } from '../modules/admin/adminRoute';
import { seoRoute } from '../modules/seo/seoRoute';
import { logoRoute } from '../modules/logo/logoRoute';
import { faviconRoute } from '../modules/favicon/faviconRoute';
import { bannerRoute } from '../modules/banner/bannerRoute';
import { faqSectionRoute } from '../modules/faqSection/faqSectionRoute';
import { faqRoute } from '../modules/faq/faqRoute';
import { featureRoute } from '../modules/feature/featureRoute';
import { featureSectionRoute } from '../modules/featureSection/featureSectionRoute';
import { productRoute } from '../modules/product/productRoute';
import { businessRoute } from '../modules/business/businessRoute';
import { orderRoute } from '../modules/order/orderRoute';

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
  {
    path: '/seo',
    route: seoRoute,
  },
  {
    path: '/logo',
    route: logoRoute,
  },
  {
    path: '/favicon',
    route: faviconRoute,
  },
  {
    path: '/banner',
    route: bannerRoute,
  },
  {
    path: '/faq-section',
    route: faqSectionRoute,
  },
  {
    path: '/faq',
    route: faqRoute,
  },
  {
    path: '/feature-section',
    route: featureSectionRoute,
  },
  {
    path: '/feature',
    route: featureRoute,
  },
  {
    path: '/business',
    route: businessRoute,
  },
  {
    path: '/product',
    route: productRoute,
  },
  {
    path: '/order',
    route: orderRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
