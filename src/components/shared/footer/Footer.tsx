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
        className="container mx-auto h-[654px] pt-14 px-6 pb-8 flex flex-col items-center gap-12 sm:pt-[60px] sm:px-10 sm:pb-[46px] sm:flex-row sm:flex-wrap sm:gap-0 sm:h-[400px] lg:px-0"
        id="footer-container"
        role="contentinfo"
        aria-label="Footer"
      >
        <div className="sm:basis-full lg:basis-1/2">
          <img
            src={logo}
            alt="footer-logo"
            className="object-contain max-w-[143px] "
          />
        </div>
        <ul className="flex flex-col gap-4 justify-center sm:basis-full sm:flex-row sm:justify-start lg:basis-1/2 lg:justify-end">
          {headerLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="subtitle-bold-nav text-customWhite cursor-pointer hover:text-primary text-center sm:text-start"
            >
              {formatMessage({ id: link.id })}
            </NavLink>
          ))}
        </ul>
        <p className="body text-customWhite text-opacity-50 text-center sm:text-start lg:basis-1/2">
          {formatMessage({ id: 'footer_description' })}
        </p>
        <span className="text-customWhite body text-opacity-50 text-center sm:basis-10/12 sm:text-start lg:basis-1/2 lg:order-4">
          {formatMessage(
            { id: 'footer_copyright' },
            { year: new Date().getFullYear() }
          )}
        </span>
        <Socials className="lg:basis-1/2 lg:justify-end" />
      </section>
    </footer>
  );
};
