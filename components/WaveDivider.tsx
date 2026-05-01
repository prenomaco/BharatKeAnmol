import { cn } from '@/lib/utils'

interface Props {
  path: string
  fill: string
  className?: string
  flip?: boolean
}

export function WaveDivider({ path, fill, className, flip }: Props) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={cn('w-full block', className)}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <path d={path} fill={fill} />
    </svg>
  )
}
