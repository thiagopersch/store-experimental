// import { Atom, atom as jotaiAtom } from "jotai";
// import { useAtomValue } from "jotai/utils";
// import { useMemo } from "react";

// export function useOptionalAtomValue<T>(atom?: Atom<T>): T | undefined {
//   const optionalAtom = useMemo(
//     () =>
//       jotaiAtom((get) => {
//         if (!atom) return undefined;
//         return get(atom);
//       }),
//     [atom],
//   );

//   return useAtomValue(optionalAtom);
// }
