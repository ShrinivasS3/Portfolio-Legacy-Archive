import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full pt-6 border-t border-textlight/80 dark:border-textdark/80">
      <div className="container flex items-center justify-between">
        <div className="text-xs text-textlight/80 dark:text-textdark/80">
          Built by @shrinivas | ©2024 shrinivas sesadri. All Rights Reserved
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
