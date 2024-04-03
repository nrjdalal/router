import { lazyRouteComponent } from '@tanstack/react-router';
const $$splitComponentImporter = () => import('tsr-split:/Users/tannerlinsley/GitHub/router/packages/router-vite-plugin/useStateDestructure.tsx?tsr-split');
import { startProject } from '~/projects/start';
import { createFileRoute } from '@tanstack/react-router';
import { seo } from '~/utils/seo';
export const Route = createFileRoute('/_libraries/start/$version/')({
  component: lazyRouteComponent($$splitComponentImporter, 'component'),
  meta: () => seo({
    title: startProject.name,
    description: startProject.description
  })
});