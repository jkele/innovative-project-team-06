import { useCallback, useMemo, useSyncExternalStore } from "react";

type MinMax = "min" | "max";

const supportMatchMedia =
  typeof window !== "undefined" && typeof window.matchMedia !== "undefined";

export const useMediaQuery = (
  query: `(${MinMax}-width: ${number}px)`,
  defaultMatches = false,
  matchMedia: typeof window.matchMedia | null = supportMatchMedia
    ? window.matchMedia
    : null,
  ssrMatchMedia: ((query: string) => { matches: boolean }) | null = null,
  noSsr = false
) => {
  const getDefaultSnapshot = useCallback(
    () => defaultMatches,
    [defaultMatches]
  );

  const getServerSnapshot = useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(query).matches;
    }

    if (ssrMatchMedia !== null) {
      const { matches } = ssrMatchMedia(query);

      return () => matches;
    }

    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);

  const [getSnapshot, subscribe] = useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }

    const mediaQueryList = matchMedia(query);

    return [
      () => mediaQueryList.matches,
      (notify: () => void) => {
        mediaQueryList.addListener(notify);

        return () => {
          mediaQueryList.removeListener(notify);
        };
      },
    ];
  }, [getDefaultSnapshot, matchMedia, query]);

  const match = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return match;
};
