// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://xhardeep.github.io',
	base: '/csirnetphysics',
	integrations: [
		starlight({
			title: 'CSIR NET Physics',
			description: 'Comprehensive documentation and notes for CSIR NET Physics preparation.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/xhardeep/csirnetphysics' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Core Subjects',
					items: [
						{ label: 'Mathematical Physics', slug: 'core/mathematical-physics' },
						{ label: 'Classical Mechanics', slug: 'core/classical-mechanics' },
						{ label: 'Quantum Mechanics', slug: 'core/quantum-mechanics' },
						{ label: 'Electromagnetic Theory', slug: 'core/electromagnetic-theory' },
					],
				},
				{
					label: 'Advanced Subjects',
					items: [{ autogenerate: { directory: 'advanced' } }],
				},
			],
		}),
	],
});

