import clsx from "clsx";

export default function UnstyledLink({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: any) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");

  if (!isNewTab) {
    return (
      <div href={href} {...rest} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={clsx(className, "cursor-[ne-resize]")}
    >
      {children}
    </div>
  );
}
