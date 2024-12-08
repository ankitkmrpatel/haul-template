import { atom, useAtom } from "jotai";

import { ElementData, datas } from "./data";

type Config = {
  selected: ElementData["id"] | null;
};

const configAtom = atom<Config>({
  selected: datas[0].id,
});

export function useData() {
  return useAtom(configAtom);
}
