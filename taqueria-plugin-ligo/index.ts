import { configurePlugin } from '@taqueria/lib-ligo';
import * as templates from './ligo_templates';

configurePlugin({
	name: '@taqueria/plugin-ligo',
	alias: 'ligo',
	dockerImage: 'ligolang/ligo:1.0.0',
	dockerImageEnvVar: 'TAQ_LIGO_IMAGE',
	unparsedArgs: process.argv,
	templates,
});
