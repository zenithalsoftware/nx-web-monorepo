import { Tree } from '@nrwl/devkit';
import { cypressComponentConfigGenerator } from '@nrwl/react';
import { CypressComponentConfigurationSchema } from './schema';

export default async function (
  tree: Tree,
  options: CypressComponentConfigurationSchema
) {
  await cypressComponentConfigGenerator(tree, {
    ...options,
  });
}
