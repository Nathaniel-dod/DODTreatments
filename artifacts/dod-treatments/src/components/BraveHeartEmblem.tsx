type BraveHeartEmblemProps = {
  variant?: 'emblem' | 'male' | 'female';
  className?: string;
};

export function BraveHeartEmblem({ variant = 'emblem', className = '' }: BraveHeartEmblemProps) {
  const mask = `url("${import.meta.env.BASE_URL}images/brave-heart-${variant}.png") center / contain no-repeat`;

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block shrink-0 ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--gold-deep) 0%, var(--gold-core) 30%, var(--gold-light) 60%, var(--gold-pale) 100%)',
        mask,
        WebkitMask: mask,
      }}
    />
  );
}