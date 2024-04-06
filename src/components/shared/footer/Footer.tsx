import { NavLink } from 'react-router-dom';
import { logo } from '../../../assets';
import { headerLinks } from '../../../constants';
import { useIntl } from 'react-intl';
import { Socials } from '../socials/Social';

export const Footer = () => {
  const { formatMessage } = useIntl();
  return (
    <footer className="bg-secondary">
      <section
        className="container mx-auto min-h-[654px] pt-14 px-6 pb-8 flex flex-col items-center gap-12"
        id="footer-container"
        role="contentinfo"
        aria-label="Footer"
      >
        <img
          src={logo}
          alt="footer-logo"
          className="object-contain w-[143px]"
        />
        <ul className="flex flex-col gap-4 justify-center">
          {headerLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="subtitle-bold-nav text-customWhite cursor-pointer hover:text-primary text-center"
            >
              {formatMessage({ id: link.id })}
            </NavLink>
          ))}
        </ul>
        <p className="body text-customWhite text-opacity-50 text-center">
          {formatMessage({ id: 'footer_description' })}
        </p>
        <span className="text-customWhite body text-opacity-50 text-center">
          {formatMessage(
            { id: 'footer_copyright' },
            { year: new Date().getFullYear() }
          )}
        </span>
        <Socials />
      </section>
    </footer>
  );
};
