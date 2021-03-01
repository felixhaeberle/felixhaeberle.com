import FooterLinks from './FooterLinks'
import { socialLinks } from '../2_molecules/Footer'

export default {
  title: 'Atoms/FooterLinks',
  component: FooterLinks
}

const Template = (args) => <FooterLinks {...args} />;

export const FooterLinksDefault = Template.bind({});

FooterLinksDefault.args = {
  links: socialLinks
};