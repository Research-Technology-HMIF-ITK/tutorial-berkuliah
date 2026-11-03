import { CircleCheck, CircleX, Info, TriangleAlert } from 'lucide-react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CalloutType = 'info' | 'warning' | 'warn' | 'success' | 'error' | 'tip';

const icons = {
  info: Info,
  warning: TriangleAlert,
  success: CircleCheck,
  error: CircleX,
} as const;

function resolveType(type: CalloutType = 'info'): keyof typeof icons {
  if (type === 'warn') return 'warning';
  if (type === 'tip') return 'info';
  return type in icons ? (type as keyof typeof icons) : 'info';
}

interface CalloutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  type?: CalloutType;
  icon?: ReactNode;
  children?: ReactNode;
}

export function Callout({
  title,
  type = 'info',
  icon,
  children,
  className,
  ...props
}: CalloutProps) {
  const resolved = resolveType(type);
  const Icon = icons[resolved];

  return (
    <div
      role="note"
      data-callout={resolved}
      className={cn('callout', `callout-${resolved}`, className)}
      {...props}
    >
      <span className="callout-icon" aria-hidden="true">
        {icon ?? <Icon size={17} strokeWidth={2.25} />}
      </span>
      <div className="callout-content">
        {title ? <p className="callout-title">{title}</p> : null}
        <div className="callout-body">{children}</div>
      </div>
    </div>
  );
}
