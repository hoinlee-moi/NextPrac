"use client";

enum ICONS {
  PENCIL = "PENCIL",
  TRASH = "TRASH",
  CLOSE = "CLOSE",
}

type IconProps = {
  icon: keyof typeof ICONS;
};

export default function Icon({ icon }: IconProps) {
  let iconPath = <></>;
  switch (icon) {
    case ICONS.PENCIL:
      iconPath = (
        <svg
          className="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 shrink-0"
          viewBox="0 0 16 16"
        >
          <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
        </svg>
      );
      break;
    case ICONS.TRASH:
      iconPath = (
        <svg
          className="w-4 h-4 fill-current text-rose-500 shrink-0"
          viewBox="0 0 16 16"
        >
          <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
        </svg>
      );
      break;
    case ICONS.CLOSE:
      iconPath = (
        <svg className="w-4 h-4 fill-current">
          <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
        </svg>
      );
    default:
      break;
  }
  return iconPath;
}
