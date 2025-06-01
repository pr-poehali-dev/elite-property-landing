import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { lazy, Suspense } from "react";

const fallbackIcon = lazy(dynamicIconImports["circle-alert"]);

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
  fallback?: keyof typeof dynamicIconImports;
}

const Icon = ({ name, fallback, ...props }: IconProps) => {
  let LucideIcon;

  try {
    LucideIcon = lazy(dynamicIconImports[name]);
  } catch {
    if (fallback) {
      LucideIcon = lazy(dynamicIconImports[fallback]);
    } else {
      LucideIcon = fallbackIcon;
    }
  }

  return (
    <Suspense
      fallback={
        <div style={{ width: props.size || 24, height: props.size || 24 }} />
      }
    >
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
